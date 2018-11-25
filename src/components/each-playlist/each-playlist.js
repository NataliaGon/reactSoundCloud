import React, { Component } from "react";
import { connect } from "react-redux";
import "./each-playlist.css";
import { deletePlaylist } from "./each-playlist.actions";

class Playlist extends Component {
    render() {    
      const {id}=this.props.playlist;
      
      return (     
        <div className="one-playlist-object" >
        <div className="playlist-title">
        <span className ="delete-playlist-btn" onClick={() =>   this.props.deletePlaylist(id)  }  >Delete</span>
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
    deletePlaylist
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Playlist);



