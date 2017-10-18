import axios from 'axios';

const initialState = {
  allCampuses: [],
  singleCampus: {},
}

//ACTION TYPES
const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES'
const GET_CAMPUS_BY_ID = 'GET_CAMPUS_BY_ID'
const ADD_CAMPUS = 'ADD_CAMPUS'
const REVISE_CAMPUS = 'REVISE_CAMPUS'
const DESTROY_CAMPUS = 'DESTROY_CAMPUS'

//ACTION CREATORS
const getAllCampuses = allCampuses => ({type: GET_ALL_CAMPUSES, allCampuses})
const getCampusById = campus => ({type: GET_CAMPUS_BY_ID, campus})
const addCampus = campus => ({type: ADD_CAMPUS, campus})
const reviseCampus = campusId => ({type: REVISE_CAMPUS, campusId})
const destroyCampus = campusId => ({type: DESTROY_CAMPUS, campusId})

//REDUCERS
export default function(state = initialState, action) {
  switch (action.type) {

    case GET_ALL_CAMPUSES:
      return Object.assign({}, state, {allCampuses: action.allCampuses})

    case GET_CAMPUS_BY_ID:
      return Object.assign({}, state, {singleCampus: action.campus})

    case ADD_CAMPUS:
      return Object.assign({}, state, {allCampuses: [...state.allCampuses, action.singleCampus]})


    // case REVISE_CAMPUS:
    //   return {
    //     ...state,

    //   }

    // case DESTROY_CAMPUS:
    //   return {

    //   }

    default: return state
  }
}

//THUNKS
export const fetchCampuses = () => dispatch => {
  axios.get('/api/campus')
    .then(res => res.data)
    .then(camp => dispatch(getAllCampuses(camp)))
}

export const fetchCampus = id => dispatch => {
  axios.get(`/api/campus/${id}`)
    .then(res => dispatch(getCampusById(res.data)))
}

export const postCampus = campus => dispatch => {
  axios.post('/api/campus', campus)
    .then(res => dispatch(addCampus(res.data)))
}

export const updateCampus = (id, campus) => dispatch => {
  axios.put(`/api/campus/${id}`, campus)
    .then(res => dispatch(reviseCampus(res.data)))
}

export const deleteCampus = id => dispatch => {
  dispatch(destroyCampus(id))
  axios.delete(`/api/campus/${id}`)
}

