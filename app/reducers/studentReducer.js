import axios from 'axios';

const initialState = {
  students: [],
  student: {}
}

const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'
const GET_STUDENT_BY_ID = 'GET_STUDENT_BY_ID'
const POST_STUDENT = 'POST_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'

export function getAllStudents () {
  return {
    type: GET_ALL_STUDENTS,
  }
}

export function getStudentById (studentId) {
  return {
    type: GET_STUDENT_BY_ID,

  }
}

export function postStudent () {
  return {
    type: POST_STUDENT,
  }
}

export function updateStudent (campusId) {
  return {
    type: UPDATE_STUDENT,
  }
}

export function deleteStudent (campusId) {
  return {
    type: DELETE_STUDENT,
  }
}

//THUNKS
export function fetchStudents () {
  return function thunk (dispatch) {
    return axios.get('/api/student')
      .then(res => res.data)
      .then(students => {
        dispatch(getAllStudents(students))
      })
  }
}

export function postNewStudent (student) {
  return function thunk (dispatch) {
    return axios.post('/api/student', student)
      .then(res => res.data)
      .then(newStudent => {
        dispatch(getStudentById(newStudent))
      })
  }
}


//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {

    case GET_ALL_STUDENTS:
      return Object.assign({}, state, {students: action.students})

    case GET_STUDENT_BY_ID:
      return Object.assign({}, state, {student: action.studentId})

    case POST_STUDENT:
      return Object.assign({}, state, {student: action.studentId})

    case UPDATE_STUDENT:
      return Object.assign({}, state, {student: action.studentId})

    case DELETE_STUDENT:
      return Object.assign({}, state, {student: action.studentId})

    default: return state
  }
};
