import React, { useState, useEffect, useRef } from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

const MovieList = ({ movies }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const scrollRef = useRef(null);

    const handleCardClick = (movie) => {
        setSelectedMovie(movie);
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollAmount = 0;

        const autoScroll = () => {
            if (scrollContainer) {
                scrollAmount += 1; // Vitesse du défilement
                scrollContainer.scrollLeft = scrollAmount;
                if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                    scrollAmount = 0; // Revenir au début
                }
            }
        };

        const interval = setInterval(autoScroll, 20);

        return () => clearInterval(interval);
    }, []);

    const handleScroll = (event) => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += event.deltaY; // Utiliser la molette pour défiler
        }
    };

    return (
        <div className="movie-list">
            {selectedMovie && (
                <div
                    className="background-image"
                    style={{ backgroundImage: `url(${selectedMovie.background})` }}
                />
            )}
            <div
                className="movies-container"
                ref={scrollRef}
                onWheel={handleScroll}
            >
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onClick={handleCardClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
