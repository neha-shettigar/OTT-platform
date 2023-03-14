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

/**
 * This component fetches the popular movies from an API endpoint on mount, using the useEffect hook,
 *  and displays them using the MovieCard component.
 * @returns a search bar and a SearchResult component if the user searches for a movie.
 *  carousel component for trending movies.
 * pagination buttons that allow the user to navigate through the pages of the popular movies list.
 */
const HomePage = () => {
  const [movies, setMovies] = React.useState([]);
  const [searchResults, setSearchResults] = React.useState([]);
  const [flag, setFlag] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [selectedButton, setSelectedButton] = React.useState('');

  const loadMovies = (page: number) => {
    moviesApi // The axios instance created for making API requests
      .get(`/movie/popular?&language=en-US&page=${page}&adult=false`) // Send a GET request to the specified endpoint with the specified parameters
      .then((result) => {
        // If the request is successful, update the state with the response data
        setMovies(result.data.results); // Update the movies state with the list of movie results
        setTotalPages(result.data.total_pages); // Update the totalPages state with the total number of pages returned by the API
      })
      .catch((error) => {
        // If the request fails, log the error to the console
        console.error('Error fetching movie data:', error);
      });
  };

  // fetch popular movies on component mount
  React.useEffect(() => {
    loadMovies(currentPage);
  }, [currentPage, loadMovies]);

  /**
   * toggles the isBookmarked property of the movie in the state and saves the bookmarks to the local storage.
   * @param id
   */
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
    setSearchResults(results); // Update searchResults state with the new results value
    setFlag(!flag); // Toggle the flag state by negating its current value
  };

  /**
   *  when a button is clicked,this function updates the current page state variable and the selected button state variable.
   * @param page number
   * @param button for representing page number
   */
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
              {movies.map((movie: any) => (
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
            {totalPages > 1 && ( // If there is more than one page of results, render the pagination component
              <div className="homePage-container__main__pagination">
                {[...Array(Math.min(totalPages, 5))].map((_, i) => {
                  // Render up to 5 pagination buttons, or the total number of pages, whichever is smaller
                  const pageNumber = i + 1; // Calculate the page number for the button
                  const isCurrentPage = pageNumber === currentPage; // Determine if the button represents the current page
                  return (
                    <button
                      value="page"
                      aria-selected={selectedButton === 'page'}
                      key={pageNumber}
                      className={`homePage-container__main__pagination__button ${
                        isCurrentPage ? 'active' : ''
                      }`}
                      onClick={() => handlePageChange(pageNumber, 'page')} // Call the handlePageChange function when the button is clicked
                    >
                      {pageNumber}
                      {/* Display the page number on the button */}
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
