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

const PersonDetails = () => {
  const { personId } = useParams<{ personId: string }>();
  const [personDetails, setPersonDetails]: any = useState([]);
  const [knownFor, setKnownFor]: any = useState([]);
  const [searchResults, setSearchResults] = React.useState([]);
  const [flag, setFlag] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/person/${personId}?api_key=13622fc50c5257d370284ea008163f90&language=en-US`,
        );
        // Process the response from the first API call
        setPersonDetails(response.data);
      } catch (error: any) {
        console.error(error);
      }
    }
    void fetchData();
  }, [personId]);
  console.log(personDetails);

  // fetch cast data
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/person/${personId}/combined_credits?api_key=13622fc50c5257d370284ea008163f90&language=en-US`,
        );
        // Process the response from the first API call
        setKnownFor(response.data);
      } catch (error: any) {
        console.error(error);
      }
    }
    void fetchData();
  }, [personId]);
  console.log(knownFor);

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
          <section className="personDetails-container">
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${personDetails.profile_path}`}
              alt={personDetails.title}
              className="personDetails-container__poster"
            />
            <article className="personDetails-container__details">
              {personDetails.name ? <h2>{personDetails.name}</h2> : null}

              {personDetails.known_for_department ? (
                <p className="less-opaque">
                  {personDetails.known_for_department}
                </p>
              ) : null}

              <section className="personDetails-container__details__para">
                <p className="less-opaque-1">
                  Date of birth
                  <span className="span1">{personDetails.birthday}</span>
                </p>
                <p className="less-opaque-2">
                  Place of birth
                  <span className="span1">{personDetails.place_of_birth}</span>
                </p>
              </section>

              <article className="personDetails-container__details__biography">
                <h6>Biography</h6>
                <p className="less-opaque">{personDetails.biography}</p>
              </article>
              <article className="personDetails-container__details__knownFor">
                <h6>Known For</h6>
                <section className="personDetails-container__details__knownFor__section">
                  {Boolean(knownFor.cast) &&
                    knownFor.cast.slice(0, 20).map((movie: any) =>
                      movie.media_type === 'movie' ? (
                        <Link
                          to={`/moviesDetails/${movie.id}`}
                          className="movieSpan"
                          key={movie.id}
                        >
                          {movie.title}
                        </Link>
                      ) : (
                        <Link
                          to={`/seriesDetails/${movie.id}`}
                          className="movieSpan"
                          key={movie.id}
                        >
                          {movie.name}
                        </Link>
                      ),
                    )}
                </section>
              </article>
            </article>
          </section>
        )}
      </section>
    </main>
  );
};

export default PersonDetails;
