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
  isBookmarked?: boolean; // Add isBookmarked to the Movie type
}

const BookMarks = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState<Movie[]>([]);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [flag, setFlag] = useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  useEffect(() => {
    const storedBookmarks = localStorage.getItem('bookmarks');
    if (storedBookmarks != null) {
      setBookmarkedMovies(JSON.parse(storedBookmarks));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkedMovies));
  }, [bookmarkedMovies]);

  const handleBookmark = (id: number, isBookmarked: boolean) => {
    setBookmarkedMovies((prevBookmarkedMovies) => {
      const bookmarkedMovieIndex = prevBookmarkedMovies.findIndex(
        (movie) => movie.id === id,
      );
      if (isBookmarked && bookmarkedMovieIndex === -1) {
        const newBookmarkedMovie = { id, isBookmarked };
        return [...prevBookmarkedMovies, newBookmarkedMovie];
      } else if (!isBookmarked && bookmarkedMovieIndex !== -1) {
        return prevBookmarkedMovies.filter((movie) => movie.id !== id);
      } else {
        return prevBookmarkedMovies;
      }
    });
  };

  console.log(bookmarkedMovies);

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
                    onBookmark={() =>
                      handleBookmark(movie.id, movie.isBookmarked)
                    }
                    isBookmarked={isBookmarked}
                  />
                ) : null;
              })}
            </section>
          </section>
        )}
      </section>
    </main>
  );
};

export default BookMarks;
