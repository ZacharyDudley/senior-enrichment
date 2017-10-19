import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { fetchCampus, deleteCampus, updateCampus } from '../reducers/campusReducer'

class SingleCampus extends Component {
  constructor(props){
    super(props)
    let id = this.props.match.params.campusId
    this.props.fetchCampus(id)
  }


  render () {
        // console.log(this.props)
    return (
      <div>
        <h1>{this.props.campus.singleCampus.name}</h1>
        <img src={this.props.campus.singleCampus.image} />
      { this.alterCampus() }
      </div>
    )
  }

  alterCampus () {
    return (
      <div id="alterCampusBox">
          <button type="button" name="editCampus" onClick={this.editButton}>EDIT</button>
          <button type="button" name="deleteCampus" onClick={this.deleteButton}>DELETE</button>
      </div>
    )
  }

  editButton(event) {
    event.preventDefault()

  }

  deleteButton(event) {
    event.preventDefault()
    // this.props.deleteCampus(this.props.campus.singleCampus.campusId)
    this.props.history.push('/campuses');
  }

}

const showLoc = withRouter(SingleCampus)

const mapState = (state) => ({ campus: state.campus })
const mapDispatch = { fetchCampus, deleteCampus, updateCampus }

export default connect(mapState, mapDispatch)(SingleCampus)
