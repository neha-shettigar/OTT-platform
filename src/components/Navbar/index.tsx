import React from 'react';
// import Link from the library
// import { Link } from 'react-router-dom';

// import svg
import icon from '../assets/navbar-logo-1.svg';
import dashboard from '../assets/dashboard.svg';
import movies from '../assets/movies.svg';
import series from '../assets/tv-series.svg';
import bookmark from '../assets/bookmark.svg';
import user from '../assets/account.svg';

import './styles.scss';

// this component contains links for different pages represented by icons
const Navbar = () => {
  return (
    <main className="navbar-container">
      {/* links represented by icons */}
      <a href="" className="navbar-container__link">
        <object className="navbar-container__object" data={icon} />
      </a>

      <section className="navbar-container__section">
        <a href="/home" className="navbar-container__link">
          <object className="navbar-container__object" data={dashboard} />
        </a>

        <a href="/movie-genre" className="navbar-container__link">
          <object className="navbar-container__object" data={movies} />
        </a>

        <a href="/series-genre" className="navbar-container__link">
          <object className="navbar-container__object" data={series} />
        </a>

        <a href="/bookmarks" className="navbar-container__link">
          <object className="navbar-container__object" data={bookmark} />
        </a>
      </section>

      <a href="/tsconfig.json" className="navbar-container__link">
        <object className="navbar-container__object" data={user} />
      </a>
    </main>
  );
};

export default Navbar;
