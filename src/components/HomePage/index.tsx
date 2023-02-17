import React from 'react';
import Navbar from '../Navbar';
import MovieCard from '../MovieCard';
import SearchBar from '../SearchBar';
import icon from '../assets/navbar-logo-1.svg';
import dashboard from '../assets/dashboard.svg';
import movies from '../assets/movies.svg';
import series from '../assets/tv-series.svg';
import bookmark from '../assets/bookmark.svg';
import user from '../assets/account.svg';
import poster1 from '../assets/movieCard.svg';
import bookMark from '../assets/cardLogo.svg';
import searchIcon from '../assets/search-normal.svg';
import './styles.scss';

interface HomePageInterface {
  show: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const HomePage = ({ show, value, onChange }: HomePageInterface) => {
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
        {/* <article className="homePage-container__main__search"> */}
        <SearchBar value="x" onChangeValue={onChange} icon={searchIcon} />
        {/* </article> */}
        <article className="homePage-container__main__body">
          <MovieCard
            poster={poster1}
            icon={bookMark}
            name="Unchanted"
            review="Movie"
          />
          <MovieCard
            poster={poster1}
            icon={bookMark}
            name="Unchanted"
            review="Movie"
          />
          <MovieCard
            poster={poster1}
            icon={bookMark}
            name="Unchanted"
            review="Movie"
          />
          <MovieCard
            poster={poster1}
            icon={bookMark}
            name="Unchanted"
            review="Movie"
          />
          <MovieCard
            poster={poster1}
            icon={bookMark}
            name="Unchanted"
            review="Movie"
          />
          <MovieCard
            poster={poster1}
            icon={bookMark}
            name="Unchanted"
            review="Movie"
          />
        </article>
      </section>
    </main>
  );
};

export default HomePage;
