import React, { Component } from 'react';
import { Container } from './style';


class Home extends Component {
  state = {  }
  render() { 
    return ( 
      <Container>
      <div className="featured">
        <div className="newsbox">
          <div className="box">
            <div className="boxtext">
            <h2>MIZIKJAMS IS HAITI'S LEADING</h2>
            <h2>ALL-PREMIUM MUSIC VIDEO</h2>
            <h2>AND ENTERTAINMENT </h2>
            <h2>PLATFORM</h2>
            </div>
          </div>
          <div className="box-1">
          <h2>Spotlight</h2>
          </div>
        </div>
        <div className="topvideo">
        <div className="video">
        </div>
        <div className="video">
        </div>
        <div className="video">
        </div>
        <div className="video">
        </div>
        <div className="video">
        </div>
        </div>
      </div>
      </Container>
    );
  }
}
 
export default Home;