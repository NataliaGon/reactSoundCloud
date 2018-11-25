import React, { Component } from "react";
import { connect } from "react-redux";
import "./each-playlist.css";
import { deletePlaylist, toogleSpanInput,changeTitle } from "./each-playlist.actions";

class Playlist extends Component {
    constructor() {
        super();
        this.focus = this.focus.bind(this);
      }
    componentDidUpdate() {
        if (this.textInput) {
          this.focus()
        }
      }
      componentDidMount() {
        if (this.textInput) {
          this.focus()
        }
      }
      focus() {
        this.textInput.focus();
      }
    
  render() {

    const { id, title, isNameHidden, isInputeHidden } = this.props.playlist;
    const spanClass = isNameHidden ? "playlist-title hidden" : "playlist-title";
    const inputClass = isInputeHidden
      ? "playlist-input hidden"
      : "playlist-input";

      
    return (
      <div className="one-playlist-object">
        <div className="playlist-title-container">
          <span
            className={spanClass}
            onClick={() => this.props.toogleSpanInput(id)}
          >
            {title}
          </span>
          <input
            className={inputClass}
            type="text"
            onClick={() => this.props.toogleSpanInput(id)}
            ref={input=>{this.textInput=input}}
            onBlur={() => {
                this.props.changeTitle(this.textInput.value,id);
                this.props.toogleSpanInput(id);
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  this.textInput.blur()
                }
              }}
          ></input>
        </div>
        <span
          className="delete-playlist-btn"
          onClick={() => this.props.deletePlaylist(id)}
        >
          Delete
        </span>

        <span className="playlist-nav-span" />
        <div className="container-for-songs-in-playlist" />
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
  deletePlaylist,
  toogleSpanInput,
  changeTitle
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
