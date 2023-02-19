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
      {/* <a className="carousel__link" href={data[0].link}>
        <img src={data[0].poster} className="carousel__poster" />
      </a>
     
      <p>{data[0].rating}</p>

      <h3>{data[0].title}</h3>

      <p>{data[1].rating}</p>

      <h3>{data[1].title}</h3>

      <a className="carousel__link" href={data[2].link}>
        <img src={data[2].poster} className="carousel__poster" />
      </a>
    
    
      <p>{data[2].rating}</p>

      <h3>{data[2].title}</h3>

      <a className="carousel__link" href={data[3].link}>
        <img src={data[3].poster} className="carousel__poster" />
      </a>
      
      <p>{data[3].rating}</p>

      <h3>{data[3].title}</h3> */}

      <MovieCard
        icon={bookMark}
        poster={data[0].poster}
        link={data[0].link}
        title={data[0].title}
        rating={data[0].rating}
      />
      <MovieCard
        icon={bookMark}
        poster={data[1].poster}
        link={data[1].link}
        title={data[1].title}
        rating={data[1].rating}
      />
      <MovieCard
        icon={bookMark}
        poster={data[2].poster}
        link={data[2].link}
        title={data[2].title}
        rating={data[2].rating}
      />
    </Carousel>
  );
};

export default CarouselComponent;
