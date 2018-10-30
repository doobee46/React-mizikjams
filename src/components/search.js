import React, { Component } from 'react';


class Search extends Component {
  
  render() {
  
    return ( 
      <form className="search"  onKeyDown={this.props.search}>
        <input type="text" name="query"  value={this.props.value} placeholder={"Search song ..."} onChange={this.props.update}/>
      </form>
    );
  }
}
 
export default Search;