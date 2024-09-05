// src/components/LatestNews.js
import React, { useState } from 'react';
import '../styles/LatestNews.css';

const LatestNews = ({ news }) => {
    const [selectedNews, setSelectedNews] = useState(null);

    const handleNewsClick = (newsItem) => {
        setSelectedNews(newsItem);
    };

    return (
        <div className="latest-news">
            {/* Big Image and Description Section */}
            <div className="news-details">
                {selectedNews ? (
                    <div className="news-detail-content" style={{ backgroundImage: `url(${selectedNews.image})` }}>
                        <div className="news-detail-text">
                            <h3>{selectedNews.title}</h3>
                            <p>{selectedNews.description}</p>
                        </div>
                    </div>
                ) : (
                    <div className="placeholder">Select a news item to view details</div>
                )}
            </div>

            {/* News List Section */}
            <div className="news-list">
                {news.map((newsItem) => (
                    <div
                        key={newsItem.id}
                        className="news-item"
                        onClick={() => handleNewsClick(newsItem)}
                    >
                        <img src={newsItem.smallImage} alt={newsItem.title} />
                        <div className="news-info">
                            <h4>{newsItem.title}</h4>
                            <p>{newsItem.description.substring(0, 50)}...</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestNews;
