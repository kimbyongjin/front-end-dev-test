import React from 'react';
import faker from 'faker';

import { Container, Col, Row } from 'react-bootstrap';

const TextModule = () => {
  const loremTitle = faker.lorem.word();
  const loremParagraph = faker.lorem.paragraph();

  return (
    <Col className="text-module-container">
      <Container>
        <Row>
          <Col lg="4"></Col>
          <Col lg="7">
            <h1 className="lorem-title"><b>{`${loremTitle.toUpperCase()}`}</b></h1>
          </Col>
          <Col lg="1"></Col>
        </Row>
        <Row>
        <Col lg="4"></Col>
          <Col lg="7">
            <div className="lorem-text">{`${loremParagraph} ${loremParagraph}`}</div>
          </Col>
          <Col lg="1"></Col>
        </Row>
        <Row>
        <Col lg="4"></Col>
          <Col lg="7">
            <a href="localhost:8080" className="lorem-link"><h4>{`> ${loremTitle}`}</h4></a>
          </Col>
          <Col lg="1"></Col>
        </Row>
      </Container>
    </Col>
  );
};

export default TextModule;
