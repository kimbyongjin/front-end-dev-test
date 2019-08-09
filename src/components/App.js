import React from 'react';
import PhotoModule from './PhotoModule';
import TextModule from './TextModule';
import Carousel from './Carousel';
import Footer from './Footer';
import NavBar from './NavBar';
import 'bootstrap';

import imgHero from '../../front-end-dev-test-assets/hero.jpg';
import imgRocks from '../../front-end-dev-test-assets/img-1.jpg';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      totalModuleCount: 7,
    }
  }

  render () {
    return (
      <div className="app-container">App Container
        <NavBar />
        <PhotoModule imgUrl={imgHero} imgAlt={'hero.jpg'} />
        <div className="row">
          <TextModule className="col-md-6" />
          <PhotoModule className="col-md-6" imgUrl={imgRocks} imgAlt={'rocks.jpg'} />
        </div>
        <TextModule />
        <Carousel />
        <Footer />
      </div>
    );
  }
};

export default App;
