import React from 'react';

// import components
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';
import bookmark from '../assets/bookmark.svg';
import CarouselComponent from '../Carousel';
import MovieCard from '../MovieCard';

// import data
import { data } from '../../data';

// searchIcon for searchbar
import searchIcon from '../assets/search-normal.svg';

import './styles.scss';

// HomePage consists of NavBar, SearchBar, Carousel for trending items and movie tray
const HomePage = () => {
  return (
    // main container
    <main className="homePage-container">
      {/* navigation */}
      <Navbar />
      {/* homepage content container */}
      <section className="homePage-container__main">
        {/* search bar */}
        <SearchBar
          value=""
          // onChangeValue={onChange}
          icon={searchIcon}
          placeholder="Search for movies or TV series"
        />
        <h4 className="homePage-container__main__header">Trending</h4>
        {/* Carousel for trending items */}
        <CarouselComponent />
        {/* movie tray */}
        <h4>Popular</h4>
        <section className="homePage-container__main__popular">
          {/* each movie is displayed using movie card */}
          <MovieCard
            poster={data[8].poster}
            rating={data[8].rating}
            title={data[8].title}
            icon={bookmark}
            link={data[8].link}
          />
          <MovieCard
            poster={data[9].poster}
            rating={data[9].rating}
            title={data[9].title}
            icon={bookmark}
            link={data[9].link}
          />
          <MovieCard
            poster={data[2].poster}
            rating={data[2].rating}
            title={data[2].title}
            icon={bookmark}
            link={data[2].link}
          />
          <MovieCard
            poster={data[1].poster}
            rating={data[1].rating}
            title={data[1].title}
            icon={bookmark}
            link={data[1].link}
          />
          <MovieCard
            poster={data[3].poster}
            rating={data[3].rating}
            title={data[3].title}
            icon={bookmark}
            link={data[3].link}
          />
          <MovieCard
            poster={data[13].poster}
            rating={data[13].rating}
            title={data[13].title}
            icon={bookmark}
            link={data[13].link}
          />
        </section>
      </section>
    </main>
  );
};

export default HomePage;
