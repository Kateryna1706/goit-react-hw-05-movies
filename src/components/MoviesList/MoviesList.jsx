import { NavLink } from 'react-router-dom';
import { MoviesListItem } from './MoviesList.styled';

const MoviesList = ({ trendMovies }) => {
  return (
    <ul>
      {trendMovies.map(movie => (
        <MoviesListItem key={movie.id}>
          <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
        </MoviesListItem>
      ))}
    </ul>
  );
};

export default MoviesList;
