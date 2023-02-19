import React from 'react';
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';
import MoviesGenre from '../MoviesGenre';
import icon from '../assets/navbar-logo-1.svg';
import dashboard from '../assets/dashboard.svg';
import movies from '../assets/movies.svg';
import series from '../assets/tv-series.svg';
import bookmark from '../assets/bookmark.svg';
import user from '../assets/account.svg';

// import MovieCard from '../MovieCard';
// import poster1 from '../assets/movieCard.svg';
// import bookMark from '../assets/cardLogo.svg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
// import Carousel from 'react-bootstrap/Carousel';
import searchIcon from '../assets/search-normal.svg';
import './styles.scss';

interface HomePageInterface {
  show: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// parent component
const HomePage = ({ show, value, onChange }: HomePageInterface) => {
  return (
    // main container
    <main className="homePage-container">
      <Navbar
        icon1={icon}
        icon2={dashboard}
        icon3={movies}
        icon4={series}
        icon5={bookmark}
        icon6={user}
      />

      {/* homepage content container */}
      <section className="homePage-container__main">
        <SearchBar
          value=""
          onChangeValue={onChange}
          icon={searchIcon}
          placeholder="Search for movies or TV series"
        />

        <MoviesGenre
          label1="Action"
          label2="Adventure"
          label3="Anime"
          label4="Comedy"
          label5="Crime"
          label6="Drama"
          label7="Family"
          label8="Fantasy"
          label9="History"
          label10="Horror"
          label11="Kids"
          label12="Music"
        />
      </section>
    </main>
  );
};

export default HomePage;
