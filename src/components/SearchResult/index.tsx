import React from 'react';

import MovieResult from '../MovieResult';
import './styles.scss';

interface SearchResultProps {
  results: any[];
}

const SearchResult = ({ results }: SearchResultProps) => {
  return (
    <main className="searchResult">
      {/* <Navbar />
      <section className="searchResult__main">
        <SearchBar icon={searchIcon} /> */}
      <section className="searchResult__container">
        {results.length > 0 ? (
          <ul>
            {results.map((result: any, index: number) => (
              <MovieResult key={index} {...result} />
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </section>
      {/* </section> */}
    </main>
  );
};

export default SearchResult;
