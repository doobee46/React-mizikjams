import React, { Component } from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import Search from './search';
import { HeadNav, Nav, NavMenu } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Header extends Component {
  
  render() {
    console.log(this.props) 
    return ( 
      <HeadNav>
        <Nav>
          <Link to='/'>
          <img src={logo} alt="logo"/>
          </Link>
          <Search 
            search={this.props.search} 
            value={this.props.value} 
            update={this.props.update}
            />
          <NavLink to='/browse' className="browse">
            Browse
          </NavLink>
          <NavMenu>
          <FontAwesomeIcon 
          icon="bell"
          color="rgba(255, 255,255, 0.3)"
          size="3x" 
          />
          <FontAwesomeIcon 
          icon="user" 
          color="rgba(255, 255,255, 0.3)"
          size="3x"
          />
          </NavMenu>
        </Nav>
      </HeadNav>
    );
  }
}
 
export default Header ;