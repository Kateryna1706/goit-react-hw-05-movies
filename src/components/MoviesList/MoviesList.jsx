import { NavLink, useLocation } from 'react-router-dom';
import { MoviesListItem } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <MoviesListItem key={movie.id}>
          <NavLink
            to={`/movies/${movie.id}`}
            state={{ from: `${location.pathname}${location.search}` }}
          >
            {movie.title}
          </NavLink>
        </MoviesListItem>
      ))}
    </ul>
  );
};

export default MoviesList;
