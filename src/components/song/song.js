import React from "react";
import classNames from "classnames/bind";
import { connect } from "react-redux";
import uuid from "uuid";
import "./song.css";
import {selectSong,addOrRemoveSongFromPlaylist} from "./song.actions";



class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heartPressed: false
    };
  }
  openDropDown() {
    if (this.state.heartPressed) {
      this.setState({ heartPressed: false });
    } else {
      this.setState({ heartPressed: true });
    }
  }
  checkboxChangeHandler(ev, playlistId) {
    const chechbox = ev.target;
    
    this.props.addOrRemoveSongFromPlaylist(this.props.data, playlistId, chechbox.checked)
  }
  isSongInAnyPlaylist() {

    for (const playlist of this.props.playlists) {
      for (const song of playlist.songs) {
        if (song.id === this.props.song.id) {
          return true;
        }
      }
    }
    return false;
  }
  isSongInPlaylist(playlist) {

    for (const song of playlist.songs) {
      if (song.id === this.props.data.id) {
        return true
      }
    }

    return false
  }

  renderPlayListsTitle() {
    if (this.props.playlists.length > 0) {
      return this.props.playlists.map(playlist => {
        return (
          <label key={uuid()} id={playlist.id}>
            <input
              type="checkbox"
              checked={ this.isSongInPlaylist(playlist)}
              onChange={ev => this.checkboxChangeHandler(ev, playlist.id)}
            />
            {playlist.title}
          </label>
        );
      });
    }
  }

  render() {
    var dropdownClass = classNames({
      dropdown: true,
      "dropdown-open": this.state.heartPressed
    });

    const data = this.props.data;

    return (
      <div id={uuid()}>
        <div className="song-container">
          <div
            className="song-clip"
            onClick={() => this.props.selectSong(data)}
            style={{ backgroundImage: "url(" + data.artwork_url + ")" }}
          />
          <div className="song-title">{data.title}</div>
          <i className="fa fa-clock-o" />
          <i className="fa fa-heart" onClick={this.openDropDown.bind(this)} />
        </div>

        <div className={dropdownClass}>
          <h3>Add to playlist</h3>

          <ul className="playlistTitles">{this.renderPlayListsTitle()}</ul>
          <span>Create playlist</span>
          <hr />
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    currentSong: store.currentSong,
    playlists: store.playlists.playlists
  };
}


const mapDispatchToProps = {
    selectSong,
    addOrRemoveSongFromPlaylist
  };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Song);
