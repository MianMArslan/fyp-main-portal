import React from 'react';
import '../Deals/deals.css';
import CardItem from '../Deals/CardItem'
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'
import img7 from '../../images/img7.jpg'
import img8 from '../../images/img8.jpg'
import img9 from '../../images/img9.webp'
function Order() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= {img5}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/'
            />
            <CardItem
              src= {img6}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img7}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/'
            />
            <CardItem
              src={img8}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/'
            />
            <CardItem
              src={img9}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
            path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Order;