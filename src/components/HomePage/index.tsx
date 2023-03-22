import React from 'react';
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';

// import MoviesGenre from '../MoviesGenre';
// import MovieDetails from '../MovieDetails';
// import BookMarks from '../BookMarks';
import icon from '../assets/navbar-logo-1.svg';
import dashboard from '../assets/dashboard.svg';
import movies from '../assets/movies.svg';
import series from '../assets/tv-series.svg';
import bookmark from '../assets/bookmark.svg';
import user from '../assets/account.svg';

import CarouselComponent from '../Carousel';
import MovieCard from '../MovieCard';
// import poster1 from '../assets/movieCard.svg';
// import bookMark from '../assets/cardLogo.svg';
import { data } from '../../data';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
// import Carousel from 'react-bootstrap/Carousel';
import searchIcon from '../assets/search-normal.svg';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from 'react-router-dom';

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

        <section className="homePage-container__main__section">
          <h4 className="homePage-container__main__section__header">
            Trending
          </h4>
          <span>MOVIE</span>
        </section>
        <CarouselComponent />
        <section className="homePage-container__main__section">
          <h4>Popular</h4>
          <span>MOVIE</span>
        </section>
        <section className="homePage-container__main__popular">
          {/* <article className="homePage-container__main__popular__row"> */}
          <MovieCard
            poster={data[8].poster}
            rating={data[8].rating}
            title={data[8].title}
            icon={bookmark}
            link={data[8].link}
            className="movieCard-container"
          />
          <MovieCard
            poster={data[9].poster}
            rating={data[9].rating}
            title={data[9].title}
            icon={bookmark}
            link={data[9].link}
            className="movieCard-container"
          />
          <MovieCard
            poster={data[2].poster}
            rating={data[2].rating}
            title={data[2].title}
            icon={bookmark}
            link={data[2].link}
            className="movieCard-container"
          />
          {/* </article>
          <article className="homePage-container__main__popular__row"> */}
          <MovieCard
            poster={data[1].poster}
            rating={data[1].rating}
            title={data[1].title}
            icon={bookmark}
            link={data[1].link}
            className="movieCard-container"
          />
          <MovieCard
            poster={data[3].poster}
            rating={data[3].rating}
            title={data[3].title}
            icon={bookmark}
            link={data[3].link}
            className="movieCard-container"
          />
          <MovieCard
            poster={data[13].poster}
            rating={data[13].rating}
            title={data[13].title}
            icon={bookmark}
            link={data[13].link}
            className="movieCard-container"
          />
          {/* </article> */}
        </section>
      </section>
    </main>
  );
};

export default HomePage;
