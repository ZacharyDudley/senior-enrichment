import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const StudentMenu = (props) => {
  console.log(props)
    return (
      <div>
      {
        props.students.map(student => {
          return (
          <Link key={student.id} to={`/students/${student.id}`} >{student.name}</Link>
          )
        })
      }
      </div>
    )
}

const mapState = ({ students }) => ({ students })

export default connect(mapState)(StudentMenu)
