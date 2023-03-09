/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';

// import components
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';
import CarouselComponent from '../CarouselComponent';
import MovieCard from '../MovieCard';
import SearchResult from '../SearchResult';

// searchIcon for searchbar
import searchIcon from '../assets/search-normal.svg';

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
      .then((result) => {
        console.log(result.data);

        setMovies(result.data);

        setTotalPages(result.meta.pagination.pageSize);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  };
  console.log(movies);
  console.log(totalPages);

  // fetch popular movies on component mount
  React.useEffect(() => {
    loadMovies(currentPage);
  }, [currentPage]);

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
              {movies.map((movie: any, index: number) => (
                <MovieCard
                  key={index}
                  // release_date={movie.first_air_date.substring(0, 4)}
                  {...movie}
                  title={movie.attributes.Name}
                  className="movieCard-container"
                  // poster_path={
                  //   movie.attributes.poster_image.data.attributes.url
                  // }
                  alt={`${movie.title} poster`}
                  isBookmarked={movie.isBookmarked}
                  media_type={movie.attributes.category}
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
