/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';

import SearchBar from '../SearchBar';
import Navbar from '../Navbar';
import SearchResult from '../SearchResult';
import searchIcon from '../../assets/search-normal.svg';
import { Link } from 'react-router-dom';
import './styles.scss';
import { moviesApi } from '../../utils';

const SeriesGenre = () => {
  const [searchResults, setSearchResults] = React.useState([]);
  const [flag, setFlag] = React.useState(false);
  const [genres, setGenres] = React.useState([]);

  React.useEffect(() => {
    moviesApi
      .get(`/genre/tv/list?&language=en-US`)
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
          <nav className="seriesGenre-container">
            {genres.map((genre: any, index) => (
              <Link
                key={index}
                className={`seriesGenre-container__link${
                  index % 2 === 0 ? 1 : 2
                }`}
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
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

export default SeriesGenre;
