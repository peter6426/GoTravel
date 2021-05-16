import React from 'react';
import CardItem from './Carditem';
import './Cards.css';
function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep in the wild, Rahala Waterfall'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the narrow foothill of heaven, Kedarkantha Trek'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set your soul free here, Bhramataal lake'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Cricket on Top of Himilayan Mountains, Dharamshala'
              label='Adventure'
              path='/products'
            />
            
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

