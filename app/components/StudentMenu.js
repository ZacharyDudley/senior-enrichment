import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postStudent, fetchStudents } from '../reducers/studentReducer'

class StudentMenu extends Component {
  constructor(props) {
    super(props)
    this.props.fetchStudents()
    this.submit = this.submit.bind(this)
    this.activateButton = this.activateButton.bind(this)
  }

  render () {
    return (
      <div>
      <h1>ALL STUDENTS</h1>
      <div id="studentListBox">
      {
        this.props.students.allStudents.map(student => {
          return (
          <Link key={student.id} to={`/students/${student.id}`}>{student.name}</Link>
          )
        })
      }
      <div id="submitStudentBox">
        { this.submitNewStudent() }
      </div>
      </div>
      </div>
    )
  }

  submitNewStudent () {
    return (
      <div id="newStudentBox">
        <h3>CREATE NEW STUDENT</h3>
        <form name="newStudent" onSubmit={this.submit}>
        <div>
          <input id="studentName" name="studentName" type="text" placeholder="Student name" onChange={this.activateButton} />
          </div>
          <div>
          <input name="studentEmail" type="text" placeholder="Email address" />
          </div>
            <select id="studentCampusSelect" name="studentCampusSelect" onChange={this.activateButton}>
            <option value="" disabled selected hidden>Select a campus</option>
            {
              this.props.campuses.allCampuses.map( camp => {
                return (
                  <option key={camp.id} value={camp.id}>
                  {camp.name}
                  </option>
                )
              })
            }
            </select>
            <button id="buttonCreateStudent" type="submit" disabled="true">CREATE</button>
            </form>
      </div>
    )
  }

  submit(event) {
    event.preventDefault()
    console.log(event)
    let newStud = { name: event.target.studentName.value, image: event.target.studentEmail.value, campusId: event.target.studentCampusSelect.value}
    this.props.postStudent(newStud)

    event.target.studentName.value = ''
    event.target.studentEmail.value = ''
    event.target.studentCampusSelect.value = ''
  }

  activateButton() {
    let studentName = document.getElementById('studentName')
    let campusSelect = document.getElementById('studentCampusSelect')
    let createButton = document.getElementById('buttonCreateStudent')

    if (studentName.value && campusSelect.value) {
      createButton.disabled = false
    }
  }

}

const mapState = (state) => ({ students: state.student, campuses: state.campus })

const mapDispatch = { postStudent, fetchStudents }

export default connect(mapState, mapDispatch)(StudentMenu)
