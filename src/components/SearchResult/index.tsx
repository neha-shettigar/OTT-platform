import React from 'react';
// import components
import MovieCard from '../MovieCard';
import SearchBar from '../SearchBar';
import Navbar from '../Navbar';

// import svg
import searchIcon from '../assets/search-normal.svg';
import bookmark from '../assets/bookmark.svg';
// import data
import { data } from '../../data';

import './styles.scss';

// this component contains navbar,searchbar and movie card for searched items
const SearchResult = () => {
  return (
    <main className="homePage-container">
      {/* navbar component */}
      <Navbar />

      {/* homepage content container */}
      <section className="homePage-container__main">
        {/* searchbar component */}
        <SearchBar
          value=""
          // onChangeValue={onChange}
          icon={searchIcon}
          placeholder="Search for movies or TV series"
        />
        {/* container for search result */}
        <section className="searchResult-container">
          <MovieCard
            poster={data[5].poster}
            rating={data[5].rating}
            title={data[5].title}
            icon={bookmark}
            link={data[5].link}
          />
        </section>
      </section>
    </main>
  );
};

export default SearchResult;
