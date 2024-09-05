import React, { useState } from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

const MovieList = ({ movies }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleCardClick = (movie) => {
        setSelectedMovie(movie === selectedMovie ? null : movie);
    };

    return (
        <div className="movie-list">
            {selectedMovie && (
                <div
                    className="background-image"
                    style={{ backgroundImage: `url(${selectedMovie.background})` }}
                />
            )}
            <div className="movies-container">
                {movies.slice(0, 6).map((movie) => (
                    <MovieCard 
                        key={movie.id} 
                        movie={movie} 
                        isSelected={selectedMovie === movie}
                        onClick={handleCardClick} 
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
