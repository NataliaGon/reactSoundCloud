import "./createPlaylist.css";
import {uuid} from "uuid";
import { connect } from "react-redux";
import { addPlaylist } from './createPlaylist.actions';
import {React} from "react";


class createPlaylist extends React.Component {
   
    render() {
        const id = uuid();
        const newPlaylist = {
            id,
            title: 'Untitled',
            isFocusMode: true,
            songs: []
          }
    return (
      <button
        className="add-new-playlist"
        onClick={this.props.addPlaylist(newPlaylist)}
      >
        Add new playlist
      </button>
    );
  }
}
function mapStateToProps(state) {
    return {
     state
    };
  }
  
  
  const mapDispatchToProps = {
    addPlaylist
  };
  

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(createPlaylist);
