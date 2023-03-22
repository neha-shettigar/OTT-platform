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
  unBookmark: (() => void) | null;
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

  const handleBookmarkIconClick = () => {
    const newBookmarkState = !isBookmarked;

    // Store the updated bookmark status in localStorage
    localStorage.setItem(`bookmark_${id}`, String(newBookmarkState));

    // Create a new movie card data object with the updated bookmark status
    const movieCardData = {
      poster_path,
      release_date,
      media_type,
      title,
      name,
      id,
      genre,
      isBookmarked: newBookmarkState,
    };

    // Retrieve the current list of bookmarks from localStorage
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') ?? '[]');
    const existingBookmarkIndex = bookmarks.findIndex(
      (bookmark: MovieCardInterface) => bookmark.id === id,
    );

    if (newBookmarkState && existingBookmarkIndex === -1) {
      // Add the newly bookmarked item to the bookmarks list if it does not already exist
      bookmarks.push(movieCardData);
    } else if (!newBookmarkState && existingBookmarkIndex !== -1) {
      // Remove the un-bookmarked item from the bookmarks list if it exists
      bookmarks.splice(existingBookmarkIndex, 1);
    }

    // Store the updated bookmarks list in localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // Update the bookmark state in the component's state
    setIsBookmarked(newBookmarkState);
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
          onClick={handleBookmarkIconClick}
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
