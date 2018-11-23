import './search.css';

import React from 'react';
// import isPressed from './nav.js'


export default class Search extends React.Component {
//    if (this.prop.isVissible===true){

//    }
    render() {
        return (           
            <div className = "search"> 
            <i className="fa fa-search" aria-hidden="true"/>             
            <input className="input-search"  type="search" placeholder="search"/>                 
            </div>      
        );
    }
}
