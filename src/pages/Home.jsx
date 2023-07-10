import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=cb48852f2616f6f5995e859b25c73cfe`
      )
      .then(response => {
        console.log(response.data.results);
        return response.data.results;
      })
      .then(movies => {
        setTrendMovies(movies);
      });
  }, []);

  return (
    <main>
      <p>Movies</p>
      <ul>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <NavLink to="/movies/:movieId">{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
