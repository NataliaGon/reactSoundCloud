import React,{Component} from "react";
import classNames from "classnames/bind";
import { connect } from "react-redux";
import uuid from "uuid";
import "./song.css";
import {selectSong,addOrRemoveSongFromPlaylist} from "./song.actions";


class Song extends Component {
  state = {
      heartPressed: false,
      heartColor:false
  };
  
  openDropDown=() =>{
      this.setState({ heartPressed: !this.state.heartPressed });
  }
  checkboxChangeHandler(ev, playlistId) {
    const chechbox = ev.target;

    this.props.addOrRemoveSongFromPlaylist(this.props.data, playlistId, chechbox.checked)
    if(this.isSongInAnyPlaylist()){
      this.setState({ heartColor:true });
    }else{
      this.setState({ heartColor:false});
    }
  }
  
  isSongInPlaylist(playlist) {
    return !!playlist.songs.some(song=>(song.id === this.props.data.id));
   }
   
  isSongInAnyPlaylist() {
    let check;
    this.props.playlists.forEach((playlist)=>{
     check=check||!!this.isSongInPlaylist(playlist);
    })
    return check;
  }

  renderPlayListsTitle() {
    if (this.props.playlists.length > 0) {
      return this.props.playlists.map(playlist => 
         (<label key={uuid()} id={playlist.id}>
            <input
              type="checkbox"
              checked={ this.isSongInPlaylist(playlist)}
              onChange={ev => this.checkboxChangeHandler(ev, playlist.id)}
            />
            {playlist.title}
          </label>
        )
      );
    }
  }
  songTime() {
    const ms = this.props.data.duration;
    let min = Math.floor(ms / 60000);
    let sec = ((ms % 60000) / 1000).toFixed(0);
    if(sec.length<=1){
      sec = sec +'0';
    }
    return min + ':' + sec
  }

  render() {
   const dropdownClass = classNames({
      "dropdown": true,
      "dropdown-open": this.state.heartPressed
    });
    const heartClass = classNames({
      "fa fa-heart": true,
      "blue": this.state.heartColor
    });
    const data = this.props.data;

    return (
      <li className="song-list">
        <div className="song-container">
          <div
            className="song-clip"
            onClick={() => this.props.selectSong(data)}
            style={{ backgroundImage: "url(" + data.artwork_url + ")" }}
          />
          <div className="song-title">{data.title}</div>
          <i className="fa fa-clock-o" /> 
          <p className="song-time">{this.songTime()}</p>
          <i className={heartClass} onClick={this.openDropDown} />
        </div>

        <div className={dropdownClass}>
          <h3>Add to playlist</h3>

          <ul className="playlistTitles">{this.renderPlayListsTitle()}</ul>
          <span>Create playlist</span>
          <hr />
        </div>
      </li>
    );
  }
}

function mapStateToProps(store) {
  return {
    currentSong: store.currentSong,
    playlists: store.playlists.playlists,
    store:store
  };
}

export default connect(
  mapStateToProps,
  {selectSong,
    addOrRemoveSongFromPlaylist}
)(Song);
