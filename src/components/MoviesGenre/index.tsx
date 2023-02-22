import React from 'react';
// import components
import SearchBar from '../SearchBar';
import Navbar from '../Navbar';
// search icon for searhcbar
import searchIcon from '../assets/search-normal.svg';

import './styles.scss';

// this component contains navbar, searchbar, links for each movie genre
const MoviesGenre = () => {
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
        <section className="moviesGenre-container">
          {/* links for each genre */}
          <a className="moviesGenre-container__link1" href="">
            Action
          </a>
          <a className="moviesGenre-container__link2" href="">
            Adventure
          </a>
          <a className="moviesGenre-container__link1" href="">
            Anime
          </a>
          <a className="moviesGenre-container__link2" href="">
            Comedy
          </a>
          <a className="moviesGenre-container__link1" href="">
            Crime
          </a>
          <a className="moviesGenre-container__link2" href="">
            Drama
          </a>
          <a className="moviesGenre-container__link1" href="">
            Family
          </a>
          <a className="moviesGenre-container__link2" href="">
            Fantasy
          </a>
          <a className="moviesGenre-container__link1" href="">
            History
          </a>
          <a className="moviesGenre-container__link2" href="">
            Horror
          </a>
          <a className="moviesGenre-container__link1" href="">
            Kids
          </a>
          <a className="moviesGenre-container__link2" href="">
            Music
          </a>
        </section>
      </section>
    </main>
  );
};

export default MoviesGenre;
