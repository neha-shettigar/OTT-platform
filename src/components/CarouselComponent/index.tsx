/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';
import MovieCard from '../MovieCard';
import './styles.scss';
const BOOKMARKS_KEY = 'bookmarks';

const CarouselComponent = () => {
  const [movies, setMovies] = useState([]);
  const [bookmarks, setBookmarks] = useState<number[]>([]);

  useEffect(() => {
    const storedBookmarks = localStorage.getItem(BOOKMARKS_KEY);
    if (storedBookmarks != null) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=13622fc50c5257d370284ea008163f90&language=en-US&page=1`,
      )
      .then(({ data: { results } }) => {
        setMovies(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleBookmark = (movieId: number) => {
    if (bookmarks.includes(movieId)) {
      setBookmarks(bookmarks.filter((id) => id !== movieId));
    } else {
      setBookmarks([...bookmarks, movieId]);
    }
  };

  useEffect(() => {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  return (
    <Carousel>
      {movies.map((movie: any, index: number) => {
        const isBookmarked = bookmarks.includes(movie.id);
        return (
          <MovieCard
            key={index}
            {...movie}
            className="carousel-movieCard"
            poster_path={movie.poster_path}
            alt={`${movie.title} poster`}
            isBookmarked={isBookmarked}
            onBookmark={() => handleBookmark(movie.id)}
          />
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
