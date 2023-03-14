import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import components
import MovieCard from '../MovieCard';
import SearchBar from '../SearchBar';
import Navbar from '../Navbar';

// import svg
import searchIcon from '../../assets/search-normal.svg';
import { addBookmark, removeBookmark } from '../../states/actions';
import { RootState } from '../../states/store';

import './styles.scss';
import SearchResult from '../SearchResult';

//  bookmark interface
interface BookmarkInterface {
  id: number;
  poster_path?: string;
  media_type?: string;
  title?: string;
  className: string;
  release_date: string;
}

/**
 * This is a functional React component that manages a list of bookmarks for movies.
 * uses React hooks useState() and useSelector() to manage state
 * and access data from the Redux store respectively.
 * It also uses the useDispatch() hook to dispatch actions to the store.
 * @returns  a search bar , a navbar and a list of bookmarked movies using the MovieCard component
 */
const BookMarks = () => {
  const [searchResults, setSearchResults] = React.useState([]);
  const [flag, setFlag] = React.useState(false);
  const [, setBookmarks] = React.useState<BookmarkInterface[]>(() => {
    // Retrieve bookmarks from localStorage
    const savedBookmarks = localStorage.getItem('bookmarks');
    return savedBookmarks != null ? JSON.parse(savedBookmarks) : [];
  });

  const bookmarks = useSelector((state: RootState) => state.bookmarks);
  const dispatch = useDispatch();

  /**
   * This function toggles the bookmark status of a movie by checking if the movie is already bookmarked in the bookmarks array.
   *  If the movie is already bookmarked, it removes it from the bookmarks array
   *  If the movie is not bookmarked, it adds the movie to the bookmarks array using the spread operator
   * @param movie
   */
  const toggleBookmark = (movie: BookmarkInterface) => {
    const index = bookmarks.findIndex((b: any) => b.id === movie.id);
    if (index >= 0) {
      dispatch(removeBookmark(movie.id));
      setBookmarks((bookmarks: any) =>
        bookmarks.filter((b: any) => b.id !== movie.id),
      );
    } else {
      setBookmarks((bookmarks) => [...bookmarks, movie]);
      dispatch(addBookmark(movie));
    }

    // Save bookmarks to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  };
  const handleSearch = (results: any) => {
    setSearchResults(results);
    setFlag(!flag);
  };

  return (
    <main className="homePage-container">
      {/* navigation bar */}
      <Navbar />
      <section className="homePage-container__main">
        <SearchBar value="" icon={searchIcon} onSearch={handleSearch} />
        {flag ? (
          <SearchResult results={searchResults} />
        ) : (
          <section className="bookmarks-container">
            {/* to map over the bookmarks array and create a MovieCard component for
          each item in the array */}
            {bookmarks.map((movie: any) => (
              <MovieCard
                key={movie.id}
                {...movie}
                isInCarousel={false} // or true, depending on where it's being rendered
                className="movieCard-container"
                poster_path={movie.poster_path}
                media_type={movie.media_type}
                title={movie.title}
                onBookmark={() => toggleBookmark(movie)}
                isBookmarked={movie.isBookmarked}
              />
            ))}
          </section>
        )}
      </section>
    </main>
  );
};
export default BookMarks;
