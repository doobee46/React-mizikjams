import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { songInfo } from './helpers';
import { Video, Songinfo, Poster  } from './style';
import { handleMissing } from './helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Music extends Component {
  render(){
    const { key, title, custom } = this.props.song
    return ( 
      <Video>
        <Link to={`/player/${key}`}>
        <Poster src ={handleMissing(custom['poster'])} alt="poster"/>
        </Link>
        <Songinfo>
        <h2>{songInfo(title, "title")}</h2>
        <h3>{songInfo(title,"band")}</h3>
        </Songinfo>
      </Video>
    );
  }
}

export default Music;