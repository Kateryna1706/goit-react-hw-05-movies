import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Movies from '../../pages/Movies/Movies';
import MovieDetails from '../../pages/MovieDetails/MovieDetails';

import { Container, List, Header } from './App.styled';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </Container>
  );
};

export default App;
