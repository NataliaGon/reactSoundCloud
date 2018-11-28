import React, {Component} from "react";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import "./nav.css";
import Search from "../search/search.js";


export default class Nav extends Component {
 state = {
      isPressed: false
  };
 
  render() {
    const navClass = classNames({
      "nav-conteiner": true,
      "nav-conteiner-mob": this.state.isPressed
    });
    const clientIndClass = classNames({
      "client-indif": true,
      "client-indif-mob": this.state.isPressed
    });

    return (
      <div className={navClass}>
        <div className="flex-wrapper">
          <NavLink to="/">
            <i className="fa fa-soundcloud" />
          </NavLink>
          <ul>
            <li>
              <NavLink to="/Explore" activeClassName="selected">
                Explore
              </NavLink>
            </li>
            <li>
              <NavLink to="/Playlist" activeClassName="selected">
                Playlist
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-wrapper">
          <span className={clientIndClass}>Logout</span>
          <Search isVissible={this.state.isPressed} />
        </div>
      </div>
    );
  }
}
