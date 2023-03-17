/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState } from 'react';

import './styles.scss';

import MovieCard from '../MovieCard';

interface SearchResultProps {
  results: any[];
}

const SearchResult = ({ results }: SearchResultProps) => {
  const [searchResults, setSearchResults] = useState(results);

  const handleBookmark = (id: number) => {
    setSearchResults((prevMovies: any) => {
      const newMovies = prevMovies.map((results: any) => {
        if (results.id === id) {
          results.isBookmarked = !results.isBookmarked;
        }
        return results;
      });

      // Save bookmarks to localStorage
      const bookmarks = newMovies.filter((movie: any) => movie.isBookmarked);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

      return newMovies;
    });
  };
  console.log(results);

  return (
    <section className="searchResult-container">
      {searchResults.length > 0 ? (
        <section className="searchResult-container__section">
          {searchResults.map((result: any, index: number) =>
            result.media_type === 'movie' ? (
              <MovieCard
                key={result.id}
                {...result}
                genre="movies"
                release_date={result.release_date.substring(0, 4)}
                className="movieResult-container"
                poster_path={result.poster_path}
                title={result.title}
                name={result.name}
                media_type="Movie"
                isBookmarked={result.isBookmarked}
                onBookmark={() => handleBookmark(result.id)}
              />
            ) : (
              <MovieCard
                key={result.id}
                {...result}
                genre="series"
                release_date={result.first_air_date.substring(0, 4)}
                className="movieResult-container"
                poster_path={result.poster_path}
                title={result.title}
                name={result.name}
                media_type="TV Series"
                isBookmarked={result.isBookmarked}
                onBookmark={() => handleBookmark(result.id)}
              />
            ),
          )}
        </section>
      ) : (
        <div className="searchResult-container__section__no-results">
          <p>No results found</p>
        </div>
      )}
    </section>
  );
};

export default SearchResult;
