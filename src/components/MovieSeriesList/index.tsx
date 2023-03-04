import React from 'react';
import axios from 'axios';
import './styles.scss';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}
// interface Series {
//   id: number;
//   name: string;
//   poster_path: string;
// }

interface Props {
  genreId: number;
}

const MovieList: React.FC<Props> = ({ genreId }) => {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=13622fc50c5257d370284ea008163f90&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`,
      )
      .then((response) => {
        setMovies(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [genreId]);

  return (
    <div className="movieList-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>Movies</h2>
          <ul className="movieList-container__list">
            {movies.map((movie) => (
              <li key={movie.id} className="movieList-container__list-item">
                <img
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt={movie.title}
                  className="movieList-container__list-item-poster"
                />
                <span className="movieList-container__list-item-title">
                  {movie.title}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MovieList;
