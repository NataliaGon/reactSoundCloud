import './song.css';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import React from 'react';

class Song extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            heartPressed: false
        }
    }
    openDropDown(){  
        if(this.state.heartPressed==true){ 
               
        this.setState({heartPressed:false}); 
        }
        else{
            this.setState({heartPressed:true});
        }
}    
    render() {
        var dropdownClass = classNames({
            'dropdown': true,
            'dropdown-open': this.state.heartPressed   
       });

       const data=this.props.data;
    //    let styles ='"background-image:url('{data.img}');"'
      console.log(data)
        return (
            <div>
                <div className="song-container" >
                    <div className="song-clip" onClick={() => this.props.selectSong(data)} style={{backgroundImage:"url("+data.artwork_url+")"}} >
                    </div>
                    <div className="song-title">{data.title}</div>
                    <i className="fa fa-clock-o" aria-hidden="true"/>
                    <i className="fa fa-heart" aria-hidden="true" onClick={this.openDropDown.bind(this)}/>
                    
                </div>

                <div className={dropdownClass}>
                    <h3>Add to playlist</h3>
                    <a>Create playlist</a>
                    <hr/>
                </div>
            </div>
        );
    }        
}

function mapStateToProps(store){
    return{
        currentSong: store.currentSong
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectSong(data) {
            dispatch({
                type: "SELECT_SONG",
                song: data
              });
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Song);