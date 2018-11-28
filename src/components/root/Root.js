import React from 'react';
import {  
  Route, 
  Switch,
  Redirect
} from 'react-router-dom';
import Nav from '../nav/nav.js';
import Explore from '../explore/explore.js';
import Playlist from '../playlist-container/playlist.js';
import FooterPlayer from '../footer-player/footer-player.js';



export default function Root() {

  return (
    <div>
      <Nav />
      <Switch>
        <Redirect exact from ='/' to = '/Explore'/>
        <Redirect exact from ='/Explore' to = '/Explore/hip-hop'/>
        <Route path="/Explore/:genre" component={Explore} />
        <Route path="/Playlist" component={Playlist} />
      </Switch>
      <FooterPlayer/>
    </div>
  );
};





