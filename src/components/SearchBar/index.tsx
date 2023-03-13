/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import { InputTextField } from '../InputTextField';

import './styles.scss';
import { moviesApi } from '../../utils';

interface SearchBarInterface {
  value?: string;
  icon: string;
  onSearch?: (results: any) => void;
}

const SearchBar = ({ icon, onSearch }: SearchBarInterface) => {
  const [query, setQuery] = React.useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [result, setResults] = React.useState([]);

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    moviesApi
      .get(`/search/multi?query=${query}&`)
      .then((result) => {
        setResults(result.data.results);
        onSearch?.(result.data.results);
        // navigate(`/searchResult?q=${query}`);
        console.log(result.data.results);
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
