import { combineReducers } from 'redux'
import student from './studentReducer'
import campus from './campusReducer'
// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch (action.type) {
//     default: return state
//   }
// };

export default combineReducers({ student, campus })
