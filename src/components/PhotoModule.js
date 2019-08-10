import React from 'react';
import { Container, Col, Row, } from 'react-bootstrap';

const PhotoModule = (props) => {
  const { imgUrl, imgAlt, wide, } = props;

  if (wide) { // handle full width photo module conditional rendering

    return (
      // TODO: JSX component for photo module

      <div className="photo-module-container full-width">Photo Module Container
        <img src={imgUrl} alt={imgAlt} ></img>
      </div>
  );
  } else {
    return (
      <div className="photo-module-container half-width">Photo Module Container
        <img src={imgUrl} alt={imgAlt} ></img>
      </div>
    );
  }
};

export default PhotoModule;
