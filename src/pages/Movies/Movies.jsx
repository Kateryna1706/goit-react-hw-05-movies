import { MagnifyingGlass } from 'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import axios from 'axios';
import { Notify } from 'notiflix';
import { Container } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(setSearchParams);

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    setLoading(true);

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cb48852f2616f6f5995e859b25c73cfe`
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
  }, [searchParams]);

  return (
    <Container>
      <SearchForm />
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
    </Container>
  );
};

export default Movies;
