import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => (
  <div id="sideBodyBox">
    <div id="logoBox">
      <img id="logo" src="./favicon.ico" />
    </div>
    <div id="sideBody">
      <div id="buttonBox">
        <ul>
          <Link to="/campus">CAMPUSES</Link>
          <Link to="/student">STUDENTS</Link>
        </ul>
      </div>
    </div>
  </div>
)

export default SideBar
