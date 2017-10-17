import axios from 'axios';

const initialState = {
  campuses: [],
  campus: {},
}

const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES'
const GET_CAMPUS_BY_ID = 'GET_CAMPUS_BY_ID'
const POST_CAMPUS = 'POST_CAMPUS'
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'

export function getAllCampuses () {
  return {
    type: GET_ALL_CAMPUSES,
  }
}

export function getCampusById (campusId) {
  return {
    type: GET_CAMPUS_BY_ID,
  }
}

export function postCampus (campus) {
  return {
    type: POST_CAMPUS,
  }
}

export function updateCampus (campusId) {
  return {
    type: UPDATE_CAMPUS,
  }
}

export function deleteCampus (campusId) {
  return {
    type: DELETE_CAMPUS,
  }
}

//THUNKS
export function fetchCampuses () {
  return function thunk (dispatch) {
    return axios.get('/api/campus')
      .then(res => res.data)
      .then(campuses => {
        dispatch(getAllCampuses(campuses))
      })
  }
}

export function postNewCampus (Campus) {
  return function thunk (dispatch) {
    return axios.post('/api/Campus', Campus)
      .then(res => res.data)
      .then(newCampus => {
        dispatch(getCampusById(newCampus))
      })
  }
}


//REDUCERS
export default function(state = initialState, action) {
  switch (action.type) {

    case GET_ALL_CAMPUSES:
      return Object.assign({}, state, {campuses: action.campuses})

    case GET_CAMPUS_BY_ID:
      return Object.assign({}, state, {campus: action.campusId})

    case POST_CAMPUS:
      return Object.assign({}, state, {campuses: [...state.campuses, action.campus]})


    // case UPDATE_CAMPUS:
    //   return {
    //     ...state,

    //   }

    // case DELETE_CAMPUS:
    //   return {

    //   }

    default: return state
  }
};
