/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import './styles.scss';

interface MovieCardInterface {
  poster?: string;
  rating?: string;
  title?: string;
  icon?: string;
  link?: string;
  className?: string;
}

const MovieCard = ({
  poster,
  rating,
  title,
  icon,
  link,
  className,
}: MovieCardInterface) => {
  return (
    <main className={className}>
      <section className={`${className}__section`}>
        <a className={`${className}__link`} href={link}>
          <img src={poster} className={`${className}__poster`} />
        </a>
        <button className={`${className}__button`}>
          <object className={`${className}__icon`} data={icon} />
        </button>

        <p>{rating}</p>
        <h3>{title}</h3>
      </section>
    </main>
  );
};

export default MovieCard;
