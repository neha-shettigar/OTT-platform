import React from 'react';
import { Link } from 'react-router-dom';

import icon from '../assets/navbar-logo-1.svg';
import dashboard from '../assets/dashboard.svg';
import movies from '../assets/movies.svg';
import series from '../assets/tv-series.svg';
import bookmark from '../assets/bookmark.svg';
import user from '../assets/account.svg';

import './styles.scss';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-container__link">
        <object className="navbar-container__object" data={icon} />
      </Link>

      <div className="navbar-container__section">
        <Link to="/" className="navbar-container__link">
          <object
            className="navbar-container__object__section"
            data={dashboard}
          />
        </Link>

        <Link to="/moviegenre" className="navbar-container__link">
          <object className="navbar-container__object__section" data={movies} />
        </Link>

        <Link to="/seriesgenre" className="navbar-container__link">
          <object className="navbar-container__object__section" data={series} />
        </Link>

        <Link to="/bookmarks" className="navbar-container__link">
          <object
            className="navbar-container__object__section"
            data={bookmark}
          />
        </Link>
      </div>

      <Link to="/profile" className="navbar-container__link">
        <object className="navbar-container__object" data={user} />
      </Link>
    </nav>
  );
};

export default Navbar;
