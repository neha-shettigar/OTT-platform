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
      <Link to="/home" className="navbar-container__link1">
        <img className="navbar-container__img1" src={icon} />
      </Link>

      <div className="navbar-container__section">
        <Link to="/home" className="navbar-container__link">
          <button className="navbar-container__link__button active">
            <img className="navbar-container__img__section" src={dashboard} />
          </button>
        </Link>

        <Link to="/moviegenre" className="navbar-container__link">
          <button className="navbar-container__link__button">
            <img className="navbar-container__img__section" src={movies} />
          </button>
        </Link>

        <Link to="/seriesgenre" className="navbar-container__link">
          <button className="navbar-container__link__button">
            <img className="navbar-container__img__section" src={series} />
          </button>
        </Link>

        <Link to="/bookmarks" className="navbar-container__link">
          <button className="navbar-container__link__button">
            <img className="navbar-container__img__section" src={bookmark} />
          </button>
        </Link>
      </div>

      <Link to="/" className="navbar-container__link1">
        <img className="navbar-container__img1" src={user} />
      </Link>
    </nav>
  );
};

export default Navbar;
