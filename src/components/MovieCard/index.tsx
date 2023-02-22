import React from 'react';
import './styles.scss';

interface MovieCardInterface {
  poster?: string;
  rating?: string;
  title?: string;
  icon?: string;
  link?: string;
}

// this component contains item poster, details and a bookmark button
const MovieCard = ({
  poster,
  rating,
  title,
  icon,
  link,
}: MovieCardInterface) => {
  return (
    // main container
    <main className="movieCard-container">
      <section className="movieCard-container__section">
        {/* link of the item */}
        <a className="movieCard-container__link" href={link}>
          {/* item poster */}
          <img src={poster} className="movieCard-container__poster" />
        </a>
        {/* button for bookmark */}
        <button className="movieCard-container__button">
          <object className="movieCard-container__icon" data={icon} />
        </button>
        <p>{rating}</p>
        <h3>{title}</h3>
      </section>
    </main>
  );
};

export default MovieCard;
