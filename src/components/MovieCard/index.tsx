import React from 'react';
import './styles.scss';

interface MovieCardInterface {
  review: string;
  name: string;
  poster: string;
  icon: string;
}

const MovieCard = ({ review, name, poster, icon }: MovieCardInterface) => {
  return (
    <main className="movieCard-container">
      <section className="movieCard-container__section">
        <a className="movieCard-container__link" href="">
          <object className="movieCard-container__poster" data={poster} />
        </a>
        <button className="movieCard-container__button">
          <object className="movieCard-container__icon" data={icon} />
        </button>
      </section>
      <p>{review}</p>
      <h3>{name}</h3>
    </main>
  );
};

export default MovieCard;
