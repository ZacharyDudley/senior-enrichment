import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { fetchStudent, deleteStudent, updateStudent } from '../reducers/studentReducer'
// import { fetchCampus } from '../reducers/campusReducer'

class SingleStudent extends Component {
  constructor(props){
    super(props)
    let id = this.props.match.params.studentId
    this.props.fetchStudent(id)

    this.deleteButton = this.deleteButton.bind(this)
  }

  // componentWillReceiveProps(nextProps){
  //   if (this.props.student.singleStudent !== nextProps.student.singleStudent) {
  //     let schoolId = nextProps.student.singleStudent.campusId
  //     this.props.fetchCampus(schoolId)
  //   }
  // }

  // componentDidMount() {
  //   console.log(this.props)
  //   this.setStudentCampus()
  // }

  // setStudentCampus() {
  //   let schoolId = this.props.student.singleStudent.campusId
  //   this.props.fetchCampus(schoolId)
  // }


  render () {
    console.log(this.props.student.singleStudent.campus)
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
    this.props.deleteStudent(this.props.student.singleStudent.id)
    this.props.history.push('/students');
  }

}

const showLoc = withRouter(SingleStudent)

const mapState = (state) => ({ student: state.student, campus: state.campus })
const mapDispatch = { fetchStudent, deleteStudent, updateStudent }

export default connect(mapState, mapDispatch)(SingleStudent)
