
import React from 'react';
import './App.css';
import Navbar from './Components/Sylvain/Header/Header';
import ItemsCarousel from './Components/carousel/Carousel'
import TheQuizz from './Components/questionnaire/TheQuizz';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className= "backForest">
      <ItemsCarousel />
      <TheQuizz />
      </div>
    </div>
  )
}

export default App;