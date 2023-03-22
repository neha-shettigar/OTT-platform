/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard';
import SearchBar from '../SearchBar';
import Navbar from '../Navbar';
import SearchResult from '../SearchResult';
import searchIcon from '../assets/search-normal.svg';
import './styles.scss';

interface Movie {
  id?: number;
  poster_path?: string | null;
  media_type?: string;
  title?: string;
  name?: string;
  release_date?: string | null;
  isBookmarked?: boolean;
}

const BookMarks = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState<Movie[]>([]);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [flag, setFlag] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedBookmarks = localStorage.getItem('bookmarks');
    if (storedBookmarks != null) {
      setBookmarkedMovies(JSON.parse(storedBookmarks));
    }
  }, []);

  console.log(bookmarkedMovies);
  const handleUnbookmark = (movieId: number) => {
    const updatedBookmarks = bookmarkedMovies.filter(
      (movie) => movie.id !== movieId,
    );
    setBookmarkedMovies(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  const handleSearch = (results: any, query: string) => {
    setSearchResults(results);
    setFlag(!flag);
    setSearchQuery(query);
  };

  return (
    <main className="homePage-container">
      <Navbar />
      <section className="homePage-container__main">
        <SearchBar value="" icon={searchIcon} onSearch={handleSearch} />
        {flag ? (
          <SearchResult results={searchResults} query={searchQuery} />
        ) : (
          <section className="bookmarks-container">
            <h5>Bookmarked Movies</h5>
            <section className="bookmarks-container__section">
              {bookmarkedMovies.map((movie: any) => {
                return movie.media_type === 'movie' ? (
                  <MovieCard
                    key={movie.id}
                    {...movie}
                    className="movieCard-container"
                    poster_path={movie.poster_path}
                    media_type={movie.media_type}
                    title={movie.title}
                    genre="movies"
                    name={movie.name}
                    release_date={movie.release_date}
                    isBookmarked={movie.isBookmarked}
                    onUnbookmark={handleUnbookmark}
                  />
                ) : (
                  <MovieCard
                    key={movie.id}
                    {...movie}
                    className="movieCard-container"
                    poster_path={movie.poster_path}
                    media_type={movie.media_type}
                    title={movie.title}
                    genre="series"
                    name={movie.name}
                    release_date={movie.release_date}
                    isBookmarked={movie.isBookmarked}
                    onUnbookmark={handleUnbookmark}
                  />
                );
              })}
            </section>
          </section>
        )}
      </section>
    </main>
  );
};

export default BookMarks;
