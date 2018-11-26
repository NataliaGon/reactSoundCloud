import './footer-player.css';
import { connect } from 'react-redux';
import React from 'react';

class FooterPlayer extends React.Component {
        render() { 
            const song = this.props.currentSong.currentSong;

            if (!song){
                return <div/>;
            } 

            const streamUrl =`https://api.soundcloud.com/tracks/${song.id}/stream`;
            const songUrl= ` ${streamUrl}?client_id=jHIO7kur07kyRKwzce6Ol52j1My6zV0L`;

            console.log(this.props.currentSong);

        return (
            <div>
                <audio src={songUrl}
                       controls
                       autoPlay/>            
            </div>
        );
    }        
}

function mapStateToProps(store){
    return{
        currentSong: store.currentSong
    }
}

export default connect(mapStateToProps)(FooterPlayer);
