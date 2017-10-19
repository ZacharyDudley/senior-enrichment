import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCampus, deleteCampus, updateCampus } from '../reducers/campusReducer'

class SingleCampus extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.campus.singleCampus.name}</h1>
        <img src={this.props.campus.singleCampus.image}/>
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

  deleteButton(event) {
    event.preventDefault()
    this.props.deleteCampus(newCamp)
  }

}
// const mapState = (ownProps) => {
//   const paramId = Number(ownProps.match.params.id)
// }
// // const camp = fetchCampus()
const mapState = (state, props) => ({ campus: state.campus })
const mapDispatch = { fetchCampus, deleteCampus, updateCampus }

export default connect(mapState, mapDispatch)(SingleCampus)
