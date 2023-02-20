import React from 'react';
import MovieCard from '../MovieCard';
import './styles.scss';

interface SearchResultInterface {
  poster?: string;
  rating?: string;
  title?: string;
  icon?: string;
  link?: string;
}
const SearchResult = ({
  poster,
  rating,
  title,
  icon,
  link,
}: SearchResultInterface) => {
  return (
    <main className="searchResult-container">
      <MovieCard
        poster={poster}
        rating={rating}
        title={title}
        icon={icon}
        link={link}
      />
    </main>
  );
};

export default SearchResult;
