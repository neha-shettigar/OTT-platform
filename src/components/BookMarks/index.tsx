import React from 'react';
import MovieCard from '../MovieCard';
import { data } from '../../data';
import bookmark from '../assets/bookmark.svg';
import SearchBar from '../SearchBar';
import Navbar from '../Navbar';
import searchIcon from '../assets/search-normal.svg';
import './styles.scss';

const BookMarks = () => {
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
