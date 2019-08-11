import React from 'react';
import faker from 'faker';

import { Container, Col, Row } from 'react-bootstrap';

const TextModule = () => {
  const loremParagraphs = faker.lorem.paragraphs();

  return (
    <Col className="text-module-container">
      <Container>
        <Row>
          <Col lg="4"></Col>
          <Col lg="7">
            <h1 className="lorem-title">LOREM IPSUM</h1>
          </Col>
          <Col lg="1"></Col>
        </Row>
        <Row>
        <Col lg="4"></Col>
          <Col lg="7">
            <div className="lorem-text">{loremParagraphs}</div>
          </Col>
          <Col lg="1"></Col>
        </Row>
        <Row>
        <Col lg="4"></Col>
          <Col lg="7">
            <a href="localhost:8080" className="lorem-link"><h4>> Lorem Ipsum</h4></a>
          </Col>
          <Col lg="1"></Col>
        </Row>
      </Container>
    </Col>
  );
};

export default TextModule;
