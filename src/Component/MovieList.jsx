import React from 'react';

function MovieList({ movies, sortBy, filter, onMovieClick }) {
  const sortedAndFilteredMovies = movies
    .sort((a, b) =>
      sortBy === 'year'
        ? a.release_date.localeCompare(b.release_date)
        : a.episode_id - b.episode_id
    )
    .filter((movie) =>
      movie.title.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <ul>
      {sortedAndFilteredMovies.map((movie) => (
        <li key={movie.episode_id} onClick={() => onMovieClick(movie)}>
        <strong > {`Episode ${movie.episode_id}`} - {movie.title} </strong>
        <div style={{fontStyle:"italic", fontSize:"85%"}}> {`Release date : ${movie.release_date}` }</div>
        

        </li>
      ))}
    </ul>
  );
}

export default MovieList;
