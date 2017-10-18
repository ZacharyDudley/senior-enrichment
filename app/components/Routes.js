import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory'
import Page from './Page';
import SideBar from './SideBar';
import Home from './home';
import CampusMenu from './CampusMenu';
import SingleCampus from './SingleCampus';
import StudentMenu from './StudentMenu';
import SingleStudent from './SingleStudent';
import { fetchStudents } from '../reducers/studentReducer'
import { fetchCampuses } from '../reducers/campusReducer'


class Routes extends Component {
  componentDidMount() {
    this.props.fetchInitialData()
  }

  render() {
    return (
      <Router>
        <div id="mainBox">
          <SideBar />
          <Page>
            <Switch>
                <Route exact path="/campuses" component={CampusMenu} />
                <Route path="/campuses/:campusId" component={SingleCampus} />
                <Route exact path="/students" component={StudentMenu} />
                <Route path="/students/:studentId" component={SingleStudent} />

                <Route component={Home} />
              </Switch>
            </Page>
          </div>
      </Router>
  )}
}

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchCampuses())
    dispatch(fetchStudents())
  }
})

export default connect(null, mapDispatch)(Routes)
