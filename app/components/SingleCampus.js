import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCampus } from '../reducers/campusReducer'

class SingleCampus extends Component {
  constructor() {
    super()

  }

  // compo

  render () {
    console.log(this.props.match.params.id)
    return (
      <div>
        <img />
      </div>
    )
  }
}

// const mapState = ({ singleCampus }, ownProps) => {
//   const paramId = Number(ownProps.match.params.id)
// }
// const camp = fetchCampus()

const mapDispatch = { fetchCampus }

export default connect(null, mapDispatch)(SingleCampus)
