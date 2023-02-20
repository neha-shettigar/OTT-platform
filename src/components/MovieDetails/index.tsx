import React from 'react';

import './styles.scss';

interface MovieDetailsInterface {
  poster: string;
  title: string;
  rating: string;
  category: string;
  description: string;
}

const MovieDetails = ({
  poster,
  title,
  rating,
  category,
  description,
}: MovieDetailsInterface) => {
  return (
    <main className="movieDetails-container">
      <img src={poster} className="movieDetails-container__image" />
      <section className="movieDetails-container__details">
        <h2>{title}</h2>
        <h4>
          {rating}
          <span>{category}</span>
        </h4>
        <p>{description}</p>
      </section>
    </main>
  );
};

export default MovieDetails;
