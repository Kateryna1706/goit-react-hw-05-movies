import { NavLink } from 'react-router-dom';

export const ProductList = ({ trendMovies }) => {
  return (
    <ul>
      {trendMovies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};
