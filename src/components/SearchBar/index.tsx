import React from 'react';
import { InputTextField } from '../InputTextField';
import axios from 'axios';

import './styles.scss';

interface SearchBarInterface {
  value?: string;
  icon: string;
  onSearch?: (results: any) => void;
}

const SearchBar = ({ icon, onSearch }: SearchBarInterface) => {
  const [query, setQuery] = React.useState('');
  const [, setResults] = React.useState([]);

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=13622fc50c5257d370284ea008163f90`,
      )
      .then((result) => {
        setResults(result.data.results);
        onSearch?.(result.data.results);
        // navigate(`/searchResult?q=${query}`);
        console.log(result.data.results);
        console.log(result.data.results.release_date);
      })
      .catch((error) => {
        console.log(error);
        // display error message to user
      });
  }

  function onChangeSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  return (
    <main className="searchbar-container">
      <object className="searchbar-container__object" data={icon} />
      {/* <form className="searchbar-container__form" onSubmit={handleSubmit}> */}
      <InputTextField
        value={query}
        className="searchbar-container__input"
        placeholder="Search"
        onChangeValue={onChangeSearch}
      />
      <section className="searchbar-container__button-container">
        <button
          className="searchbar-container__button"
          type="submit"
          onClick={handleSubmit}
        >
          Search
        </button>
      </section>
      {/* </form> */}
      {/* {results.length > 0 && (
        <section className="searchbar-container__searchResult-container">
          <SearchResult results={results} />
        </section>
      )} */}
    </main>
  );
};

export default SearchBar;
