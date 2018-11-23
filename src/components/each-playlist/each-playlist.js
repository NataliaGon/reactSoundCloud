import React, { Component } from "react";

import { connect } from "react-redux";

import "./each-playlist.css";

class Playlist extends Component {
 
  
    render() {
        const{ title, id }=this.props;
      return (
        <div className="one-playlist-object" key={id}>
        <div className="playlist-title">{title} 
        <span className ="delete-playlist-btn" >Delete</span>
        </div>
        <input  className="playlist-input" ></input>
        <span  className ="playlist-nav-span" ></span>
        
    
       <div className="container-for-songs-in-playlist">
        </div>
        </div>   
      );
    }
  }
  function mapStateToProps(state) {
    return {
      state
    };
  }
  
  const mapDispatchToProps = {
   
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Playlist);
  