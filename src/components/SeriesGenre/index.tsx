import React from 'react';
// import { Button } from '../Button';
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';
import searchIcon from '../assets/search-normal.svg';
import icon from '../assets/navbar-logo-1.svg';
import dashboard from '../assets/dashboard.svg';
import movies from '../assets/movies.svg';
import series from '../assets/tv-series.svg';
import bookmark from '../assets/bookmark.svg';
import user from '../assets/account.svg';
import './styles.scss';

interface SeriesGenreInterface {
  label1: string;
  label2: string;
  label3: string;
  label4: string;
  label5: string;
  label6: string;
  label7: string;
  label8: string;
  label9: string;
  label10: string;
  label11: string;
  label12: string;
  onChange: () => void;
}

const SeriesGenre = ({
  label1,
  label2,
  label3,
  label4,
  label5,
  label6,
  label7,
  label8,
  label9,
  label10,
  label11,
  label12,
  onChange,
}: SeriesGenreInterface) => {
  return (
    <main className="homePage-container">
      <Navbar
        icon1={icon}
        icon2={dashboard}
        icon3={movies}
        icon4={series}
        icon5={bookmark}
        icon6={user}
      />
      <section className="homePage-container__main">
        <SearchBar
          value=""
          onChangeValue={onChange}
          icon={searchIcon}
          placeholder="Search for movies or TV series"
        />
        <section className="seriesGenre-container">
          <a className="seriesGenre-container__link1" href="">
            {label1}
          </a>
          <a className="seriesGenre-container__link2" href="">
            {label2}
          </a>
          <a className="seriesGenre-container__link1" href="">
            {label3}
          </a>
          <a className="seriesGenre-container__link2" href="">
            {label4}
          </a>
          <a className="seriesGenre-container__link1" href="">
            {label5}
          </a>
          <a className="seriesGenre-container__link2" href="">
            {label6}
          </a>
          <a className="seriesGenre-container__link1" href="">
            {label7}
          </a>
          <a className="seriesGenre-container__link2" href="">
            {label8}
          </a>
          <a className="seriesGenre-container__link1" href="">
            {label9}
          </a>
          <a className="seriesGenre-container__link2" href="">
            {label10}
          </a>
          <a className="seriesGenre-container__link1" href="">
            {label11}
          </a>
          <a className="seriesGenre-container__link2" href="">
            {label12}
          </a>
        </section>
      </section>
    </main>
  );
};

export default SeriesGenre;
