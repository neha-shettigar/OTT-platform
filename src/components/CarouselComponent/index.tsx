/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState, useEffect } from 'react';
// import components
import { Carousel } from 'react-responsive-carousel';
import MovieCard from '../MovieCard';
import { moviesApi } from '../../utils';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.scss';

const BOOKMARKS_KEY = 'bookmarks';

/**
 * This is a React functional component that renders a carousel of movie cards fetched from an external API.
 * There are also two useEffect() hooks used in the component.
 * The first hook runs only once, when the component mounts,
 * and it retrieves the bookmarked movies from the localStorage and sets the bookmarks state accordingly.
 * The second hook also runs only once when the component mounts,
 * and it fetches the trending movies of the week from the API and sets the movies state to the results.
 * @returns carousel for the trending movies
 */
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

  /**
   *  This function toggles the isBookmarked property of the clicked movie in the movies state
   * and updates the bookmarks state by extracting the id values of all bookmarked movies from the movies state.
   * The bookmarks state is then saved to the localStorage.
   * @param id
   */
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
    // carousel component from an external library
    <Carousel>
      {/* maps through the movies state to render a MovieCard component for each
      movie */}
      {movies.map((movie: any, index: number) => {
        return (
          <MovieCard
            key={movie.id}
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
