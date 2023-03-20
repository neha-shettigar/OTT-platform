import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import icon from '../assets/navbar-logo-1.svg';
import dashboard from '../assets/dashboard.svg';
import movies from '../assets/movies.svg';
import series from '../assets/tv-series.svg';
import bookmark from '../assets/bookmark.svg';
import user from '../assets/account.svg';

import './styles.scss';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar-container">
      <Link to="/home" className="navbar-container__link1">
        <img className="navbar-container__img1" src={icon} alt="navbar logo" />
      </Link>

      <div className="navbar-container__section">
        <Link
          to="/home"
          className={`navbar-container__link-${
            location.pathname === '/home' ? 'active' : ''
          }`}
        >
          <button className="navbar-container__link__button">
            <img
              className="navbar-container__img__section"
              src={dashboard}
              alt="dashboard icon"
            />
          </button>
        </Link>

        <Link
          to="/moviegenre"
          className={`navbar-container__link-${
            location.pathname === '/moviegenre' ? 'active' : ''
          }`}
        >
          <button className="navbar-container__link__button">
            <img
              className="navbar-container__img__section"
              src={movies}
              alt="movies icon"
            />
          </button>
        </Link>

        <Link
          to="/seriesgenre"
          className={`navbar-container__link-${
            location.pathname === '/seriesgenre' ? 'active' : ''
          }`}
        >
          <button className="navbar-container__link__button">
            <img
              className="navbar-container__img__section"
              src={series}
              alt="series icon"
            />
          </button>
        </Link>

        <Link
          to="/bookmarks"
          className={`navbar-container__link-${
            location.pathname === '/bookmarks' ? 'active' : ''
          }`}
        >
          <button className="navbar-container__link__button">
            <img
              className="navbar-container__img__section"
              src={bookmark}
              alt="bookmark icon"
            />
          </button>
        </Link>
      </div>

      <Link to="/" className="navbar-container__link1">
        <img className="navbar-container__img1" src={user} alt="user icon" />
      </Link>
    </nav>
  );
};

export default Navbar;
