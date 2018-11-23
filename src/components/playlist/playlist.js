import './playlist.css';
import PlaylistSideBarNav from '../playlist-sidebar-nav/playlist-sidebar-nav';
import Playlist from '../each-playlist/each-playlist';
import React, {Component} from 'react';
import {connect} from 'react-redux';

 class  Playlists extends Component {
 createPlaylist(playlists) {
    
      if (playlists) {
        return <ul className="playlists-lists">
          {
            playlists.map((playlist, i) => {
              return <li key={ playlist.id }>
                <Playlist
                  playlist={ playlist }
                  index={ i }
                />
              </li>
            })
          }
        </ul>
      }
      else {
        return <h1 className="no-playlists">Why don't you create some nice playlist?</h1>
      }
    }
    render(){
        const {playlists} = this.props;

        console.log(this.props);
    return (
     
    <div className="playlists-comp-main playlists-comp">
      <PlaylistSideBarNav  playlists={playlists }/>
      <div className="right-playlists">
        { this.createPlaylist(this.props) }
      </div>
    </div>
  );
}
}

function mapStateToProps(stateData) {
  return {
    playlists: stateData.playlists
  }
}
export default connect(mapStateToProps)(Playlists);