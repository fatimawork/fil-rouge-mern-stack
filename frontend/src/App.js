import React from 'react';
import MovieList from './components/MovieList';
import { BrowserRouter as Router, Routes, Route, useParams,useNavigate  } from 'react-router-dom'; 
import FeaturedSection from './components/FeaturedSection';
import CommingsoonSection from './components/CommingsoonSection';
import ChronologicalSection from './components/ChronologicalSection';
import AboutUs from './components/AboutUs';
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import './styles/App.css'; 

// Importation des images
import cardImg from './assets/images/card-img.svg';
import cardImg1 from './assets/images/card-img1.svg';
import cardImg2 from './assets/images/card-img2.svg';
import cardImg3 from './assets/images/card-img3.svg';
import cardImg4 from './assets/images/card-img4.svg';
import cardImg5 from './assets/images/card-img5.svg';
import cardImg6 from './assets/images/card-img6.svg';
import cardImg7 from './assets/images/card-img7.svg';
import cardImg8 from './assets/images/card-img8.svg';
import logo from './assets/images/logo.svg';
import current1 from './assets/images/current-1.svg';
import current3 from './assets/images/current-2.svg';
import current4 from './assets/images/current-3.svg';
import current2 from './assets/images/current-4.svg';
import chrono from './assets/images/chrono.svg';
import chrono2 from './assets/images/chrono2.svg';
import latest1 from './assets/images/latest1.svg';
import latest2 from './assets/images/latest2.svg';

const movies = [
    { id: 1, title: 'Movie 1', poster: cardImg, background: cardImg },
    { id: 2, title: 'Movie 2', poster: cardImg1, background: cardImg1 },
    { id: 3, title: 'Movie 3', poster: cardImg2, background: cardImg2 },
    { id: 4, title: 'Movie 4', poster: cardImg3, background: cardImg3 },
    { id: 5, title: 'Movie 5', poster: cardImg4, background: cardImg4 },
    { id: 6, title: 'Movie 6', poster: cardImg5, background: cardImg5 },
    { id: 7, title: 'Movie 7', poster: cardImg6, background: cardImg6 },
    { id: 8, title: 'Movie 8', poster: cardImg7, background: cardImg7 },
    { id: 9, title: 'Movie 9', poster: cardImg8, background: cardImg8 },
    { id: 10, title: 'Movie 10', poster: cardImg3, background: cardImg3 },
    { id: 11, title: 'Movie 11', poster: cardImg, background: cardImg }
];

const moviesPlaying = [
    { id: 1, title: 'Movie Title 1', date: '2024-09-01', age: 'PG-13', language: 'English', poster: current1 },
    { id: 2, title: 'Movie Title 2', date: '2024-09-01', age: 'PG-13', language: 'English', poster: current2 },
    { id: 3, title: 'Movie Title 3', date: '2024-09-01', age: 'PG-13', language: 'English', poster: current3 },
    { id: 4, title: 'Movie Title 4', date: '2024-09-01', age: 'PG-13', language: 'English', poster: current4 }
];

const chronoMovie = [
    { year: 1990, title: "Movie Title 1", poster: chrono, description: "Description for Movie 1" },
    { year: 1995, title: "Movie Title 2", poster: chrono2, description: "Description for Movie 2" }
];

const newsData = [
    { id: 1, title: 'Breaking News 1', description: 'This is the description for breaking news 1', smallImage: latest1, image: latest1 },
    { id: 2, title: 'Breaking News 2', description: 'This is the description for breaking news 2', smallImage: latest2, image: latest2 },
    { id: 3, title: 'Breaking News 3', description: 'This is the description for breaking news 3', smallImage: latest1, image: latest1 },
    { id: 4, title: 'Breaking News 4', description: 'This is the description for breaking news 4', smallImage: latest2, image: latest2 }
];

function MovieRoute() {
  const { movieId } = useParams();
  const movie = movies.find(m => m.id === parseInt(movieId));
  const navigate = useNavigate();

  if (!movie) return <div>Movie not found</div>;

  return <BookingPage movie={movie} onClose={() => navigate('/')}  />;
}
function App() {
  return (
      <Router>
          <div className="App">
              <header className="header">
                  <div className="header-left">
                      <img src={logo} alt="Logo" className="logo" />
                  </div>
                  <div className="header-right">
                      <button className="icon dark-mode-icon">🌙</button>
                      <button className="icon login-icon">Login</button>
                  </div>
              </header>
              <Routes>
                  <Route path="/" element={
                      <>
                          <MovieList movies={movies} />
                          <FeaturedSection title="Currently playing" movies={moviesPlaying} />
                          <CommingsoonSection title="Coming soon" movies={moviesPlaying} />
                          <ChronologicalSection movies={chronoMovie} />
                          <AboutUs />
                          <LatestNews news={newsData} />
                      </>
                  } />
                  <Route path="/booking/:movieId" element={<MovieRoute />} />
              </Routes>
              <Footer />
          </div>
      </Router>
  );
}


export default App;
