/*import React from 'react'
import './moviesList.css'
import CardMovie from '../cardMovies/CardMovie'

const MoviesList = ({movies}) => {
  return (
    <div className='movies'>
      {movies.map((film)=> (
        //parcourir et pour chaque element il va cree le composant : cardMovies        
        <CardMovie movie={film} key={film.id}/>

      ))}
      
    </div>
  );
}
//58.00
export default <MoviesList></MoviesList>*/

import React, { useState, useEffect } from 'react';
import './moviesList.css';
import CardMovie from '../cardMovies/CardMovie';

const MoviesList = ({ movies, researchTitle, searchrate }) => {
    const [loadedMovies, setLoadedMovies] = useState([]);

    useEffect(() => {
        // Animation de chargement progressive
        const timer = setTimeout(() => {
            setLoadedMovies(movies);
        }, 100);
        
        return () => clearTimeout(timer);
    }, [movies]);

    return (
        <div className='movies'>
            {loadedMovies
            .filter((film)=>film.title.toUpperCase().includes(researchTitle.toUpperCase())
        && film.rate === searchrate
        
        )
            .map((film) => (
                <div 
                    className="movie-item" 
                    key={film.id}
                    style={{ 
                        transition: `opacity 0.3s ease ${film.id * 0.05}s`,
                        opacity: loadedMovies.includes(film) ? 1 : 0
                    }}
                >
                    <CardMovie movie={film} />
                </div>
            ))}
        </div>
    );
};

export default MoviesList;