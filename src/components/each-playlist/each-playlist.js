import React, { Component } from "react";
import { connect } from "react-redux";
import "./each-playlist.css";
import {
  deletePlaylist,
  changeTitle
} from "./each-playlist.actions";
import Song from "../song/song.js";

class Playlist extends Component {

state={
  isNameHidden: false,
  isInputeHidden: true
}

  componentDidUpdate() {
    if (this.textInput) {
      this.focus();
    }
  }
  componentDidMount() {
    if (this.textInput) {
      this.focus();
    }
  }
  focus = () => {
    this.textInput.focus();
  };

  renderSongs() {
    const songs = this.props.playlist.songs;
    if (songs.length) {
      return (
        <ul className="songs-container">
          {songs.map(song => (
            <Song key={song.id} data={song} />
          ))}
        </ul>
      );
    }
  }
  toogleSpanInput(){
      this.setState({isNameHidden:!this.state.isNameHidden});
      this.setState({isInputeHidden:!this.state.isInputeHidden});
  }

  render() {
    const { id, title} = this.props.playlist;
    
    const spanClass = "playlist-title"+ (this.state.isNameHidden ? " hidden" : "");
    const inputClass = "playlist-input" +(this.state.isInputeHidden ? " hidden": "");

    return (
      <div className="one-playlist-object">
        <div className="playlist-title-container">
          <span
            className={spanClass}
            onClick={() => this.toogleSpanInput()}
          >
            {title}
          </span>
          <input
            className={inputClass}
            type="text"
            defaultValue={title}
            onClick={() => this.toogleSpanInput()}
            ref={input => {
              this.textInput = input;
            }}
            onBlur={() => {
              this.props.changeTitle(this.textInput.value,id);
              this.toogleSpanInput();
            }}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                this.textInput.blur();
              }
            }}
          />
        </div>
        <button
          className="delete-playlist-btn"
          onClick={() => this.props.deletePlaylist(id)}
        >
          Delete
        </button>
        {this.renderSongs()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(
  mapStateToProps,
  {deletePlaylist,changeTitle}
)(Playlist);
