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
    <div style={{ padding: `0 ${chevronWidth}px` }}>
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
        <div className='card'><img className='character' alt='characater for old films' src={ancien}/><div><h1 className='characterName'>L'ancien</h1><p className='characterQuote'>L'ancien c'est le vieux de la bande</p><button className='characterBtn'>See his favorite Films</button></div></div>
        <div className='card'><img className='character' alt='characater for gore films' src={sanguinaire}/><div><h1 className='characterName'>Le sanguinaire</h1><p className='characterQuote'>Le sanguinaire c'est le fifou de la bande</p><button className='characterBtn'>See his favorite Films</button></div></div>
        <div className='card'><img className='character' alt='characater for scared persons' src={peureux}/><div><h1 className='characterName'>Le peureux</h1><p className='characterQuote'>Le peureux c'est la lopette de la bande</p><button className='characterBtn'>See his favorite Films</button></div></div>
        <div className='card'><img className='character' alt='characater for psycho films' src={psycho}/><div><h1 className='characterName'>Le psycho</h1><p className='characterQuote'>Le psycho c'est le fou de la bande</p><button className='characterBtn'>See his favorite Films</button></div></div>
        <div className='card'><img className='character' alt='characater for spirits films' src={esprit}/><div><h1 className='characterName'>Lesprit</h1><p className='characterQuote'>L'esprit c'est le vieux de la bande</p><button className='characterBtn'>See his favorite Films</button></div></div>
        <div className='card'><img className='character' alt='characater for true story films' src={historien}/><div><h1 className='characterName'>L'historien</h1><p className='characterQuote'>L'historien c'est le narrateur de la bande</p><button className='characterBtn'>See his favorite Films</button></div></div>
        <div className='card'><img className='character' alt='characater for films marathons' src={marathonien}/><div><h1 className='characterName'>Le marathonien</h1><p className='characterQuote'>Le marathonien c'est le Usan Bolt de la bande</p><button className='characterBtn'>See his favorite Films</button></div></div>
      </ItemsCarousel>
    </div>
  );
};