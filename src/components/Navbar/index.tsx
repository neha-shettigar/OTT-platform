import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import icon from '../assets/navbar-logo-1.svg';
import dashboard from '../assets/dashboard.svg';
import movies from '../assets/movies.svg';
import series from '../assets/tv-series.svg';
import bookmark from '../assets/bookmark.svg';
import user from '../assets/account.svg';

// interface NavbarInterface {
//   icon1?: string;
//   icon2?: string;
//   icon3?: string;
//   icon4?: string;
//   icon5?: string;
//   icon6?: string;
//   link1?: string;
//   link2?: string;
//   link3?: string;
//   link4?: string;
//   link5?: string;
//   link6?: string;
// }

const Navbar = () => {
  return (
    <main className="navbar-container">
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
