// src/components/MovieCard.js
import React, { useState } from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ movie, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`movie-card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(movie)}
        >
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <button className="book-now">Book Now</button>
            </div>
        </div>
    );
};

export default MovieCard;
