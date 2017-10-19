import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { fetchStudent, deleteStudent, updateStudent } from '../reducers/studentReducer'

class SingleStudent extends Component {
  constructor(props){
    super(props)
    let id = this.props.match.params.studentId
    this.props.fetchStudent(id)
  }


  render () {
        console.log(this.props.student)
    return (
      <div>
        <h1>{this.props.student.singleStudent.name}</h1>
      { this.alterStudent() }
      </div>
    )
  }

  alterStudent () {
    return (
      <div id="alterStudentBox">
          <button type="button" name="editStudent" onClick={this.editButton}>EDIT</button>
          <button type="button" name="deleteStudent" onClick={this.deleteButton}>DELETE</button>
      </div>
    )
  }

  editButton(event) {
    event.preventDefault()

  }

  deleteButton(event) {
    event.preventDefault()
    // this.props.deleteStudent(this.props.student.singleStudent.studentId)
    this.props.history.push('/students');
  }

}

const showLoc = withRouter(SingleStudent)

const mapState = (state) => ({ student: state.student })
const mapDispatch = { fetchStudent, deleteStudent, updateStudent }

export default connect(mapState, mapDispatch)(SingleStudent)
