import React from 'react';
// import Link from the library
import { Link } from 'react-router-dom';

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
      <Link to="/tending" className="navbar-container__link">
        <object className="navbar-container__object" data={icon} />
      </Link>

      <section className="navbar-container__section">
        <Link to="/" className="navbar-container__link">
          <object className="navbar-container__object" data={dashboard} />
        </Link>

        <Link to="" className="navbar-container__link">
          <object className="navbar-container__object" data={movies} />
        </Link>

        <Link to="" className="navbar-container__link">
          <object className="navbar-container__object" data={series} />
        </Link>

        <Link to="" className="navbar-container__link">
          <object className="navbar-container__object" data={bookmark} />
        </Link>
      </section>

      <Link to="" className="navbar-container__link">
        <object className="navbar-container__object" data={user} />
      </Link>
    </main>
  );
};

export default Navbar;
