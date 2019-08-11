import React from 'react';
import { Col, Row, } from 'react-bootstrap';
import TextModule from './TextModule';

const PhotoModule = (props) => {
  const { imgUrl, imgAlt, wide, } = props;

  if (wide) { // handle full width photo module conditional rendering
    return (
      <Row>
        <Col>
          <img src={imgUrl} alt={imgAlt} ></img>
        </Col>
      </Row>
    );
  } else {
    return (
      <Row>
        <TextModule />
        <Col>
          <img src={imgUrl} alt={imgAlt} ></img>
        </Col>
      </Row>
    );
  };
};

export default PhotoModule;
