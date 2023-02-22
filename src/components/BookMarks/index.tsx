import React from 'react';
// import components
import MovieCard from '../MovieCard';
import SearchBar from '../SearchBar';
import Navbar from '../Navbar';

// import data
import { data } from '../../data';

// import svg
import bookmark from '../assets/bookmark.svg';
import searchIcon from '../assets/search-normal.svg';

import './styles.scss';

// this component contains navbar, searchbar and movie cards of bookmarked movies
const BookMarks = () => {
  return (
    // main container
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
        {/* container for bookmarked items */}
        <section className="bookmarks-container">
          <MovieCard
            poster={data[5].poster}
            rating={data[5].rating}
            title={data[5].title}
            icon={bookmark}
            link={data[5].link}
          />
          <MovieCard
            poster={data[6].poster}
            rating={data[6].rating}
            title={data[6].title}
            icon={bookmark}
            link={data[6].link}
          />
          <MovieCard
            poster={data[2].poster}
            rating={data[2].rating}
            title={data[2].title}
            icon={bookmark}
            link={data[2].link}
          />
        </section>
      </section>
    </main>
  );
};

export default BookMarks;
