import React from 'react';
import MovieList from './components/MovieList';
// src/App.js
import './styles/App.css'; // Assure-toi que le chemin est correct

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

const movies = [
    {
        id: 1,
        title: 'Movie 1',
        poster: cardImg,
        background: cardImg,
    },
    {
        id: 2,
        title: 'Movie 2',
        poster: cardImg1,
        background: cardImg1,
    },
    {
      id: 3,
      title: 'Movie 2',
      poster: cardImg2,
      background: cardImg2,
  },
  {
    id: 4,
    title: 'Movie 2',
    poster: cardImg3,
    background: cardImg3,
},
{
  id: 5,
  title: 'Movie 2',
  poster: cardImg4,
  background: cardImg4,
},
{
  id: 6,
  title: 'Movie 2',
  poster: cardImg5,
  background: cardImg5,
},
{
  id: 7,
  title: 'Movie 2',
  poster: cardImg6,
  background: cardImg6,
},
{
  id: 8,
  title: 'Movie 2',
  poster: cardImg7,
  background: cardImg7,
},
{
  id: 9,
  title: 'Movie 2',
  poster: cardImg8,
  background: cardImg8,
},
{
  id: 10,
  title: 'Movie 2',
  poster: cardImg3,
  background: cardImg3,
},
{
  id: 11,
  title: 'Movie 2',
  poster: cardImg,
  background: cardImg,
}
];

function App() {
    return (
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
            <MovieList movies={movies} />
        </div>
    );
}

export default App;
