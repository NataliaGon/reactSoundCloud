import './nav.css';
import classNames from 'classnames/bind';
import Search from '../search/search.js';
import { NavLink } from 'react-router-dom';
import React from 'react';

export default class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPressed: false
        }
    }

    openSerch() {
        this.setState({ isPressed: true });
    }

    render() {
        var navClass = classNames({
            'nav-conteiner': true,
            'nav-conteiner-mob': this.state.isPressed
        });
        var clientIndClass = classNames({
            'client-indif': true,
            'client-indif-mob': this.state.isPressed
        });


        return (
            <div className={navClass}>

                <NavLink to="/">
                    <i className="fa fa-soundcloud" aria-hidden="true" />
                    <h6 id="site-name">SoundCloud</h6>
                </NavLink>

                
                <i className="fa fa-caret-down" aria-hidden="true" onClick={this.openSerch.bind(this)} />
                <ul>
                    <li><NavLink to="/Explore" activeClassName="selected" >Explore</NavLink></li>
                    <li><NavLink to="/Playlist" activeClassName="selected" >Playlist</NavLink></li>
                </ul>
                <a className={clientIndClass} >Logout</a>
                <Search isVissible={this.state.isPressed}/>
            </div>
        );
    }
}


