import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MusicLists from './components/musiclists';
import Player from './components/player'
import { Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import { url } from './components/data';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell, faUser, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faBell, faUser, faPlus, faHeart)

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      songs:[],
      query:''
    }
  }
 
  handleChange = event => {
    this.setState({
        query: event.target.value,
    });
  };

  handleSearch = () =>{
    let search = this.state.query.trim().toLowerCase();
    const songs = this.state.songs
    const arr = songs.filter(song =>{
      return song.title.includes(search);
    })
    this.setState({
      query:'',
      songs:arr
    })
  }

  componentDidMount(){
    axios.defaults.headers.post['crossDomain'] = true;
    axios
    .get(url)
    .then( response => this.setState({
      songs: response.data['videos']
    }))
    .catch(err =>{console.log (err) })
  }

  render(){
  return (
      <>
      <Header
      search={this.handleSearch} 
      value={this.state.query} 
      update={this.handleChange}
      reload={this.handleReload}
      />
      <Route exact path='/' component={Home}/>
      <Route exact path='/browse' render={(props)=><MusicLists {...props} songs ={this.state.songs}/>}/>
      <Route path='/player/:key' render={(props)=><Player {...props} />}/>
      </>
    )
  }
}

export default App;
