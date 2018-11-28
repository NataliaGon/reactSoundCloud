import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import "./playlist.css";
import PlaylistSideBarNav from "../playlist-sidebar-nav/playlist-sidebar-nav";
import Playlist from "../each-playlist/each-playlist";


class Playlists extends Component {
  renderPlaylist(playlists) {
    if (playlists.length) {
      return (
        <div className="playlists-lists">
          {playlists.map(playlist =>(<Playlist playlist={playlist} id={playlist.id} key={uuid()} />))}
        </div>
      );
    } 
      return (
        <h1 className="no-playlists">
          Why don't you create some nice playlist?
        </h1>
      );
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
