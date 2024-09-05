import React from 'react';
import '../styles/FeaturedSection.css';

const commingsoonSection = ({ title, movies }) => {
    return (
        <div className="featured-section">
            <div className="section-header">
                <h2>{title}</h2>
                <button className="see-more">See More</button>
            </div>
            <div className="featured-movies-container">
                {movies.map((movie) => (
                    <div key={movie.id} className="featured-movie-card">
                        <img src={movie.poster} alt={movie.title} />
                        <div className="movie-details">
                            <h3>{movie.title}</h3>
                            <p>Date: {movie.date}</p>
                            <p>Age: {movie.age}</p>
                            <p>Language: {movie.language}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default commingsoonSection;
