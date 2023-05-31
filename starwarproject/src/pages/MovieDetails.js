// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';

// function MovieDetails() {
//     const [movie, setMovie] = useState({});
//   const { id } = useParams();

//   useEffect(() => {
//     fetch(`https://swapi.dev/api/films/${id}`)
//       .then(response => response.json())
//       .then(data => setMovie(data))
//       .catch(error => console.log(error));
//   }, [id]);

//   return (
//      <div className="movie-details">
//         <h2>{movie.title}</h2>
//         <p>Director: {movie.director}</p>
//         <p>Producer: {movie.producer}</p>
//         <p>Release Date: {movie.release_date}</p>
//         <p>{movie.opening_crawl}</p>
//          <Link to="/">Back to List</Link>
//     </div>
//   )
// }

// export default MovieDetails












