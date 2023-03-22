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

const MoviesByGenre = () => {
  const { genreId } = useParams<{ genreId: string }>();
  const [movies, setMovies] = React.useState([]);
  const [flag, setFlag] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=13622fc50c5257d370284ea008163f90&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`,
      )
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => console.error(error));
  }, [genreId]);

  console.log('movies');

  const handleSearch = (results: any, query: string) => {
    setSearchResults(results);
    setFlag(!flag);
    setSearchQuery(query);
  };

  return (
    <main className="homePage-container">
      <Navbar />
      <section className="homePage-container__main">
        <SearchBar value="" icon={searchIcon} onSearch={handleSearch} />
        {flag ? (
          <SearchResult results={searchResults} query={searchQuery} />
        ) : (
          <section className="moviesByGenre-container">
            <section className="moviesByGenre-container__section">
              {movies.map((movie: any) => (
                <MovieCard
                  key={movie.id}
                  {...movie}
                  id={movie.id}
                  genre="movies"
                  poster_path={movie.poster_path}
                  media_type="movie"
                  title={movie.title}
                  className="moviesByGenre-container__card"
                  release_date={movie.release_date.substring(0, 4)}
                  isBookmarked={movie.isBookmarked}
                />
              ))}
            </section>
          </section>
        )}
      </section>
    </main>
  );
};

export default MoviesByGenre;
