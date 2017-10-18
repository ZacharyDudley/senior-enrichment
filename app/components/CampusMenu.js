import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postCampus } from '../reducers/campusReducer'

class CampusMenu extends Component {
  constructor() {
    super()

    this.submit = this.submit.bind(this)
  }

  render () {
    return (
      <div id="campusListBox">
      {
        this.props.campuses.allCampuses.map(campus => {
          return (
          <Link key={campus.id} to={`/campuses/${campus.id}`}>{campus.name}</Link>
          )
        })
      }
      <div id="submitCampusBox">
        { this.submitNewCampus() }
      </div>
      </div>
    )
  }

  submitNewCampus () {
    return (
      <div id="newCampusBox">
        <form name="newCampus" onSubmit={this.submit}>
        <div>
          <input name="campusName" type="text" placeholder="Campus name" />
          </div>
          <div>
          <input name="campusImage" type="text" placeholder="Campus picture URL" />
          </div>
          <button type="submit" />
        </form>
      </div>
    )
  }

  submit(event) {
    event.preventDefault()
    let newCamp = { name: event.target.campusName.value, image: event.target.campusImage.value }
    this.props.postCampus(newCamp)

    event.target.campusName.value = ''
    event.target.campusImage.value = ''
  }
}

const mapState = (state) => ({ campuses: state.campus })

const mapDispatch = { postCampus }

export default connect(mapState, mapDispatch)(CampusMenu)
