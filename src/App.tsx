/* eslint-disable @typescript-eslint/no-namespace */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import BookMarks from './components/BookMarks';
import MovieDetails from './components/MovieDetails';

// import Login from './components/Login';

// import SearchResult from './components/SearchResult';

// import MovieDetails from './components/MovieDetails';
// import ErrorPage from './components/ErrorPage';
// import MoviesGenre from "./components/MoviesGenre";

function App() {
  const MoviesGenre = React.lazy(
    async () => await import('./components/MoviesGenre'),
  );

  const HomePage = React.lazy(
    async () => await import('./components/HomePage'),
  );
  // const Register = React.lazy(
  //   async () => await import('./components/Register'),
  // );
  const SeriesGenre = React.lazy(
    async () => await import('./components/SeriesGenre'),
  );
  const SearchResult = React.lazy(
    async () => await import('./components/SearchResult'),
  );
  return (
    <div className="App-container">
      <div className="App-container__body">
        <Routes>
          {/* <Route path="/" element={<MoviesGenre />} /> */}

          <Route
            path="/"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </React.Suspense>
            }
          />
          {/* <Route
            path="register"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Register />
              </React.Suspense>
            }
          /> */}
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

          <Route
            path="searchResult"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <SearchResult
                  results={[{ title: 'Movie 1' }, { title: 'Movie 2' }]}
                />
              </React.Suspense>
            }
          />
          <Route path="/movieDetails/:movieId" element={<MovieDetails />} />
          <Route path="/bookmarks" element={<BookMarks />} />
          {/* 
          <Route path="error" element={<ErrorPage />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;

// ...
