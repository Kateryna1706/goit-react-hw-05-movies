import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  console.log(movieId);
  

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=cb48852f2616f6f5995e859b25c73cfe`
      )
      .then(response => {
        console.log(response.data);
        const foundMovie = response.data;
        setMovie(foundMovie);
       
      });
  }, [movieId]);

  

  return (
    <main>
      <img src={`${movie.backdrop_path}`} alt="" />
      <h2>{movie.title}</h2>
      <p>{movie.release_date}</p>
      <p>User score: {movie.vote_count}</p>
      <p>Overview: {movie.overview}</p>
      <p>Genres:</p>
      <ul>
        {movie.genres.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default MovieDetails;
