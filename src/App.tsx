/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-namespace */
import React from 'react';
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import './App.css';
import BookMarks from './components/BookMarks';
import ErrorPage from './components/ErrorPage';
import HomePage from './components/HomePage';
import Login from './components/Login';
import MovieDetails from './components/MovieDetails';
import MoviesByGenre from './components/MoviesByGenre';
import MoviesGenre from './components/MoviesGenre';
import PersonDetails from './components/PersonDetails';
import Register from './components/Register';
import SearchResult from './components/SearchResult';
import SeriesByGenre from './components/SeriesByGenre';
import SeriesDetails from './components/SeriesDetails';
import SeriesGenre from './components/SeriesGenre';

function App() {
  const userData = localStorage.getItem('userdata');
  // const MoviesGenre = React.lazy(
  //   async () => await import('./components/MoviesGenre'),
  // );

  // const HomePage = React.lazy(
  //   async () => await import('./components/HomePage'),
  // );
  // const Register = React.lazy(
  //   async () => await import('./components/Register'),
  // );
  // const Login = React.lazy(async () => await import('./components/Login'));
  // const SeriesGenre = React.lazy(
  //   async () => await import('./components/SeriesGenre'),
  // );
  // const SearchResult = React.lazy(
  //   async () => await import('./components/SearchResult'),
  // );

  // useLocation hook to prevent page refresh on navigation
  const location = useLocation() || {
    pathname: '/',
    search: '',
    hash: '',
    state: null,
  };

  const shouldReload = Boolean(location.state) && location.state.shouldReload;

  return (
    <div className="App-container">
      <div className="App-container__body">
        <Routes location={shouldReload ? undefined : location}>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Login />
              </React.Suspense>
            }
          />
          <Route
            path="home"
            element={userData !== null ? <HomePage /> : <Login />}
          />
          <Route path="register" element={<Register />} />

          <Route
            path="moviegenre"
            element={userData !== null ? <MoviesGenre /> : <Login />}
          />

          <Route
            path="seriesgenre"
            element={userData !== null ? <SeriesGenre /> : <Login />}
          />

          {/* ... */}
          <Route
            path="/searchResult"
            element={<SearchResult results={[]} query="" />}
          />

          <Route
            path="/moviesDetails/:movieId"
            element={userData !== null ? <MovieDetails /> : <Login />}
          />
          <Route
            path="/seriesDetails/:seriesId"
            element={userData !== null ? <SeriesDetails /> : <Login />}
          />
          <Route
            path="/bookmarks"
            element={userData !== null ? <BookMarks /> : <Login />}
          />

          <Route
            path="/movies-genre/:genreId"
            element={userData !== null ? <MoviesByGenre /> : <Login />}
          />
          <Route
            path="/series-genre/:genreId"
            element={userData !== null ? <SeriesByGenre /> : <Login />}
          />
          <Route
            path="/person/:personId"
            element={userData !== null ? <PersonDetails /> : <Login />}
          />
          <Route path="error" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// ...
