import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from './comp/Card.js';
class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Card/>
            <Card/>
            <Card/>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
