import { useEffect, useState } from 'react';
import axios from 'axios';
import { Notify } from 'notiflix';
import { MagnifyingGlass } from 'react-loader-spinner';
import { TrendingTitle } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=cb48852f2616f6f5995e859b25c73cfe`
      )
      .then(response => {
        const movies = response.data.results;
        setTrendMovies(movies);
        if (movies.length === 0) {
          throw new Error('No movies found!');
        }
      })
      .catch(error => {
        Notify.failure('No movies found!');
      })
      .finally(setLoading(false));
  }, []);

  return (
    <main>
      <TrendingTitle>Trending today</TrendingTitle>
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
      {trendMovies && <MoviesList trendMovies={trendMovies} />}
    </main>
  );
};

export default Home;
