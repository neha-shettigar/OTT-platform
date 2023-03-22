import React from 'react';
import MovieCard from '../MovieCard';
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';
import searchIcon from '../assets/search-normal.svg';
import icon from '../assets/navbar-logo-1.svg';
import dashboard from '../assets/dashboard.svg';
import movies from '../assets/movies.svg';
import series from '../assets/tv-series.svg';
import bookmark from '../assets/bookmark.svg';
import user from '../assets/account.svg';
import './styles.scss';

interface SearchResultInterface {
  poster?: string;
  rating?: string;
  title?: string;
  icon1?: string;
  link?: string;
  onChange: () => void;
}
const SearchResult = ({
  poster,
  rating,
  title,
  icon1,
  link,
  onChange,
}: SearchResultInterface) => {
  return (
    <main className="homePage-container">
      <Navbar
        icon1={icon}
        icon2={dashboard}
        icon3={movies}
        icon4={series}
        icon5={bookmark}
        icon6={user}
      />
      <section className="homePage-container__main">
        <SearchBar
          value=""
          onChangeValue={onChange}
          icon={searchIcon}
          placeholder="Search for movies or TV series"
        />
        <section className="searchResult-container">
          <MovieCard
            poster={poster}
            rating={rating}
            title={title}
            icon={icon1}
            link={link}
            className="movieCard-container"
          />
        </section>
      </section>
    </main>
  );
};

export default SearchResult;
