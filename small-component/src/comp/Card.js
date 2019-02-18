import React from 'react';
import './css/card.css';
import Col from 'react-bootstrap/Col';
const Card = (props) => {
  return (
    <div>
    <Col xs={6} className="mySpace">
      <div className="myCard">
        <div className="myImg"></div>
      </div>
      <div className="myContainer">
        <h4 className="myHeading">Cat</h4>
        <hr/>
        <p className="myParagraph">Surely we will get there!</p>
        <a href="#" className="myWatermark">DoIt.io</a>
      </div>
        <div className="myDetails">
          <p className="myText">Angry Cat</p>
          <div className="myAvatar"></div>
        </div>
        <div className="myLogo"></div>
      </Col>
    </div>
  );
};

export default Card;
