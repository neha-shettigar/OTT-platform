import React from 'react';
import './styles.scss';

interface NavbarInterface {
  icon1?: string;
  icon2?: string;
  icon3?: string;
  icon4?: string;
  icon5?: string;
  icon6?: string;
}

const Navbar = ({
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
}: NavbarInterface) => {
  return (
    <main className="navbar-container">
      <a className="navbar-container__link1" href="">
        <object className="navbar-container__object" data={icon1} />
      </a>
      <section className="navbar-container__section">
        <a className="navbar-container__link" href="">
          <object className="navbar-container__object" data={icon2} />
        </a>
        <a className="navbar-container__link" href="">
          <object className="navbar-container__object" data={icon3} />
        </a>
        <a className="navbar-container__link" href="">
          <object className="navbar-container__object" data={icon4} />
        </a>
        <a className="navbar-container__link" href="">
          <object className="navbar-container__object" data={icon5} />
        </a>
      </section>
      <a className="navbar-container__link1" href="">
        <object className="navbar-container__object" data={icon6} />
      </a>
    </main>
  );
};

export default Navbar;
