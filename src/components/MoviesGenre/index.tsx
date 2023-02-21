import React from 'react';
import SearchBar from '../SearchBar';
import Navbar from '../Navbar';
import searchIcon from '../assets/search-normal.svg';

// import { Button } from '../Button';
import './styles.scss';

// interface MoviesGenreInterface {
//   label1: string;
//   label2: string;
//   label3: string;
//   label4: string;
//   label5: string;
//   label6: string;
//   label7: string;
//   label8: string;
//   label9: string;
//   label10: string;
//   label11: string;
//   label12: string;
// }

const MoviesGenre = () => {
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
        <section className="moviesGenre-container">
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
