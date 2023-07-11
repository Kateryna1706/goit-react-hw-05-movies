import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import MovieDetails from '../../pages/MovieDetails';

import { Container, List, Header } from './App.styled';

export const App = () => {
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />}></Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </Container>
  );
};
