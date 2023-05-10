import React, { useState, useEffect } from 'react';
import MovieCard from './pages/MovieCard';
// import MovieDetails from './pages/MovieDetails';
// import './App.css';

function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/films')
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Movies</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.episode_id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
export default Main;


  
  
  
  
  
  