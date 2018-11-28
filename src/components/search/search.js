import React,{Component} from 'react';
import './search.css';



export default class Search extends Component {
    render() {
        return (           
            <div className = "search"> 
            <i className="fa fa-search" aria-hidden="true"/>             
            <input className="input-search"  type="search" placeholder="search"/>                 
            </div>      
        );
    }
}
