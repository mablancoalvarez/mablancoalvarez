import React from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront';

const Cards = () => {

      return(
        <div className='card-container'>
          <div className='card-body'>
            <CardBack />
  
            <CardFront />
          </div>
        </div>
      )
    }
  

export default Cards;