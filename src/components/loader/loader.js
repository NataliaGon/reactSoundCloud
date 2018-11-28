import React,{Component} from 'react';
import './loader.css';


export default class Loader extends Component {
        render() {      
        return (
            <div className="loader-wrapper">
                <i className="fa fa-spinner fa-spin fa-3x fa-fw"/>
                <span className="sr-only">Loading...</span>
            </div>
        );
    }        
}