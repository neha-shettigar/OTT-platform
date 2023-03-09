/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import { Link } from 'react-router-dom';
import bookmarkedIcon from '../assets/bookmarkedIcon.svg';
import unbookmarkedIcon from '../assets/unbookmarkedIcon.svg';
import './styles.scss';

interface MovieCardInterface {
  id?: number;
  poster_path?: string;
  media_type?: string;
  title?: string;
  className: string;
  release_date: string;
  isBookmarked: boolean;
  isInCarousel?: boolean;
  onBookmark: () => void;
}

// const getPosterURL = (posterPath?: string) => {
//   return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;
// };

const MovieCard = ({
  id,
  poster_path,
  media_type,
  title,
  className,
  isBookmarked,
  isInCarousel,
  release_date,
  onBookmark,
}: MovieCardInterface) => {
  const onClickButton = () => {
    onBookmark();
  };

  return (
    <main className={className}>
      <section className={`${className}__section`}>
        <Link to={`/movieDetails/${id}`} className={`${className}__link`}>
          <img
            src={poster_path}
            className={`${className}__poster`}
            alt={`${title} poster`}
          />
        </Link>
        <button className={`${className}__button`} onClick={onClickButton}>
          <img
            className={`${className}__icon`}
            src={isBookmarked ? bookmarkedIcon : unbookmarkedIcon}
          />
        </button>
        <p>
          {release_date} {media_type}
        </p>
        <h3>{title}</h3>
      </section>
    </main>
  );
};

export default MovieCard;
