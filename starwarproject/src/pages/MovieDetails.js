import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function MovieDetails() {
    const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://swapi.dev/api/films/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.log(error));
  }, [id]);

  return (
     <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>Director: {movie.director}</p>
        <p>Producer: {movie.producer}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>{movie.opening_crawl}</p>
         <Link to="/">Back to List</Link>
    </div>
  )
}

export default MovieDetails












// import React, { useEffect, useState } from 'react'
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from "axios"


// function Details() {
//     const { id } = useParams()
//     // const navigate = useNavigate
//     const navigate = useNavigate();

//     const handleClick = () => {
//         navigate(-1);
//       };
      
//     const [films, setFilms] = useState([])
//     const [loading, setLoading] = useState(true)

//     const fetchData = async (urls) => {
//         // const response = await fetch(url) 
//         const results = await Promise.all(urls.map((url) =>
//         axios.get(url)));
//        return results.map((res) => res.data);
//       };
//     //   console.log(films)
//     // const fetchData = async (url) => {
//     //     const response = await axios.get(url);
//     //     return response.data;
//     //   };
      
    
//       useEffect(() => {
//         const getFilmData = async () => {
//             try {
//                 setLoading(true);
//                 const response = await axios.get(`https://swapi.dev/api/films/${id}`)
//                 const filmData = response.data;

//                 const [characters, planets, species, starships, vehicles] =
//                 await Promise.all([
//                     fetchData(filmData.characters),
//                     fetchData(filmData.planets),
//                     fetchData(filmData.species),
//                     fetchData(filmData.starships),
//                     fetchData(filmData.vehicles),
//                 ]);
//                 setFilms({
//                     ...filmData,
//                     characters,
//                     planets,
//                     species,
//                     starships,
//                     vehicles,
//                 });
//                 console.log(films)
//             } catch (err) {
//                 console.error(err.message);
//                 setFilms();
//             } finally {
//                 setLoading(false)
//             }
//         }
//         getFilmData()
//       }, [id, films])
    
//   return (
//     <div>
//         {loading ? (
//             <loader className="..." />
//         ) : (
//             <div className='...'>
//                 <header>
//                     <button onClick={handleClick}>Back to list</button>

//                     <h2>{films.title}</h2>
//                     <p>Director: {films.director}</p>
//                     <p>Producer: {films.producer}</p>
//                 </header>
//                 <div>
//                     <h4>Description</h4>
//                     <p>{films.opening_crawl}</p>
//                 </div>
//                 <div>
//                     <h4>Characters</h4>
//                     <ul>
//                         {films.characters.map((character) => (
//                             <li key={character.url}>{character.name}</li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div>
//                     <h4>Planets</h4>
//                     <ul>
//                         {films.planets.map((planet) => (
//                             <li key={planet.url}>{planet.name}</li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div>
//                     <h4>Species</h4>
//                     <ul>
//                         {films.species.map((species) => (
//                             <li key={species.url}>{species.name}</li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div>
//                     <h4>Starships</h4>
//                     <ul>
//                         {films.starships.map((starships) => (
//                             <li key={starships.url}>{starships.name}</li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div>
//                     <h4>Vehicles</h4>
//                     <ul>
//                         {films.vehicles.map((vehicles) => (
//                             <li key={vehicles.url}>{vehicles.name}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
//     </div>
//   )
// }

// export default Details