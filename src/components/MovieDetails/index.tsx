import React from 'react';
import { data } from '../../data';
import SearchBar from '../SearchBar';
import Navbar from '../Navbar';
import searchIcon from '../assets/search-normal.svg';
import './styles.scss';

// interface MovieDetailsInterface {
//   poster: string;
//   title: string;
//   rating: string;
//   category: string;
//   description: string;
// }

const MovieDetails = () => {
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
        <section className="movieDetails-container">
          <img src={data[6].poster} className="movieDetails-container__image" />
          <section className="movieDetails-container__details">
            <h5>{data[6].title}</h5>
            <p>
              {data[6].rating}
              <span>{data[6].category}</span>
            </p>
            <p>{data[6].description}</p>
          </section>
        </section>
      </section>
    </main>
  );
};

export default MovieDetails;
