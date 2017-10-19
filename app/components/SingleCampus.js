import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { fetchCampus, deleteCampus, updateCampus } from '../reducers/campusReducer'

class SingleCampus extends Component {
  constructor(props){
    super(props)
    this.id = this.props.match.params.campusId
    this.props.fetchCampus(this.id)

    this.submitEdit = this.submitEdit.bind(this)
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('THIS', this.props)
  //   if (this.props.campus.singleCampus.name !== nextProps.campus.singleCampus.name || this.props.campus.singleCampus.image !== nextProps.campus.singleCampus.image) {
  //     console.log('IF')
  //     this.props.fetchCampus(this.id)
  //   }
  // }

  render () {
    return (
      <div>
        <h1>{this.props.campus.singleCampus.name}</h1>
        <img src={this.props.campus.singleCampus.image} />
      { this.alterCampus() }
        <div id="campusStudents">
        <h2>STUDENTS</h2>
        {
          Object.keys(this.props.campus.singleCampus).length && this.renderStudents()
        }
        </div>
      </div>
    )
  }

  renderStudents(){
    console.log('IN RENDER', this.props)
    return this.props.campus.singleCampus.students.map(student => {
      console.log('MAP', student)
      return (
        <div key={student.id}>
          <Link to={`/students/${student.id}`}>
            <h2>{student.name}</h2>
          </Link>
        </div>
      )
    })
  }


  alterCampus () {
    return (
      <div id="alterCampusBox">
        <form name="alterCampusForm" onSubmit={this.submitEdit}>
          <div>
            <input name="campusName" type="text" placeholder="Campus name" />
          </div>
          <div>
            <input name="campusImage" type="text" placeholder="Campus picture URL" />
          </div>
          <button type="submit" name="editCampus">EDIT</button>
          <button type="button" name="deleteCampus" onClick={this.deleteButton}>DELETE</button>
          </form>
      </div>
    )
  }

  submitEdit(event) {
    event.preventDefault()
    let editedCampus = { name: event.target.campusName.value, image: event.target.campusImage.value }
    this.props.updateCampus(this.id, editedCampus)

    event.target.campusName.value = ''
    event.target.campusImage.value = ''


  }

  deleteButton(event) {
    event.preventDefault()
    // this.props.deleteCampus(this.props.campus.singleCampus.campusId)
    this.props.history.push('/campuses');
  }

}

const showLoc = withRouter(SingleCampus)

const mapState = (state) => ({ campus: state.campus })
const mapDispatch = { fetchCampus, deleteCampus, updateCampus }

export default connect(mapState, mapDispatch)(SingleCampus)
