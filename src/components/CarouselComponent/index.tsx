/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MovieCard from '../MovieCard';
import { moviesApi } from '../../utils';

import './styles.scss';

const BOOKMARKS_KEY = 'bookmarks';

const CarouselComponent = () => {
  const [movies, setMovies]: any = useState([]);
  const [bookmarks, setBookmarks] = useState<number[]>([]);

  useEffect(() => {
    const storedBookmarks = localStorage.getItem(BOOKMARKS_KEY);
    if (storedBookmarks != null) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  useEffect(() => {
    moviesApi
      .get(`/trending/movie/week?&language=en-US&page=1`)
      .then(({ data: { results } }) => {
        setMovies(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleBookmark = (id: number) => {
    setMovies((prevMovies: any) => {
      const newMovies = prevMovies.map((movie: any) => {
        if (movie.id === id) {
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          movie.isBookmarked = !movie.isBookmarked;
        }
        return movie;
      });

      // Save bookmarks to localStorage
      const bookmarks = newMovies.filter((movie: any) => movie.isBookmarked);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

      return newMovies;
    });
  };
  useEffect(() => {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  return (
    <Carousel>
      {movies.map((movie: any, index: number) => {
        // const isBookmarked = bookmarks.includes(movie.id);
        return (
          <MovieCard
            key={movie.id}
            // release_date={movie.first_air_date.substring(0, 4)}
            {...movie}
            className="carousel-movieCard"
            poster_path={movie.poster_path}
            alt={`${movie.title} poster`}
            isBookmarked={movie.isBookmarked}
            onBookmark={() => handleBookmark(movie.id)}
          />
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
