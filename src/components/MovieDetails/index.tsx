import React from 'react';
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

interface MovieDetailsInterface {
  poster: string;
  title: string;
  rating: string;
  category: string;
  description: string;
  onChange: () => void;
}

const MovieDetails = ({
  poster,
  title,
  rating,
  category,
  description,
  onChange,
}: MovieDetailsInterface) => {
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

        <section className="movieDetails-container">
          <img src={poster} className="movieDetails-container__image" />
          <section className="movieDetails-container__details">
            <h2>{title}</h2>
            <h4>
              {rating}
              <span>{category}</span>
            </h4>
            <p>{description}</p>
          </section>
        </section>
      </section>
    </main>
  );
};

export default MovieDetails;
