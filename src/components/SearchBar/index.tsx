import React from 'react';
import { InputTextField } from '../InputTextField';
import axios from 'axios';

// import { useNavigate } from 'react-router-dom';
import SearchResult from '../SearchResult';
import './styles.scss';

interface SearchBarInterface {
  value?: string;
  icon: string;
  onSearch?: (results: any) => void;
}

const SearchBar = ({ icon, onSearch }: SearchBarInterface) => {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [showResults, setShowResults] = React.useState(false);
  // const navigate = useNavigate();

  const onClickSearch = (value: string) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?query=${value}&api_key=13622fc50c5257d370284ea008163f90`,
      )
      .then((result) => {
        setResults(result.data.results);
        setShowResults(true);
        // navigate("searchResult")
      })
      .catch((error) => {
        console.log(error);
        // display error message to user
      });
  };

  function onChangeSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
    setShowResults(false);
  }

  return (
    <main className="searchbar-container">
      <object className="searchbar-container__object" data={icon} />
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
          onClick={() => onClickSearch(query)}
        >
          Search
        </button>
      </section>
      {showResults && (
        <section className="searchbar-container__searchResult-container">
          {results.length > 0 ? (
            <SearchResult results={results} />
          ) : (
            <p>No results found</p>
          )}
        </section>
      )}
    </main>
  );
};

export default SearchBar;
