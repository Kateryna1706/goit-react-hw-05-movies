import { NavLink } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}r&api_key=cb48852f2616f6f5995e859b25c73cfe`
      )
      .then(response => {
        const movies = response.data.results;
        setMovies(movies);
      });
  }, []);

  return (
    <main>
      <p>Movies</p>
      <SearchForm />

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink to="/movies/:movieId">{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Movies;
