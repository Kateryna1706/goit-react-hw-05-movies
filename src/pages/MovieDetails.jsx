import { NavLink, Routes, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Notify } from 'notiflix';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=cb48852f2616f6f5995e859b25c73cfe`
      )
      .then(response => {
        console.log(response.data);
        const foundMovie = response.data;
        setMovie(foundMovie);
        if (!foundMovie) {
          throw new Error('No found!');
        }
      })
      .catch(error => {
        Notify.failure('No found!');
      })
      .finally(setLoading(false));
  }, [movieId]);

  return (
    <div>
      {loading && (
        <MagnifyingGlass
          visible={true}
          height="300"
          width="300"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      )}
      {movie !== null && <img src={`${movie.poster_path}`} alt="" />}
      {movie !== null && <h2>{movie.title}</h2>}
      {movie !== null && <p>{movie.release_date}</p>}
      {movie !== null && <p>User score: {movie.vote_count}</p>}
      {movie !== null && <p>Overview: {movie.overview}</p>}
      {movie !== null && (
        <div>
          Genres:
          <ul>
            {movie.genres.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="cast" element={<Cast id={movieId}/>} />
        <Route path="reviews" element={<Reviews id={movieId}/>} />
      </Routes>
    </div>
  );
};

export default MovieDetails;
