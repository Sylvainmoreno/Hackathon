
import React from 'react';
import './App.css';
import Navbar from './Components/Sylvain/Header/Header';
import ItemsCarousel from './Components/carousel/Carousel'
import TheQuizz from './Components/questionnaire/TheQuizz';
import Citrouille from './Components/Citrouille';



function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemsCarousel />
      <TheQuizz />
      <Citrouille />
    </div>
  )
}

export default App;