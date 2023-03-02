/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import './styles.scss';

interface MovieCardInterface {
  poster_path?: string;
  media_type?: string;
  title?: string;
  icon?: string;
  link?: string;
}
const getResultPosterURL = (posterPath: string | undefined) => {
  return `https://www.themoviedb.org/t/p/w94_and_h141_bestv2/${posterPath}`;
};

// this component contains item poster, details and a bookmark button
const MovieResult = ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  poster_path,
  media_type,
  title,
  icon,
  link,
}: MovieCardInterface) => {
  return (
    // main container
    <main className="movieResult-container">
      <section className="movieResult-container__section">
        {/* link of the item */}
        <a className="movieResult-container__link" href={link}>
          {/* item poster */}
          <img
            src={getResultPosterURL(poster_path)}
            className="movieResult-container__poster"
          />
        </a>
        {/* button for bookmark */}
        <button className="movieResult-container__button">
          <object className="movieResult-container__icon" data={icon} />
        </button>
        <p>{media_type}</p>
        <h3>{title}</h3>
      </section>
    </main>
  );
};

export default MovieResult;
