import React, {Component} from 'react';
import './explore.css';
import Genres from '../genres/genres.js';
import SongsList from '../songs-list/songs-list.js';


export default class Explore extends Component {
        state = {
            songs: []
        }

    componentWillMount() {
        const genre = this.props.match.params.genre;// анализ по url
        this.getSong(genre);
    }//Компонент будет отрисован

    componentWillReceiveProps() {
        const genre = this.props.match.params.genre;
        this.getSong(genre);
    }//компонент получает новый props

    dataHandler=(event)=> {
        const data = JSON.parse(event.target.responseText);//response - объект DOM содержащий получ. инфо
        this.setState({
            songs: data
        });
    }
    
    getSong(genre) {
        const url = `https://api.soundcloud.com/tracks?client_id=jHIO7kur07kyRKwzce6Ol52j1My6zV0L&limit=15&offset=0&tags=${genre}`;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', this.dataHandler);
        xhr.send();
    }

    render() {
        const genre = this.props.match.params.genre;
        return (
            <main>
                <Genres />
                <h2 id="title-genres">Genres: {genre}</h2>
                <SongsList songs={this.state.songs} />
            </main>
        );
    }
}