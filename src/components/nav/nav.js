import "./nav.css";
import classNames from "classnames/bind";
import Search from "../search/search.js";
import { NavLink } from "react-router-dom";
import React from "react";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false
    };
  }

  openSerch() {
    this.setState({ isPressed: true });
  }

  render() {
    var navClass = classNames({
      "nav-conteiner": true,
      "nav-conteiner-mob": this.state.isPressed
    });
    var clientIndClass = classNames({
      "client-indif": true,
      "client-indif-mob": this.state.isPressed
    });

    return (
      <div className={navClass}>
        <div class="flex-wrapper">
          <NavLink to="/">
            <i className="fa fa-soundcloud" />
            {/* <h6 id="site-name">SoundCloud</h6> */}
          </NavLink>

          {/* <i className="fa fa-caret-down" onClick={this.openSerch.bind(this)} /> */}
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
        <div class="flex-wrapper">
          <span className={clientIndClass}>Logout</span>
          <Search isVissible={this.state.isPressed} />
        </div>
      </div>
    );
  }
}
