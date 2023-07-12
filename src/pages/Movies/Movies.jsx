import { MagnifyingGlass } from 'react-loader-spinner';

import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import axios from 'axios';
import { Notify } from 'notiflix';
// import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  //   const [searchParams, setSearchParams] = useSearchParams();

  const changeQuery = value => {
    setQuery(value);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/?${query}api_key=cb48852f2616f6f5995e859b25c73cfe`
      )
      .then(response => {
        const movies = response.data.results;
        setMovies(movies);
        if (movies.length === 0) {
          throw new Error('No movies found!');
        }
      })
      .catch(error => {
        Notify.failure('No movies found!');
      })
      .finally(setLoading(false));
  }, [query]);

  return (
    <main>
      <p>Movies</p>
      <SearchForm onSubmit={changeQuery} />
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

      {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
