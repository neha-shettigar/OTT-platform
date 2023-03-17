/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard';
import SearchBar from '../SearchBar';
import Navbar from '../Navbar';
import SearchResult from '../SearchResult';
import searchIcon from '../assets/search-normal.svg';

const BookMarks = () => {
  const [bookmarkedMovies, setBookmarkedMovies]: any = useState([]);
  const [searchResults, setSearchResults] = React.useState([]);
  const [flag, setFlag] = React.useState(false);

  useEffect(() => {
    const bookmarkKeys = Object.keys(localStorage).filter((key: string) =>
      key.startsWith('bookmark_'),
    );
    const movies = bookmarkKeys
      .map((key: string) => {
        const movie = localStorage.getItem(key);
        return movie != null ? JSON.parse(movie) : null;
      })
      .filter((movie: any) => movie !== null);
    setBookmarkedMovies(movies);
  }, []);

  const handleDeleteBookmark = (id: any) => {
    localStorage.removeItem(`bookmark_${id}`);
    setBookmarkedMovies((prevState: any[]) =>
      prevState.filter((movie: { id: any }) => movie.id !== id),
    );
  };

  const handleSearch = (results: any) => {
    setSearchResults(results);
    setFlag(!flag);
  };

  return (
    <main className="homePage-container">
      <Navbar />
      <section className="homePage-container__main">
        <SearchBar value="" icon={searchIcon} onSearch={handleSearch} />
        {flag ? (
          <SearchResult results={searchResults} />
        ) : (
          <section className="bookmarks-container">
            {bookmarkedMovies.map((movie: any) => {
              const isBookmarked =
                localStorage.getItem(`bookmark_${movie.id}`) === 'true';
              return isBookmarked ? (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  className="movieCard-container"
                  poster_path={movie.poster_path}
                  media_type={movie.media_type}
                  title={movie.title}
                  name={movie.name}
                  release_date={movie.release_date}
                  onBookmark={() => handleDeleteBookmark(movie.id)}
                  isBookmarked={isBookmarked}
                />
              ) : null;
            })}
          </section>
        )}
      </section>
    </main>
  );
};

export default BookMarks;
