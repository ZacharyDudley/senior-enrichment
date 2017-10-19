import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { fetchStudent, deleteStudent, updateStudent } from '../reducers/studentReducer'
// import { fetchCampus } from '../reducers/campusReducer'

class SingleStudent extends Component {
  constructor(props){
    super(props)
    this.id = this.props.match.params.studentId
    this.props.fetchStudent(this.id)

    this.submitEdit = this.submitEdit.bind(this)
    this.deleteButton = this.deleteButton.bind(this)
  }

  render () {
    return (
      <div>
      <h1>{this.props.student.singleStudent.name}</h1>
      {this.props.student.singleStudent.campus && <h3>{this.props.student.singleStudent.campus.name}</h3>}
        <h3>{this.props.student.singleStudent.email}</h3>
      { this.alterStudent() }
      </div>
    )
  }

  alterStudent () {
    return (
      <div id="alterStudentBox">
        <h3>EDIT STUDENT</h3>
        <form name="alterStudentForm" onSubmit={this.submitEdit}>
          <div>
            <input name="studentName" type="text" placeholder="Student name" />
          </div>
          <div>
            <input name="studentImage" type="text" placeholder="Student email address" />
          </div>
          <button type="submit" name="editStudent">EDIT</button>
          </form>
          <button type="button" name="deleteStudent" onClick={this.deleteButton}>DELETE STUDENT</button>
      </div>
    )
  }

  submitEdit(event) {
    event.preventDefault()
    let editedStudent = { name: event.target.studentName.value, image: event.target.studentImage.value }
    this.props.updateStudent(this.id, editedStudent)

    event.target.studentName.value = ''
    event.target.studentImage.value = ''
  }

  deleteButton(event) {
    event.preventDefault()
    this.props.deleteStudent(this.id)
    this.props.history.push('/students');
  }

}

const showLoc = withRouter(SingleStudent)

const mapState = (state) => ({ student: state.student, campus: state.campus })
const mapDispatch = { fetchStudent, deleteStudent, updateStudent }

export default connect(mapState, mapDispatch)(SingleStudent)
