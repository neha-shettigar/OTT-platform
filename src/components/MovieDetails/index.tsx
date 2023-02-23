import React from 'react';

// import components
import SearchBar from '../SearchBar';
import Navbar from '../Navbar';

// data
import { data } from '../../data';
// import icon for searchBar
import searchIcon from '../assets/search-normal.svg';

import './styles.scss';

// this component contains navbar, searchbar, and details of the selected movie
const MovieDetails = () => {
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
        <section className="movieDetails-container">
          {/* movie poster */}
          <img
            src={data[10].poster}
            className="movieDetails-container__image"
          />
          {/* movie details */}
          <section className="movieDetails-container__details">
            <h5>{data[10].title}</h5>
            <p>
              {data[10].rating}
              <span>{data[10].category}</span>
            </p>
            <p>{data[10].description}</p>
          </section>
        </section>
      </section>
    </main>
  );
};

export default MovieDetails;
