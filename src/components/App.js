import React from 'react';
import PhotoModule from './PhotoModule';
import TextModule from './TextModule';
import Carousel from './Carousel';
import Footer from './Footer';

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
        <PhotoModule />
        <TextModule />
        <Carousel />
        <Footer />
      </div>
    );
  }
};

export default App;
