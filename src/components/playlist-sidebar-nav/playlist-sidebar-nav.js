import React, { Component } from "react";
import uuid from "uuid";
import { connect } from "react-redux";
import { addPlaylist } from "./createPlaylist.actions";


import "./playlist-sidebar-nav.css";

class PlaylistSideBarNav extends Component {
  renderPlayListsTitle() {
   
    if (this.props.playlists.length > 0) {
      return this.props.playlists.map(playlist => {
        return <li key={uuid()}>{playlist.title}</li>;
      });
    }
  }

  render() {

    const newPlaylist = {
      id:uuid(),
      title: "Untitled",
      isFocusMode: true,
      songs: []
    };
    return (
      <div
        className="site-bar-container">
        <button className="add-new-playlist" onClick={() => this.props.addPlaylist(newPlaylist)}>Add new playlist</button>
        <hr />
        <ul>{this.renderPlayListsTitle()}</ul>
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
  addPlaylist
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistSideBarNav);
