import React from 'react';
import MovieCard from '../MovieCard';
import { data } from '../../data';
import bookmark from '../assets/bookmark.svg';
import './styles.scss';

const BookMarks = () => {
  return (
    <main className="bookmarks-container">
      <MovieCard
        poster={data[5].poster}
        rating={data[5].rating}
        title={data[5].title}
        icon={bookmark}
        link={data[5].link}
      />
      <MovieCard
        poster={data[6].poster}
        rating={data[6].rating}
        title={data[6].title}
        icon={bookmark}
        link={data[6].link}
      />
      <MovieCard
        poster={data[2].poster}
        rating={data[2].rating}
        title={data[2].title}
        icon={bookmark}
        link={data[2].link}
      />
    </main>
  );
};

export default BookMarks;
