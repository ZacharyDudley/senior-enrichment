import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import SideBar from './SideBar';
import CampusMenu from './CampusMenu';
import StudentMenu from './StudentMenu';
import Home from './Home';

const Routes = () => (
    <Router>
      <div>
        <SideBar />

        <Home />

    {/*    <Route path="/campuses" component={CampusMenu} /> */}
    {/*    <Route path="/students" component={StudentMenu} /> */}
    {/*<Route path="/campuses/:campusId" component={SingleCampus} /> */}
    {/*<Route path="/students/:studentId" component={SingleStudent} />*/}
      </div>
    </Router>
  )

export default Routes
