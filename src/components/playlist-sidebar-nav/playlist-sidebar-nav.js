
import React, { Component } from 'react';

import { connect } from 'react-redux';
import CreatePlayList from '../createPlaylist/createPlaylist';
import './playlist-sidebar-nav.css';


class PlaylistSideBarNav extends Component {
    
  createPlayListsTitle() {
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
         
        return (
            <div className="site-bar-container">
                <CreatePlayList/>
                <hr />
                <ul>                
                { this.createPlayListsTitle() } 
                </ul>
            </div>
        );
    }
}
function mapStateToProps(stateData) {
    return {
   
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
     
      
   
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(PlaylistSideBarNav);