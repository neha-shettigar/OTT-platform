import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import MovieCard from '../MovieCard/index';
import { data } from '../../data';
import bookMark from '../assets/cardLogo.svg';
import './styles.scss';

const CarouselComponent = () => {
  return (
    <Carousel className="carousel">
      <MovieCard
        icon={bookMark}
        poster={data[0].poster}
        link={data[0].link}
        title={data[0].title}
        rating={data[0].rating}
        className="carousel-movieCard"
      />
      <MovieCard
        icon={bookMark}
        poster={data[1].poster}
        link={data[1].link}
        title={data[1].title}
        rating={data[1].rating}
        className="carousel-movieCard"
      />
      <MovieCard
        icon={bookMark}
        poster={data[2].poster}
        link={data[2].link}
        title={data[2].title}
        rating={data[2].rating}
        className="carousel-movieCard"
      />
      <MovieCard
        icon={bookMark}
        poster={data[3].poster}
        link={data[3].link}
        title={data[3].title}
        rating={data[3].rating}
        className="carousel-movieCard"
      />
      <MovieCard
        icon={bookMark}
        poster={data[4].poster}
        link={data[4].link}
        title={data[4].title}
        rating={data[4].rating}
        className="carousel-movieCard"
      />
      <MovieCard
        icon={bookMark}
        poster={data[5].poster}
        link={data[5].link}
        title={data[5].title}
        rating={data[5].rating}
        className="carousel-movieCard"
      />
      <MovieCard
        icon={bookMark}
        poster={data[6].poster}
        link={data[6].link}
        title={data[6].title}
        rating={data[6].rating}
        className="carousel-movieCard"
      />
      <MovieCard
        icon={bookMark}
        poster={data[7].poster}
        link={data[7].link}
        title={data[7].title}
        rating={data[7].rating}
        className="carousel-movieCard"
      />
      <MovieCard
        icon={bookMark}
        poster={data[8].poster}
        link={data[8].link}
        title={data[8].title}
        rating={data[8].rating}
        className="carousel-movieCard"
      />
      <MovieCard
        icon={bookMark}
        poster={data[9].poster}
        link={data[9].link}
        title={data[9].title}
        rating={data[9].rating}
        className="carousel-movieCard"
      />
    </Carousel>
  );
};

export default CarouselComponent;
