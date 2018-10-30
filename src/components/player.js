import React, { Component } from 'react';
import ReactJWPlayer from 'react-jw-player';

class Player extends Component {
  constructor(props){
    super(props);
    this.state={
      key:this.props.match.params.key
    }
  }
  render() {
    return (
      <ReactJWPlayer
        aspectRatio="16:9"
        playerId='Mizikjams'
        playerScript='https://content.jwplatform.com/libraries/r7mhaEGG.js'
        file={`http://content.jwplatform.com/videos/${this.state.key}.mp4`}
      />
    );
  }
}

export default Player ;