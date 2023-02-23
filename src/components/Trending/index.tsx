import React from 'react';
import MovieCard from '../MovieCard';
import CarouselComponent from '../Carousel';
import { data } from '../../data';
import bookmark from '../assets/bookmark.svg';

const Trending = () => {
  return (
    <main className="trending-container">
      <h4>Trending</h4>
      <CarouselComponent />
      <h4>Popular</h4>
      <section className="homePage-container__main__popular">
        {/* <article className="homePage-container__main__popular__row"> */}
        <MovieCard
          poster={data[8].poster}
          rating={data[8].rating}
          title={data[8].title}
          icon={bookmark}
          link={data[8].link}
        />
        <MovieCard
          poster={data[9].poster}
          rating={data[9].rating}
          title={data[9].title}
          icon={bookmark}
          link={data[9].link}
        />
        <MovieCard
          poster={data[2].poster}
          rating={data[2].rating}
          title={data[2].title}
          icon={bookmark}
          link={data[2].link}
        />
        {/* </article>
          <article className="homePage-container__main__popular__row"> */}
        <MovieCard
          poster={data[1].poster}
          rating={data[1].rating}
          title={data[1].title}
          icon={bookmark}
          link={data[1].link}
        />
        <MovieCard
          poster={data[3].poster}
          rating={data[3].rating}
          title={data[3].title}
          icon={bookmark}
          link={data[3].link}
        />
        <MovieCard
          poster={data[13].poster}
          rating={data[13].rating}
          title={data[13].title}
          icon={bookmark}
          link={data[13].link}
        />
        {/* </article> */}
      </section>
    </main>
  );
};

export default Trending;