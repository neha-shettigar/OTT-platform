/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState } from 'react';

import './styles.scss';

import MovieCard from '../MovieCard';
import PersonCard from '../PersonCard';

interface SearchResultProps {
  results: any[];
  query: string;
}

const SearchResult = ({ results, query }: SearchResultProps) => {
  const [searchResults] = useState(results);

  return (
    <section className="searchResult-container">
      {searchResults.length > 0 ? (
        <section className="searchResult-container__section">
          <h4 className="searchResult-container__section__header">
            Found {searchResults.length} results for '{query}'
          </h4>
          <section className="searchResult-container__section__results">
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
                />
              ) : result.media_type === 'tv' ? (
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
                />
              ) : (
                <PersonCard
                  key={result.id}
                  {...result}
                  name={result.name}
                  profile_path={result.profile_path}
                  media_type={result.media_type}
                  known_for_department={result.known_for_department}
                  className="personCard-container"
                />
              ),
            )}
          </section>
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
