import './songs-list.css';
import Song from '../song/song.js';

import React from 'react';
import Loader from '../loader/loader.js';



export default class SongsList extends React.Component {
    render() {
        const songs = this.props.songs;

        if (songs.length===0){
             return <Loader/>
        }

        return (           
         <div className="songs-container">    
             {
                 songs.map((song) => {
                    return <Song key={song.id} data={song}/>;
                 })
             }
       
          </div>
        );
    }
}