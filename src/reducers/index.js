import * as ActionTypes from '../actions'
import { combineReducers } from 'redux'
import paginate from './paginate'
import _ from 'lodash'

// Updates an entity cache in response to any action with response.entities.
// https://stackoverflow.com/questions/19965844/lodash-difference-between-extend-assign-and-merge
function entities(state = { user: 'admin', productTypes: {}, products: {} }, action) {
    if (action.response && action.response.entities) {
        return _.merge({}, state, action.response.entities)
    }
    return state
}
function user(state = 'admin', action) {
    return state
}

// // Updates the pagination data for different actions.
// const pagination = combineReducers({
//     starredByUser: paginate({
//         mapActionToKey: action => action.login,
//         types: [
//             ActionTypes.STARRED.REQUEST,
//             ActionTypes.STARRED.SUCCESS,
//             ActionTypes.STARRED.FAILURE
//         ]
//     }),
//     stargazersByRepo: paginate({
//         mapActionToKey: action => action.fullName,
//         types: [
//             ActionTypes.STARGAZERS.REQUEST,
//             ActionTypes.STARGAZERS.SUCCESS,
//             ActionTypes.STARGAZERS.FAILURE
//         ]
//     })
// })
const rootReducer = combineReducers({
    entities,
    user,
    // pagination

})

export default rootReducer
// selector
export const getProductTypes = (state) => {
    return state.entities.productTypes
}