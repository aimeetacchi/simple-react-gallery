import React, { Component } from 'react';
import Gallery from './Gallery';


let urls = [
  {
    id: 1,
    url: '/img/image1.jpg'
  },
  {
    id: 2,
    url: '/img/image2.jpg'
  },
  {
    id: 3,
    url: 'img/image3.jpg'
  },
  {
    id: 4,
    url: '/img/image4.jpg'
  },
  {
    id: 5,
    url: '/img/image5.jpg'
  }
]

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1> React Image Gallery Component</h1>
        <Gallery imageUrls={urls}></Gallery>
      </div >
    );
  }
}

export default App;
