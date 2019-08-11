import React from 'react';
import PhotoModule from './PhotoModule';
import TextModule from './TextModule';
import Carousel from './Carousel';
import Footer from './Footer';
import NavBar from './NavBar';
import 'bootstrap';

import imgHero from '../../front-end-dev-test-assets/hero.jpg';
import imgRocks from '../../front-end-dev-test-assets/img-1.jpg';
import imgBanner1 from '../../front-end-dev-test-assets/banner-1.jpg';
import imgBanner2 from '../../front-end-dev-test-assets/banner-2.jpg';

import { Container, Row, Col, } from 'react-bootstrap';
import IconModule from './IconModule';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      totalModuleCount: 7,
    }
  }

  render () {
    return (
      <Container fluid={true} >
        <PhotoModule imgUrl={imgHero} imgAlt={'hero.jpg'} wide={true} />
        <PhotoModule imgUrl={imgRocks} imgAlt={'rocks.jpg'} wide={false} />
        <PhotoModule imgUrl={imgBanner1} imgAlt={'banner-1.jpg'} wide={true} />
        <IconModule />
        <PhotoModule imgUrl={imgBanner2} imgAlt={'banner-2.jpg'} wide={true} />
        <Carousel />
        <Footer />
      </Container>
    );
  }
};

export default App;
