import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postStudent, fetchStudents } from '../reducers/studentReducer'

class StudentMenu extends Component {
  constructor(props) {
    super(props)
    this.props.fetchStudents()
    this.submit = this.submit.bind(this)
  }

  render () {
    return (
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
    )
  }

  submitNewStudent () {
    return (
      <div id="newStudentBox">
        <form name="newStudent" onSubmit={this.submit}>
        <div>
          <input name="studentName" type="text" placeholder="Student name" />
          </div>
          <div>
          <input name="studentEmail" type="text" placeholder="Email address" />
          </div>
          <button type="submit" />
        </form>
      </div>
    )
  }

  submit(event) {
    event.preventDefault()
    let newStud = { name: event.target.studentName.value, image: event.target.studentEmail.value }
    // !newStud.name ?
    // console.log('SUBMIT', this.props)
    this.props.postStudent(newStud)

    event.target.studentName.value = ''
    event.target.studentEmail.value = ''
  }


}

const mapState = (state) => ({ students: state.student })

const mapDispatch = { postStudent, fetchStudents }

export default connect(mapState, mapDispatch)(StudentMenu)
