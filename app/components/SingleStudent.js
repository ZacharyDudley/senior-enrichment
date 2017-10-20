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
      <div id="studentInfo">
      {this.props.student.singleStudent.campus && <h3>{this.props.student.singleStudent.campus.name}</h3>}
        <h3>{this.props.student.singleStudent.email}</h3>
      </div>
      { this.alterStudent() }
      </div>
    )
  }

  alterStudent () {
    return (
      <div className="alterBox">
        <h3>EDIT STUDENT</h3>
        <form name="alterStudentForm" onSubmit={this.submitEdit}>
          <div>
            <input name="studentName" type="text" placeholder="Student name" />
          </div>
          <div>
            <input name="studentImage" type="text" placeholder="Student email address" />
          </div>
{
          // <select id="studentCampusSelect" name="studentCampusSelect" onChange={this.activateButton}>
          // <option value="" disabled selected hidden>Select a campus</option>
          // {
          //   this.props.campus.allCampuses.map( camp => {
          //     return (
          //       <option key={camp.id} value={camp.id}>
          //       {camp.name}
          //       </option>
          //     )
          //   })
          // }
          // </select>
        }
          <button className="submitButton" type="submit" name="editStudent">EDIT</button>
          </form>
          <button type="button" name="deleteStudent" onClick={this.deleteButton}>DELETE STUDENT</button>
      </div>
    )
  }

  submitEdit(event) {
    event.preventDefault()
    let editedStudent = { name: event.target.studentName.value, image: event.target.studentImage.value,
      // campusId: event.target.studentCampusSelect.value
    }
    this.props.updateStudent(this.id, editedStudent)

    event.target.studentName.value = ''
    event.target.studentImage.value = ''
    // event.target.studentCampusSelect.value = ''
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
