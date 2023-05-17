import React from 'react';
import Car from './Car';

import './styles.css'

const cars = [
  {
    title: 'BMW',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2024-bmw-5-series-101-1676576715.jpg?crop=0.819xw:0.645xh;0.127xw,0.355xh&resize=1200:*',
    price: 11000,
    currency: '$'
  },
  {
    title: 'Audi',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2024-audi-rs7-performance-motion-front-2-1669663936.jpg?crop=0.689xw:0.517xh;0.276xw,0.368xh&resize=1200:*',
    price: 12000,
    currency: '$'
  },
  {
    title: 'Mercedes',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629__340.png',
    price: 13000,
    currency: '$'
  },
  {
    title: 'BMW',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2024-bmw-5-series-101-1676576715.jpg?crop=0.819xw:0.645xh;0.127xw,0.355xh&resize=1200:*',
    price: 11000,
    currency: '$'
  },
  {
    title: 'Audi',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2024-audi-rs7-performance-motion-front-2-1669663936.jpg?crop=0.689xw:0.517xh;0.276xw,0.368xh&resize=1200:*',
    price: 12000,
    currency: '$'
  },
  {
    title: 'Mercedes',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629__340.png',
    price: 13000,
    currency: '$'
  }
];

class App extends React.Component {

  render() {
    return (
      React.createElement("div", { className: "App" },
        React.createElement("div", { className: "Container" },
          cars.map((car, index) => (
            React.createElement(Car, { key: index, ...car })
          ))
        ))
    )
  }
}


export default App
