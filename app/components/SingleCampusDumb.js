import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { fetchCampus, deleteCampus, updateCampus } from '../reducers/campusReducer'

const SingleCampus = (props) => {
  let id = props.match.params.campusId
  // let singleCamp = props.fetchCampus(id)
// console.log(singleCamp)
    return (
      <div>
        <h1>{}</h1>
        </div>
      )
    }
    // { this.alterCampus() }
    // <img src={props.campus.singleCampus.image} />

  // alterCampus () {
  //   return (
  //     <div id="alterCampusBox">
  //         <button type="button" name="editCampus" onClick={this.editButton}>EDIT</button>
  //         <button type="button" name="deleteCampus" onClick={this.deleteButton}>DELETE</button>
  //     </div>
  //   )
  // }

  // deleteButton(event) {
  //   event.preventDefault()
  //   this.props.deleteCampus(newCamp)
  // }

// const mapState = (ownProps) => {
//   const paramId = Number(ownProps.match.params.id)
// }
// // const camp = fetchCampus()


const showLoc = withRouter(SingleCampus)

const mapState = (state) => ({ campus: state.campus })
const mapDispatch = { fetchCampus, deleteCampus, updateCampus }

export default connect(mapState, mapDispatch)(SingleCampus)
