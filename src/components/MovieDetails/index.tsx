/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// searchIcon for searchbar
import searchIcon from '../assets/search-normal.svg';
import './styles.scss';

const MovieDetails = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movieDetails, setMovieDetails]: any = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=13622fc50c5257d370284ea008163f90&language=en-US`,
      )
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [movieId]);
  console.log(movieDetails.original_title);

  return (
    <main className="homePage-container">
      <Navbar />
      <section className="homePage-container__main">
        <SearchBar value="" icon={searchIcon} />
        <section className="movieDetails-container">
          <img
            src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className="movieDetails-container__poster"
          />
          <article className="movieDetails-container__details">
            <h2>{movieDetails.title}</h2>
            <p>{movieDetails.tagline}</p>
            <h4>{movieDetails.vote_average}</h4>
            <section className="movieDetails-container__details__para">
              <p>
                Length<span>{movieDetails.runtime}min</span>
              </p>
              <p>
                Language
                <span>
                  {Boolean(movieDetails.spokenLanguages) &&
                    movieDetails.spokenLanguages.map((lang: any) => (
                      // eslint-disable-next-line react/jsx-key
                      <p key={movieDetails.spokenLanguages.iso_639_1}>
                        {lang.name}
                      </p>
                    ))}
                </span>
              </p>
              <p>
                Release Date<span>{movieDetails.release_date}</span>
              </p>
              <p>
                Status<span>{movieDetails.status}</span>
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
            <p>{movieDetails.overview}</p>
          </article>
        </section>
      </section>
    </main>
  );
};

export default MovieDetails;
