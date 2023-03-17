/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bookmarkedIcon from '../assets/bookmarkedIcon.svg';
import unbookmarkedIcon from '../assets/unbookmarkedIcon.svg';
import dotIcon from '../assets/home-dot.svg';
import movieIcon from '../assets/home-movie.svg';
import './styles.scss';

interface MovieCardInterface {
  id?: number;
  poster_path?: string;
  media_type?: string;
  title?: string;
  name?: string;
  className: string;
  release_date: string;
  genre?: string;
  isBookmarked?: boolean;
  isActive?: boolean;
  onActiveStateChange?: (isActive: boolean) => void;
  first_air_date?: string;
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
  genre,
  className,
  release_date,
  first_air_date,
  onBookmark,
}: MovieCardInterface) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(() => {
    // Get the bookmarked state from local storage
    const storedBookmark = localStorage.getItem(`bookmark_${id}`);
    return storedBookmark === 'true';
  });

  useEffect(() => {
    // Save the bookmarked state to local storage
    localStorage.setItem(`bookmark_${id}`, String(isBookmarked));
  }, [id, isBookmarked]);

  const onClickBookmark = () => {
    setIsBookmarked(!isBookmarked);
    onBookmark();
  };

  return (
    <main className={className}>
      <section className={`${className}__section`}>
        <Link to={`/${genre}Details/${id}`} className={`${className}__link`}>
          <img
            src={getPosterURL(poster_path)}
            className={`${className}__poster`}
            alt={`${title} poster`}
          />
        </Link>
        <button
          className={`${className}__button ${isBookmarked ? 'active' : ''}`}
          onClick={onClickBookmark}
        >
          <img
            className={`${className}__icon`}
            src={isBookmarked ? bookmarkedIcon : unbookmarkedIcon}
            alt={isBookmarked ? 'Bookmarked' : 'Not bookmarked'}
          />
        </button>
        <section className={`${className}__details`}>
          <p>{release_date}</p>
          <object data={dotIcon} type="" className="dot-icon"></object>
          <object data={movieIcon} type="" className="movie-card-icon"></object>
          <p>{media_type}</p>
        </section>
        {title != null ? <h3>{title}</h3> : <h3>{name}</h3>}
      </section>
    </main>
  );
};

export default MovieCard;
