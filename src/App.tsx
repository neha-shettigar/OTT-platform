import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookMarks from './components/BookMarks';

import './App.css';
import HomePage from './components/HomePage';
import Login from './components/Login';
import MoviesGenre from './components/MoviesGenre';
import SeriesGenre from './components/SeriesGenre';
import SearchResult from './components/SearchResult';
import Register from './components/Register';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <main className="App-container">
      <section className="App-container__body">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<HomePage />} />
          <Route path="register" element={<Register />} />
          <Route path="movie-genre" element={<MoviesGenre />} />
          <Route path="series-genre" element={<SeriesGenre />} />
          <Route path="bookmarks" element={<BookMarks />} />
          <Route path="search-result" element={<SearchResult />} />
          <Route path="movie-details" element={<MovieDetails />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
