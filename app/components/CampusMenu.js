import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postCampus, fetchCampus } from '../reducers/campusReducer'

class CampusMenu extends Component {
  constructor() {
    super()

    this.submit = this.submit.bind(this)
    // this.setSingleCampus = this.setSingleCampus.bind(this)
  }

  render () {
    // console.log(this.props)

    return (
      <div id="campusListBox">
      {
        this.props.campuses.allCampuses.map(campus => {
          return (
          <Link key={campus.id} to={`/campuses/${campus.id}`} id={campus.id} onClick={(e) => this.setSingleCampus(campus.id, e)}>{campus.name}</Link>
          )
        })
      }
      <div id="submitCampusBox">
        { this.submitNewCampus() }
      </div>
      </div>
    )
  }

  setSingleCampus(id, event) {
    this.props.fetchCampus(id)
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
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    )
  }

  submit(event) {
    event.preventDefault()
    let newCamp = { name: event.target.campusName.value, image: event.target.campusImage.value }
    // !newCamp.name ?
    // console.log('SUBMIT', this.props)
    this.props.postCampus(newCamp)

    event.target.campusName.value = ''
    event.target.campusImage.value = ''
  }


}

const mapState = state => ({ campuses: state.campus })

const mapDispatch = { postCampus, fetchCampus }

export default connect(mapState, mapDispatch)(CampusMenu)
