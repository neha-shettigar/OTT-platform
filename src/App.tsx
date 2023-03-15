/* eslint-disable @typescript-eslint/no-namespace */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import BookMarks from './components/BookMarks';
import ErrorPage from './components/ErrorPage';
import MovieDetails from './components/MovieDetails';
import MoviesByGenre from './components/MoviesByGenre';
import SeriesByGenre from './components/SeriesByGenre';
import SeriesDetails from './components/SeriesDetails';

function App() {
  const MoviesGenre = React.lazy(
    async () => await import('./components/MoviesGenre'),
  );

  const HomePage = React.lazy(
    async () => await import('./components/HomePage'),
  );
  const Register = React.lazy(
    async () => await import('./components/Register'),
  );
  const Login = React.lazy(async () => await import('./components/Login'));
  const SeriesGenre = React.lazy(
    async () => await import('./components/SeriesGenre'),
  );
  const SearchResult = React.lazy(
    async () => await import('./components/SearchResult'),
  );

  return (
    <div className="App-container">
      <div className="App-container__body">
        <Router>
          <Routes>
            {/* <Route path="/" element={<MoviesGenre />} /> */}
            {/* <Route path='searchResult' element={<SearchResult/>}/> */}
            <Route
              path="home"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <HomePage />
                </React.Suspense>
              }
            />
            <Route
              path="register"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Register />
                </React.Suspense>
              }
            />
            <Route
              path="/"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Login />
                </React.Suspense>
              }
            />
            <Route
              path="moviegenre"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <MoviesGenre />
                </React.Suspense>
              }
            />

            <Route
              path="seriesgenre"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <SeriesGenre />
                </React.Suspense>
              }
            />

            {/* ... */}
            <Route
              path="/searchResult"
              element={<SearchResult results={[]} />}
            />

            <Route path="/moviesdetails/:movieId" element={<MovieDetails />} />
            <Route
              path="/seriesdetails/:seriesId"
              element={<SeriesDetails />}
            />
            <Route path="/bookmarks" element={<BookMarks />} />
            <Route path="/movies-genre/:genreId" element={<MoviesByGenre />} />
            <Route path="/series-genre/:genreId" element={<SeriesByGenre />} />
            <Route path="error" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

// ...
