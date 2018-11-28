import React from 'react';
import { NavLink } from 'react-router-dom';
import './genres.css';


export default class Genres extends React.Component {
    render() {
        return ( 
                <div className= "genres">     
                <span>Genres:</span>
                <ul>                    
                    <li><NavLink to="/Explore/hip-hop">hip-hop</NavLink  ></li>
                    <li><NavLink to="/Explore/house">house</NavLink  ></li>
                    <li><NavLink to="/Explore/rock">rock</NavLink  ></li>
                    <li><NavLink to="/Explore/pop">pop</NavLink  ></li>
                    <li><NavLink to="/Explore/reggaeton">reggaeton</NavLink  ></li>
                    <li><NavLink to="/Explore/dubstep">dubstep</NavLink  ></li>
                </ul>   
                </div>           
        );
    }
}
