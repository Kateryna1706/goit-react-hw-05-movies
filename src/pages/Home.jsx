import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=cb48852f2616f6f5995e859b25c73cfe`
      )
      .then(response => {
        const movies = response.data.results;
        setTrendMovies(movies);
      });
  }, []);

  return (
    <main>
      <p>Movies</p>
      <ProductList trendMovies={trendMovies} />
    </main>
  );
};

export default Home;
