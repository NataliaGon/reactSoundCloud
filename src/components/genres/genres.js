import './genres.css';
import { NavLink } from 'react-router-dom';

import React from 'react';

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
                <i className="fa fa-bars" aria-hidden="true" onClick={this.openMenu.bind(this)}/>
               
                </div>
                
                       
        );
        
    }
    openMenu(){
        console.log('123');
    }
}
