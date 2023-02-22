import React from 'react';
// import components
import SearchBar from '../SearchBar';
import Navbar from '../Navbar';

// import svg
import searchIcon from '../assets/search-normal.svg';

import './styles.scss';

// this component contains navbar, searchbar, links for each series genre
const SeriesGenre = () => {
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
        {/* links for each genre */}
        <section className="seriesGenre-container">
          <a className="seriesGenre-container__link1" href="">
            Action
          </a>
          <a className="seriesGenre-container__link2" href="">
            Adventure
          </a>
          <a className="seriesGenre-container__link1" href="">
            Anime
          </a>
          <a className="seriesGenre-container__link2" href="">
            Comedy
          </a>
          <a className="seriesGenre-container__link1" href="">
            Crime
          </a>
          <a className="seriesGenre-container__link2" href="">
            Drama
          </a>
          <a className="seriesGenre-container__link1" href="">
            Family
          </a>
          <a className="seriesGenre-container__link2" href="">
            Fantasy
          </a>
          <a className="seriesGenre-container__link1" href="">
            History
          </a>
          <a className="seriesGenre-container__link2" href="">
            Horror
          </a>
          <a className="seriesGenre-container__link1" href="">
            Kids
          </a>
          <a className="seriesGenre-container__link2" href="">
            Music
          </a>
        </section>
      </section>
    </main>
  );
};

export default SeriesGenre;
