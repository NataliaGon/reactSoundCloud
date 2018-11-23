
import React,  {Component } from 'react';
import uuid from "uuid";
import  {connect}  from "react-redux";
import  {addPlaylist}  from './createPlaylist.actions';

import CreatePlayList from '../createPlaylist/createPlaylist';
import './playlist-sidebar-nav.css';


class PlaylistSideBarNav extends Component {
    
  createPlayListsTitle() {
    console.log(this.props.playlists);
    if (this.props.playlists.length > 0) {

      return this.props.playlists.map((playlist) => {
          return <li key={ playlist.id }>
            { playlist.title }
          </li>
        }
      )
    }
  }  
      
    render() {  
      const id = uuid();
      const newPlaylist = {
          id,
          title: 'Untitled',
          isFocusMode: true,
          songs: []
        }
        return (
            <div className="site-bar-container">
                <CreatePlayList onClick={this.props.addPlaylist(newPlaylist)}/>
                <hr />
                <ul>                
                { this.createPlayListsTitle() } 
                </ul>
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