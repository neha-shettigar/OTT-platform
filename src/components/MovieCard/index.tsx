/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bookmarkedIcon from '../assets/bookmarkedIcon.svg';
import unbookmarkedIcon from '../assets/unbookmarkedIcon.svg';
import './styles.scss';

interface MovieCardInterface {
  id?: number;
  poster_path?: string;
  media_type?: string;
  title?: string;
  name?: string;
  className: string;
  genre?: string;
  release_date: string;
  first_air_date?: string;
  isBookmarked: boolean;
  isInCarousel?: boolean;
  onBookmark: () => void;
}

const getPosterURL = (posterPath?: string) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;
};

const MovieCard = ({
  id,
  poster_path,
  media_type,
  title,
  name,
  className,
  genre,
  isBookmarked,
  isInCarousel,
  release_date,
  first_air_date,
  onBookmark,
}: MovieCardInterface) => {
  const [activeButton, setActiveButton] = useState<string>(''); // state variable to keep track of the active button

  const onClickButton = () => {
    onBookmark();
    setActiveButton('bookmarks'); // update the active button state when the "bookmarks" button is clicked
  };

  return (
    <main className={className}>
      <section className={`${className}__section`}>
        <Link to={`/${genre}details/${id}`} className={`${className}__link`}>
          <img
            src={getPosterURL(poster_path)}
            className={`${className}__poster`}
            alt={`${title} poster`}
          />
        </Link>
        <button
          className={`${className}__button ${
            activeButton === 'bookmarks' ? 'active' : ''
          }`} // add "active" class to the "bookmarks" button when it is active
          onClick={onClickButton}
        >
          <img
            className={`${className}__icon`}
            src={isBookmarked ? bookmarkedIcon : unbookmarkedIcon}
          />
        </button>
        <p>
          {release_date} {media_type}
        </p>
        {title != null ? <h3>{title}</h3> : <h3>{name}</h3>}
      </section>
    </main>
  );
};

export default MovieCard;
