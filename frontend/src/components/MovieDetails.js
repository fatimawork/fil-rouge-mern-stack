import React from 'react';
import '../styles/MovieDetails.css';

const MovieDetails = ({ movie }) => {
    if (!movie) return <div className="movie-details-placeholder">Select a year to see the details</div>;

    return (
        <div className="movie-detailss">
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <div className="movie-description">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
            </div>
        </div>
    );
};

export default MovieDetails;
