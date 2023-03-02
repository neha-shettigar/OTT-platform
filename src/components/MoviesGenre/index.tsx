/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import SearchBar from '../SearchBar';
import Navbar from '../Navbar';
import searchIcon from '../assets/search-normal.svg';
import './styles.scss';

const movieGenres = [
  { name: 'Action', link: '#' },
  { name: 'Adventure', link: '#' },
  { name: 'Anime', link: '#' },
  { name: 'Comedy', link: '#' },
  { name: 'Crime', link: '#' },
  { name: 'Drama', link: '#' },
  { name: 'Family', link: '#' },
  { name: 'Fantasy', link: '#' },
  { name: 'History', link: '#' },
  { name: 'Horror', link: '#' },
  { name: 'Kids', link: '#' },
  { name: 'Music', link: '#' },
];

const MoviesGenre = () => {
  // const handleSearchChange = (value:any) => {
  //   console.log(`Search query: ${value}`);
  // };

  return (
    <main className="homePage-container">
      <Navbar />
      <section className="homePage-container__main">
        <SearchBar
          value=""
          // onChangeValue={handleSearchChange}
          icon={searchIcon}
        />
        <nav className="moviesGenre-container">
          {movieGenres.map((genre, index) => (
            <a
              key={index}
              className={`moviesGenre-container__link${
                index % 2 === 0 ? 1 : 2
              }`}
              href={genre.link}
            >
              {genre.name}
            </a>
          ))}
        </nav>
      </section>
    </main>
  );
};

export default MoviesGenre;
