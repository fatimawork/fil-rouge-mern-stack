import React, { useState } from 'react';
import '../styles/MovieCard.css';
import { useNavigate } from 'react-router-dom'; 
const MovieCard = ({ movie, isSelected, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleBookNowClick = (event) => {
        event.stopPropagation(); // Prevent triggering the card click event
        navigate(`/booking/${movie.id}`); // Navigate to booking page with movie ID
    };
    return (
        <div
            className={`movie-card ${isHovered || isSelected ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(movie)}
        >
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <button className="book-now" onClick={handleBookNowClick}>Book Now</button>
            </div>
        </div>
    );
};

export default MovieCard;
