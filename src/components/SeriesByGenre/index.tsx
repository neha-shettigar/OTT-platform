/* eslint-disable @typescript-eslint/restrict-template-expressions */
// MoviesByGenre.tsx

import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieCard from '../MovieCard';
import SearchBar from '../SearchBar';
import Navbar from '../Navbar';
import SearchResult from '../SearchResult';
import searchIcon from '../assets/search-normal.svg';

import './styles.scss';

const SeriesByGenre = () => {
  const { genreId } = useParams<{ genreId: string }>();
  const [series, setSeries] = React.useState([]);
  const [flag, setFlag] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=13622fc50c5257d370284ea008163f90&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`,
      )
      .then((response) => {
        setSeries(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => console.error(error));
  }, [genreId]);

  const handleBookmark = (id: number) => {
    // TODO: Implement bookmark functionality
  };
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
          <section className="moviesByGenre-container">
            <section className="moviesByGenre-container__section">
              {series.map((movie: any) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  poster_path={movie.poster_path}
                  media_type="movie"
                  title={movie.title}
                  className="moviesByGenre-container__card"
                  release_date={movie.release_date}
                  isBookmarked={false}
                  onBookmark={() => handleBookmark(movie.id)}
                />
              ))}
            </section>
          </section>
        )}
      </section>
    </main>
  );
};

export default SeriesByGenre;
