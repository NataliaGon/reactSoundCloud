import './loader.css';

import React from 'react';


export default class Loader extends React.Component {
        render() {      
        return (
            <div className="loader-wrapper">
            <i className="fa fa-spinner fa-spin fa-3x fa-fw"/>
            <span className="sr-only">Loading...</span>
            </div>
        );
    }        
}