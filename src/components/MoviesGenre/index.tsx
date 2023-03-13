/* eslint-disable @typescript-eslint/restrict-template-expressions */
// MoviesGenre.tsx

import React from 'react';

import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import Navbar from '../Navbar';
import SearchResult from '../SearchResult';
import searchIcon from '../../assets/search-normal.svg';
import './styles.scss';
import { moviesApi } from '../../utils';

const MoviesGenre = () => {
  const [searchResults, setSearchResults] = React.useState([]);
  const [flag, setFlag] = React.useState(false);
  const [genres, setGenres] = React.useState([]);

  React.useEffect(() => {
    moviesApi
      .get(`/genre/movie/list?&language=en-US`)
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (results: any) => {
    setSearchResults(results);
    setFlag(!flag);
  };

  return (
    <main className="homePage-container">
      <Navbar />
      <section className="homePage-container__main">
        <SearchBar value="" icon={searchIcon} onSearch={handleSearch} />
        {flag ? (
          <SearchResult results={searchResults} />
        ) : (
          <nav className="moviesGenre-container">
            {genres.map((genre: any, index) => (
              <Link
                key={index}
                className={`moviesGenre-container__link${
                  index % 2 === 0 ? 1 : 2
                }`}
                to={`/genre/${genre.id}`}
              >
                {genre.name}
              </Link>
            ))}
          </nav>
        )}
      </section>
    </main>
  );
};

export default MoviesGenre;
