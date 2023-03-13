/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';

// import components
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';
import CarouselComponent from '../CarouselComponent';
import MovieCard from '../MovieCard';
import SearchResult from '../SearchResult';
import { moviesApi } from '../../utils';

// searchIcon for searchbar
import searchIcon from '../../assets/search-normal.svg';

import './styles.scss';

// HomePage consists of NavBar, SearchBar, Carousel for trending items and movie tray
const HomePage = () => {
  const [movies, setMovies] = React.useState([]);
  const [searchResults, setSearchResults] = React.useState([]);
  const [flag, setFlag] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [selectedButton, setSelectedButton] = React.useState('');

  const loadMovies = (page: number) => {
    moviesApi
      .get(`/movie/popular?&language=en-US&page=${page}&adult=false`)
      .then((result) => {
        setMovies(result.data.results);
        setTotalPages(result.data.total_pages);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  };

  // fetch popular movies on component mount
  React.useEffect(() => {
    loadMovies(currentPage);
  }, [currentPage, loadMovies]);

  const handleBookmark = (id: number) => {
    setMovies((prevMovies: any) => {
      const newMovies = prevMovies.map((movie: any) => {
        if (movie.id === id) {
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

  const handleSearch = (results: any) => {
    setSearchResults(results);
    setFlag(true);
  };

  const handlePageChange = (page: number, button: any) => {
    setSelectedButton(button);
    setCurrentPage(page);
  };

  return (
    // main container
    <main className="homePage-container">
      {/* navigation */}
      <Navbar />
      {/* homepage content container */}
      <section className="homePage-container__main">
        {/* search bar */}
        <SearchBar
          value=""
          // onChangeValue={onChange}
          icon={searchIcon}
          onSearch={handleSearch}
        />
        {flag ? (
          <SearchResult results={searchResults} />
        ) : (
          <div>
            <h4 className="homePage-container__main__header">
              Trending<span>MOVIE</span>
            </h4>
            {/* Carousel for trending items */}
            <CarouselComponent />
            {/* movie tray */}
            <h4>
              Popular <span>MOVIE</span>
            </h4>
            <section className="homePage-container__main__popular">
              {/* each movie is displayed using movie card */}
              {movies.map((movie: any, index) => (
                <MovieCard
                  key={movie.id}
                  {...movie}
                  className="movieCard-container"
                  poster_path={movie.poster_path}
                  media_type={movie.media_type}
                  title={movie.title}
                  release_date={movie.release_date.substring(0, 4)}
                  isBookmarked={movie.isBookmarked}
                  onBookmark={() => handleBookmark(movie.id)}
                />
              ))}
            </section>
            {totalPages > 1 && (
              <div className="homePage-container__main__pagination">
                {[...Array(Math.min(totalPages, 5))].map((_, i) => {
                  const pageNumber = i + 1;
                  const isCurrentPage = pageNumber === currentPage;
                  return (
                    <button
                      value="page"
                      aria-selected={selectedButton === 'page'}
                      key={pageNumber}
                      className={`homePage-container__main__pagination__button ${
                        isCurrentPage ? 'active' : ''
                      }`}
                      onClick={() => handlePageChange(pageNumber, 'page')}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
};

export default HomePage;
