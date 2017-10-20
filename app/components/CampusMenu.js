import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postCampus, fetchCampus } from '../reducers/campusReducer'

class CampusMenu extends Component {
  constructor() {
    super()

    this.submit = this.submit.bind(this)
    this.activateButton = this.activateButton.bind(this)
  }

  render () {
    return (
      <div>
      <h1>ALL CAMPUSES</h1>
      <ul id="campusListBox">
      {
        this.props.campuses.allCampuses.map(campus => {
          return (
          <Link key={campus.id} to={`/campuses/${campus.id}`}>{campus.name}</Link>
          )
        })
      }
      </ul>

      <div id="submitCampusBox">
        { this.submitNewCampus() }
      </div>
      </div>
    )
  }

  submitNewCampus () {
    return (
      <div id="newCampusBox">
        <h3>CREATE NEW CAMPUS</h3>
        <form name="newCampusForm" onSubmit={this.submit}>
        <div>
          <input id="campusName" name="campusName" type="text" placeholder="Campus name" onChange={this.activateButton} />
          </div>
          <div>
          <input name="campusImage" type="text" placeholder="Campus picture URL" />
          </div>
          <button id="buttonCreateCampus" type="submit" disabled="true">CREATE</button>
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

  activateButton() {
    let campusName = document.getElementById('campusName')
    let createButton = document.getElementById('buttonCreateCampus')

    if (campusName.value) {
      createButton.disabled = false
    } else {
      createButton.disabled = true
    }
  }

}

const mapState = state => ({ campuses: state.campus })

const mapDispatch = { postCampus, fetchCampus }

export default connect(mapState, mapDispatch)(CampusMenu)
