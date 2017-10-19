import axios from 'axios';

const initialState = {
  allStudents: [],
  singleStudent: {}
}

//ACTION TYPES
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'
const SET_STUDENT = 'SET_STUDENT'
const ADD_STUDENT = 'ADD_STUDENT'
const REVISE_STUDENT = 'REVISE_STUDENT'
const DESTROY_STUDENT = 'DESTROY_STUDENT'

//ACTION CREATORS
const getAllStudents = allStudents => ({type: GET_ALL_STUDENTS, allStudents})
const setStudent = student => ({type: SET_STUDENT, student})
const addStudent = student => ({type: ADD_STUDENT, student})
const reviseStudent = student => ({type: REVISE_STUDENT, student})
const destroyStudent = id => ({type: DESTROY_STUDENT, id})

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {

    case GET_ALL_STUDENTS:
      return Object.assign({}, state, {allStudents: action.allStudents})

    case SET_STUDENT:
      return Object.assign({}, state, {singleStudent: action.student})

      case ADD_STUDENT:
      return Object.assign({}, state, {allStudents: [...state.allStudents, action.student]})

      case REVISE_STUDENT:
      return Object.assign({}, state, {allStudents: state.allStudents.map(function (student) {
        if (student.id === action.student.id) {
          return action.student
        }
      })})

      case DESTROY_STUDENT:
        return Object.assign({}, state, {allStudents: state.allStudents.filter(student => {
          return student.id !== +action.id
        })})

     default: return state
  }
}

//THUNKS
export const fetchStudents = () => dispatch => {
  axios.get('/api/students')
    .then(res => dispatch(getAllStudents(res.data)))
}

export const fetchStudent = id => dispatch => {
  axios.get(`/api/students/${id}`)
    .then(res => dispatch(setStudent(res.data)))
}

export const postStudent = student => dispatch => {
  axios.post('/api/students', student)
    .then(res => dispatch(addStudent(res.data)))
}

export const updateStudent = (id, student) => dispatch => {
  axios.put(`/api/students/${id}`, student)
    .then(res => {
      dispatch(reviseStudent(res.data))
      dispatch(setStudent(res.data))
    })
}

export const deleteStudent = id => dispatch => {
  dispatch(destroyStudent(id))
  dispatch(setStudent({}))
  axios.delete(`/api/students/${id}`)
}
