import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Container, List, Header } from './App.styled';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);

const App = () => {
  return (
    <Container>
      <Header>
        <List>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </List>
      </Header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
    </Container>
  );
};

export default App;
