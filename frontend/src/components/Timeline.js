import React from 'react';
import '../styles/Timeline.css';

const Timeline = ({ years, selectedYear, onYearClick }) => {
    return (
        <div className="timeline-container">
            <div className="timeline-line" />
            <div className="timeline">
                {years.map((year) => (
                    <div
                        key={year}
                        className={`timeline-year ${selectedYear === year ? 'selected' : ''}`}
                        onClick={() => onYearClick(year)}
                    >
                        {year}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
