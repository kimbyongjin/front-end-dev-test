import React from 'react';
import { Col, Row, } from 'react-bootstrap';
import TextModule from './TextModule';
import Icon from './Icon';

const IconModule = () => {

  return (
    // TODO create module for aside block containing icons w/ animations
    <Row>
      <TextModule />
      <Col>
        <Row>
          <Icon />
          {/* top row of icons */}
        </Row>
        <Row>
          {/* bottom row of icons */}
        </Row>
      </Col>
    </Row>
  );
};

export default IconModule;
