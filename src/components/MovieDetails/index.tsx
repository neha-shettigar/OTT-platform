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
  const [searchResults, setSearchResults] = React.useState([]);
  const [flag, setFlag] = React.useState(false);

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
          <section className="movieDetails-container">
            <img
              src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className="movieDetails-container__poster"
            />
            <article className="movieDetails-container__details">
              <h2>{movieDetails.title}</h2>
              <h2>{movieDetails.name}</h2>
              {movieDetails.tagline ? <p>{movieDetails.tagline}</p> : null}

              <h4>{movieDetails.vote_average}</h4>
              <section className="movieDetails-container__details__para">
                <p>
                  Length<span className="span1">{movieDetails.runtime}min</span>
                </p>
                <p>
                  Language
                  {/* <span>{movieDetails.spokenLanguages}</span> */}
                  <span className="span1">English</span>
                </p>
                <p>
                  Release Date
                  <span className="span1">{movieDetails.release_date}</span>
                </p>
                <p>
                  Status<span className="span1">{movieDetails.status}</span>
                </p>
              </section>
              {/* <p>
              Genre<>{movieDetails.genres[0].name}</>
            </p> */}
              <article className="movieDetails-container__details__genre">
                <p>
                  Genre
                  <section className="movieDetails-container__details__genre__section">
                    {Boolean(movieDetails.genres) &&
                      movieDetails.genres.map((genre: any) => (
                        <span key={genre.id}>{genre.name}</span>
                      ))}
                  </section>
                </p>
              </article>
              <h6>Synopsis</h6>
              <p>{movieDetails.overview}</p>
            </article>
          </section>
        )}
      </section>
    </main>
  );
};

export default MovieDetails;
