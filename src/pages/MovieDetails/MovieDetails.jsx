import {
  NavLink,
  Routes,
  Route,
  useParams,
  useLocation,
  Link,
} from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Notify } from 'notiflix';
import { lazy, Suspense } from 'react';
import {
  AdditionalInform,
  ButtonBack,
  Container,
  ContainerForPadding,
  Details,
  DetailsTitle,
  ListAdditional,
  ListGenres,
  Paragraph,
  Title,
} from './MovieDetails.styled';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=cb48852f2616f6f5995e859b25c73cfe`
      )
      .then(response => {
        const foundMovie = response.data;
        setMovie(foundMovie);
        if (!foundMovie) {
          throw new Error('No found!');
        }
      })
      .catch(error => {
        Notify.failure('No found!');
      })
      .finally(setLoading(false));
  }, [movieId]);

  return (
    <ContainerForPadding>
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
      <Link to={backLinkHref.current}>
        <ButtonBack>Go back</ButtonBack>
      </Link>

      <Container>
        {movie !== null && (
          <>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : `${defaultImg}`
              }
              width={250}
              alt="poster"
            />
            <Details>
              <Title>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </Title>
              <Paragraph>User Score: {`${movie.vote_count}%`}</Paragraph>
              <DetailsTitle>Overview</DetailsTitle>
              <Paragraph>{movie.overview}</Paragraph>
              <DetailsTitle>Genres</DetailsTitle>

              <ListGenres>
                {movie.genres.map(item => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ListGenres>
            </Details>
          </>
        )}
      </Container>
      <AdditionalInform>
        <DetailsTitle>Additional information</DetailsTitle>
        <ListAdditional>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ListAdditional>
      </AdditionalInform>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </ContainerForPadding>
  );
};

export default MovieDetails;
