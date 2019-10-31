import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import ancien from '../../img/ancien.png';
import sanguinaire from '../../img/sanguinaire.png';
import peureux from '../../img/peureux.png';
import psycho from '../../img/psycho.png';
import esprit from '../../img/esprit.png';
import historien from '../../img/historien.png';
import marathonien from '../../img/marathonien.png';
import './Carousel.css';

 
export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 50;
  return (
    <div className='allCarousel' style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        infiniteLoop={true}
        leftChevron={<button className='chevronButton'>{'<'}</button>}
        rightChevron={<button className='chevronButton'>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div className='card'><img className='character' alt='characater for old films' src={ancien}/><div className='characterNameQuoteBtn'><h1 className='characterName'>Papy VHS</h1><p className='characterQuote'>Il regarde que les vieux films sorties avant 2000</p><button className='characterBtn'>His favorite Films</button></div></div>
        <div className='card'><img className='character' alt='characater for gore films' src={sanguinaire}/><div className='characterNameQuoteBtn'><h1 className='characterName'>Le sanguinaire</h1><p className='characterQuote'>Il regarde que les films gores avec beaucoup de sang</p><button className='characterBtn'>His favorite Films</button></div></div>
        <div className='card'><img className='character' alt='characater for scared persons' src={peureux}/><div className='characterNameQuoteBtn'><h1 className='characterName'>Le peureux</h1><p className='characterQuote'>Il regarde que les films qui ne font pas trop peur</p><button className='characterBtn'>His favorite Films</button></div></div>
        <div className='card'><img className='character' alt='characater for psycho films' src={psycho}/><div className='characterNameQuoteBtn'><h1 className='characterName'>Le psycho</h1><p className='characterQuote'>Il regarde que les films qui ont un impact psychologique</p><button className='characterBtn'>His favorite Films</button></div></div>
        <div className='card'><img className='character' alt='characater for spirits films' src={esprit}/><div className='characterNameQuoteBtn'><h1 className='characterName'>L'esprit</h1><p className='characterQuote'>Il regarde que les films surnaturels avec des esprits </p><button className='characterBtn'>His favorite Films</button></div></div>
        <div className='card'><img className='character' alt='characater for true story films' src={historien}/><div className='characterNameQuoteBtn'><h1 className='characterName'>L'historien</h1><p className='characterQuote'>Il regarde que les films tirés d'histoires vrai</p><button className='characterBtn'>His favorite Films</button></div></div>
        <div className='card'><img className='character' alt='characater for films marathons' src={marathonien}/><div className='characterNameQuoteBtn'><h1 className='characterName'>Le marathonien</h1><p className='characterQuote'>Il regarde que les saga de films</p><button className='characterBtn'>His favorite Films</button></div></div>
      </ItemsCarousel>
    </div>
  );
};