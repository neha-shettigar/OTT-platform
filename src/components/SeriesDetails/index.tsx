/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';
import SearchResult from '../SearchResult';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
// searchIcon for searchbar
import searchIcon from '../assets/search-normal.svg';
import './styles.scss';

const SeriesDetails = () => {
  const { seriesId } = useParams<{ seriesId: string }>();
  const [seriesDetails, setSeriesDetails]: any = useState([]);
  const [searchResults, setSearchResults] = React.useState([]);
  const [flag, setFlag] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [seriesCast, setSeriesCast]: any = useState([]);
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

  // fetch cast data
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${seriesId}/credits?api_key=13622fc50c5257d370284ea008163f90&language=en-US`,
        );
        // Process the response from the first API call
        setSeriesCast(response.data);
      } catch (error: any) {
        console.error(error);
      }
    }
    void fetchData();
  }, [seriesId]);
  console.log(seriesCast.cast);

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
                <p className="less-opaque">
                  Length
                  <span className="span1">{seriesDetails.runtime}min</span>
                </p>
                <p className="less-opaque">
                  Language
                  {/* <span>{movieDetails.spokenLanguages}</span> */}
                  <span className="span1">English</span>
                </p>
                <p className="less-opaque">
                  Year
                  <span className="span1">
                    {typeof seriesDetails.first_air_date === 'string'
                      ? seriesDetails.first_air_date.substring(0, 4)
                      : 'N/A'}
                  </span>
                </p>
                <p className="less-opaque">
                  Status<span className="span1">{seriesDetails.status}</span>
                </p>
              </section>

              <article className="movieDetails-container__details__genre">
                <h6 className="movieDetails-container__details__genre__header">
                  Genre
                  <section className="movieDetails-container__details__genre__section">
                    {Boolean(seriesDetails.genres) &&
                      seriesDetails.genres.map((genre: any) => (
                        <Link
                          to={`/series-genre/${genre.id}`}
                          className="span2"
                          key={genre.id}
                        >
                          {genre.name}
                        </Link>
                      ))}
                  </section>
                </h6>
              </article>
              <h6>Synopsis</h6>
              <p className="less-opaque">{seriesDetails.overview}</p>
              <article className="movieDetails-container__details__cast">
                <h6>Cast</h6>
                <section className="movieDetails-container__details__cast__section">
                  {Boolean(seriesCast.cast) &&
                    seriesCast.cast.map((crew: any) => (
                      <Link
                        to={`/person/${crew.id}`}
                        className="castSpan"
                        key={crew.id}
                      >
                        {crew.name}
                      </Link>
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

export default SeriesDetails;
