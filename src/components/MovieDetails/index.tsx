/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';
import SearchResult from '../SearchResult';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// searchIcon for searchbar
import searchIcon from '../assets/search-normal.svg';
import './styles.scss';

const MovieDetails = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movieDetails, setMovieDetails]: any = useState([]);
  const [movieCast, setMovieCast]: any = useState([]);
  const [searchResults, setSearchResults] = React.useState([]);
  const [flag, setFlag] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=13622fc50c5257d370284ea008163f90&language=en-US`,
        );
        // Process the response from the first API call
        setMovieDetails(response.data);
      } catch (error: any) {
        console.error(error);
      }
    }
    void fetchData();
  }, [movieId]);
  console.log(movieDetails);

  // fetch cast data
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=13622fc50c5257d370284ea008163f90&language=en-US`,
        );
        // Process the response from the first API call
        setMovieCast(response.data);
      } catch (error: any) {
        console.error(error);
      }
    }
    void fetchData();
  }, [movieId]);
  console.log(movieCast.cast);

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
          <section className="movieDetails-container">
            <img
              src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className="movieDetails-container__poster"
            />
            <article className="movieDetails-container__details">
              {movieDetails.title ? (
                <h2>{movieDetails.title}</h2>
              ) : (
                <h2>{movieDetails.name}</h2>
              )}

              {movieDetails.tagline ? (
                <p className="less-opaque">{movieDetails.tagline}</p>
              ) : null}

              <h4>{movieDetails.vote_average}</h4>
              <section className="movieDetails-container__details__para">
                <p className="less-opaque">
                  Length<span className="span1">{movieDetails.runtime}min</span>
                </p>
                <p className="less-opaque">
                  Language
                  {/* <span>{movieDetails.spokenLanguages}</span> */}
                  <span className="span1">English</span>
                </p>
                <p className="less-opaque">
                  Year
                  <span className="span1">
                    {typeof movieDetails.release_date === 'string'
                      ? movieDetails.release_date.substring(0, 4)
                      : 'N/A'}
                  </span>
                </p>
                <p className="less-opaque">
                  Status<span className="span1">{movieDetails.status}</span>
                </p>
              </section>

              <article className="movieDetails-container__details__genre">
                <h6>
                  Genre
                  <section className="movieDetails-container__details__genre__section">
                    {Boolean(movieDetails.genres) &&
                      movieDetails.genres.map((genre: any) => (
                        <span className="span2" key={genre.id}>
                          {genre.name}
                        </span>
                      ))}
                  </section>
                </h6>
              </article>
              <article className="movieDetails-container__details__synopsis">
                <h6>Synopsis</h6>
                <p className="less-opaque">{movieDetails.overview}</p>
              </article>
              <article className="movieDetails-container__details__cast">
                <h6>Cast</h6>
                <section className="movieDetails-container__details__cast__section">
                  {Boolean(movieCast.cast) &&
                    movieCast.cast.map((crew: any) => (
                      <span className="castSpan" key={crew.id}>
                        {crew.name}
                      </span>
                    ))}
                </section>
              </article>
            </article>
          </section>
        )}
      </section>
    </main>
  );
};

export default MovieDetails;
