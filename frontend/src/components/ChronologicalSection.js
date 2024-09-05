import React, { useState } from 'react';
import Timeline from './Timeline';
import MovieDetails from './MovieDetails';
import '../styles/ChronologicalSection.css';

const ChronologicalSection = ({ movies }) => {
    const [selectedYear, setSelectedYear] = useState(null);

    const handleYearClick = (year) => {
        setSelectedYear(year);
    };

    const selectedMovie = movies.find(movie => movie.year === selectedYear);

    return (
        <div className="chronological-section">
            <Timeline
                years={movies.map(movie => movie.year)}
                selectedYear={selectedYear}
                onYearClick={handleYearClick}
            />
            <MovieDetails movie={selectedMovie} />
        </div>
    );
};

export default ChronologicalSection;
