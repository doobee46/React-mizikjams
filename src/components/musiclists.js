import React, { Component } from 'react';
import Music  from "./music";
import { Container,Wrapper } from'./style'

class MusicLists extends Component {

  render() {
    return ( 
      <Container>
      <h2 className="main">Library</h2>
      <Wrapper>
      {this.props.songs.map(song =>{
      return[
      <Music key={song.key} song={song}/>
      ]
      })
      }
      </Wrapper>
      </Container>
    );
  }
}

export default MusicLists;