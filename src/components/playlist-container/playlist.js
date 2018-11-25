import "./playlist.css";
import PlaylistSideBarNav from "../playlist-sidebar-nav/playlist-sidebar-nav";
import uuid from "uuid";
import Playlist from "../each-playlist/each-playlist";
import React, { Component } from "react";
import { connect } from "react-redux";


class Playlists extends Component {
  renderPlaylist(playlists) {
    if (playlists.length>0) {
      return (
        <ul className="playlists-lists">
          {playlists.map((playlist) => {
            return (    
              <Playlist playlist={playlist} id={playlist.id} key={uuid()} />
            );
          })}
        </ul>
      );
    } else {
      return (
        <h1 className="no-playlists">
          Why don't you create some nice playlist?
        </h1>
      );
    }
  }
  render() {
    const { playlists } = this.props;
    return (
      <div className="playlists-comp-main playlists-comp">
     
        <PlaylistSideBarNav playlists={playlists} />
        
        <div className="right-playlists">   
          {this.renderPlaylist(playlists)}
        </div>
      </div>
    );
  }
}
function mapStateToProps({ playlists }) {
  return playlists;
}
export default connect(mapStateToProps)(Playlists);
