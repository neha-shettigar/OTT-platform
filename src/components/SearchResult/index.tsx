import React from 'react';
import MovieCard from '../MovieCard';
import SearchBar from '../SearchBar';
import Navbar from '../Navbar';
import searchIcon from '../assets/search-normal.svg';
import bookmark from '../assets/bookmark.svg';
import { data } from '../../data';
import './styles.scss';

// interface SearchResultInterface {
//   poster?: string;
//   rating?: string;
//   title?: string;
//   icon?: string;
//   link?: string;
// }
const SearchResult = () => {
  return (
    <main className="homePage-container">
      <Navbar />

      {/* homepage content container */}
      <section className="homePage-container__main">
        <SearchBar
          value=""
          // onChangeValue={onChange}
          icon={searchIcon}
          placeholder="Search for movies or TV series"
        />
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
