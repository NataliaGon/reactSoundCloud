import './playlist-sidebar-nav.css';
import uuid from 'uuid';
import { connect } from 'react-redux';
import React from 'react';

class PlaylistSideBarNav extends React.Component {
    
        constructor(props) {
            super();
            this.state = {};        
            this.handelCreateNewPlaylist = this.handelCreateNewPlaylist.bind(this);
            
          }

          handelCreateNewPlaylist() {
            const id = uuid();
            const newPlaylist = {
              id,
              title: 'Untitled',
              isFocusMode: true,
              songs: []
            };
            // this.props.updateFocusedPlaylist(newPlaylist.id);            
            this.props.createNewPlaylist(newPlaylist);
          }
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
                <button className="add-new-playlist" onClick={() => this.handelCreateNewPlaylist() }> Add new playlist </button>
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
      playlists: stateData.playlists
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      createNewPlaylist(newPlaylist){
        dispatch({
          type: 'CREATE_NEW_PLAYLIST',
          newPlaylist
        });
      },
      // updateFocusedPlaylist(newPlaylist){      
      //   dispatch({
      //     type: 'UPDATE_CURRENT_PLAYLIST',
      //     newPlaylist
      //   });
      // }
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(PlaylistSideBarNav);