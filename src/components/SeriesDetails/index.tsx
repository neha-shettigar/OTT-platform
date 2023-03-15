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

const SeriesDetails = () => {
  const { seriesId } = useParams<{ seriesId: string }>();
  const [seriesDetails, setSeriesDetails]: any = useState([]);
  const [searchResults, setSearchResults] = React.useState([]);
  const [flag, setFlag] = React.useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${seriesId}?api_key=13622fc50c5257d370284ea008163f90&language=en-US`,
        );
        // Process the response from the first API call
        setSeriesDetails(response.data);
      } catch (error: any) {
        console.error(error);
      }
    }

    void fetchData();
  }, [seriesId]);
  console.log(seriesDetails);

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
              src={`https://image.tmdb.org/t/p/original/${seriesDetails.poster_path}`}
              alt={seriesDetails.title}
              className="movieDetails-container__poster"
            />
            <article className="movieDetails-container__details">
              <h2>{seriesDetails.title}</h2>
              <h2>{seriesDetails.name}</h2>
              {seriesDetails.tagline ? <p>{seriesDetails.tagline}</p> : null}

              <h4>{seriesDetails.vote_average}</h4>
              <section className="movieDetails-container__details__para">
                <p>
                  Length
                  <span className="span1">{seriesDetails.runtime}min</span>
                </p>
                <p>
                  Language
                  {/* <span>{movieDetails.spokenLanguages}</span> */}
                  <span className="span1">English</span>
                </p>
                <p>
                  Release Date
                  <span className="span1">{seriesDetails.release_date}</span>
                </p>
                <p>
                  Status<span className="span1">{seriesDetails.status}</span>
                </p>
              </section>
              {/* <p>
              Genre<>{movieDetails.genres[0].name}</>
            </p> */}
              <article className="movieDetails-container__details__genre">
                <p>
                  Genre
                  <section className="movieDetails-container__details__genre__section">
                    {Boolean(seriesDetails.genres) &&
                      seriesDetails.genres.map((genre: any) => (
                        <span key={genre.id}>{genre.name}</span>
                      ))}
                  </section>
                </p>
              </article>
              <h6>Synopsis</h6>
              <p>{seriesDetails.overview}</p>
            </article>
          </section>
        )}
      </section>
    </main>
  );
};

export default SeriesDetails;
