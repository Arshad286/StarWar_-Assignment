
import './App.css'
import { useState, useEffect } from 'react';
import MovieList from './Component/MovieList';
import MovieDetails from './Component/MovieDetails';


function App() {
 
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortBy, setSortBy] = useState('year');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    
    fetch('https://swapi.dev/api/films/?format=json')
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <>
       <div className="app">
      <div className="left-panel">
        <select  className='Sort 'value={sortBy} onChange={handleSortChange}>
          <option value="year" >Sort by Year</option>
          <option value="episode">Sort by Episode</option>
        </select>
        <input 
        className='inputText'
          type="text"
          placeholder="Filter by movie name"
          value={filter}
          onChange={handleFilterChange}
        />

        <MovieList
          movies={movies}
          sortBy={sortBy}
          filter={filter}
          onMovieClick={handleMovieClick}
        />
      </div>
      <div className="right-panel">
        {selectedMovie ? (
          <MovieDetails movie={selectedMovie} />
        ) : (
          <p style={{ display:"flex",justifyContent:"center", textAlign:"center", 
          fontFamily:"Verdana, Geneva, Tahoma, sans-seri",
          fontSize: "150%",
          color: "grey"}}>No movie selected</p>
        )}
      </div>
    </div>
    </>
  )
}

export default App
