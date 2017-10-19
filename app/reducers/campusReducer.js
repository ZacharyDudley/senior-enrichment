import axios from 'axios';

const initialState = {
  allCampuses: [],
  singleCampus: {},
}
//ACTION TYPES
const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES'
const GET_CAMPUS_BY_ID = 'GET_CAMPUS_BY_ID'
const SET_CAMPUS = 'SET_CAMPUS'
const ADD_CAMPUS = 'ADD_CAMPUS'
const REVISE_CAMPUS = 'REVISE_CAMPUS'
const DESTROY_CAMPUS = 'DESTROY_CAMPUS'

//ACTION CREATORS
const getAllCampuses = allCampuses => ({type: GET_ALL_CAMPUSES, allCampuses})
const getCampusById = campus => ({type: GET_CAMPUS_BY_ID, campus})
const setCampus = campus => ({type: SET_CAMPUS, campus})
const addCampus = campus => ({type: ADD_CAMPUS, campus})
const reviseCampus = campus => ({type: REVISE_CAMPUS, campus})
const destroyCampus = campusId => ({type: DESTROY_CAMPUS, campusId})

//REDUCERS
export default function(state = initialState, action) {
  switch (action.type) {

    case GET_ALL_CAMPUSES:
      return Object.assign({}, state, {allCampuses: action.allCampuses})

    case GET_CAMPUS_BY_ID:
      return Object.assign({}, state, {singleCampus: action.singleCampus})

    case ADD_CAMPUS:
      return Object.assign({}, state, {allCampuses: [...state.allCampuses, action.campus]})

    case SET_CAMPUS:
      return Object.assign({}, state, {singleCampus: action.campus})

    case REVISE_CAMPUS:
      return Object.assign({}, state, {allCampuses: state.allCampuses.map(campus => {
        if (campus.id === action.campus.id) {
          return action.campus
        }
      })})

    case DESTROY_CAMPUS:
      return Object.assign({}, state, {allCampuses: state.allCampuses.filter(campus => (campus.id !== action.singleCampus.id))})

    default: return state
  }
}

//THUNKS
export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
    .then(res => res.data)
    .then(camp => dispatch(getAllCampuses(camp)))
}

export const fetchCampus = id => dispatch => {
  axios.get(`/api/campuses/${id}`)
    .then(res => dispatch(setCampus(res.data)))
}

export const postCampus = campus => dispatch => {
  axios.post('/api/campuses', campus)
    .then(res => dispatch(addCampus(res.data)))
}

export const updateCampus = (id, campus) => dispatch => {
  axios.put(`/api/campuses/${id}`, campus)
    .then(res => {
      dispatch(reviseCampus(res.data))
      dispatch(setCampus(res.data))
    })
}

export const deleteCampus = id => dispatch => {
  dispatch(destroyCampus(id))
  axios.delete(`/api/campuses/${id}`)
}
