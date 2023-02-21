import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookMarks from './components/BookMarks';
// import Navbar from './components/Navbar';
// import searchIcon from './components/assets/search-normal.svg';
// import icon from './components/assets/navbar-logo-1.svg';
// import dashboard from './components/assets/dashboard.svg';
// import movies from './components/assets/movies.svg';
// import series from './components/assets/tv-series.svg';
// import bookmark from './components/assets/bookmark.svg';
// import user from './components/assets/account.svg';
import './App.css';
import HomePage from './components/HomePage';
import Login from './components/Login';
import MoviesGenre from './components/MoviesGenre';
import SeriesGenre from './components/SeriesGenre';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <main className="App-container">
      <section className="App-container__body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="signIn" element={<Login />} />
          <Route path="bookmarks" element={<BookMarks />} />
          <Route path="movie-genre" element={<MoviesGenre />} />
          <Route path="series-genre" element={<SeriesGenre />} />
          <Route path="search-result" element={<SearchResult />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
