/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import MovieCard from '../MovieCard';
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
    const jwt =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjc4MzUwMjU4LCJleHAiOjE2ODA5NDIyNTh9.XEWy1GJThfuj7bMHPOEVrqq32pjrUNnog1jgu9YbLCY';

    fetch(
      'https://sea-turtle-app-ccc3d.ondigitalocean.app/api/movies?populate=*',
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      },
    )
      .then(async (response) => {
        if (response.ok) {
          return await response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        console.log(data);
        setMovies(data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
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
            key={index}
            // release_date={movie.first_air_date.substring(0, 4)}
            {...movie}
            title={movie.attributes.Name}
            className="carousel-movieCard"
            poster_path={movie.attributes.poster_image.data.attributes.url}
            alt={`${movie.title} poster`}
            isBookmarked={movie.isBookmarked}
            media_type={movie.attributes.category}
            onBookmark={() => handleBookmark(movie.id)}
          />
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
