import * as ActionTypes from '../actions'
import { combineReducers } from 'redux'
import paginate from './paginate'
import examples from './examples'
import _ from 'lodash'

// Updates an entity cache in response to any action with response.entities.
// https://stackoverflow.com/questions/19965844/lodash-difference-between-extend-assign-and-merge
function entities(state = { user: 'admin', productTypes: {}, products: {} }, action) {
    if (action.response && action.response.entities) {
        return _.merge({}, state, action.response.entities)
    }
    return state
}

function user(state = null, action) {
    return state
}
const curriculumVitae = (state = {
    fullname: 'Ngo Hoang Long',
    dateOfBirth: '24/02/1990',
    sex: 'male',
    address: 'Ho Chi Minh City',
    phoneNumber: '01646202046',
    email: 'ngohoanglongptit@gmail.com',
    career: 'developer'
}, action) => {
    return state
}
const productTypeIds = (state = [], action) => {
    if (action.type === ActionTypes.PRODUCT_TYPE.SUCCESS) {
        console.log(action.response.result);
        return [...state, ...action.response.result]
    }
    return state
}

// Updates the pagination data for different actions.
const pagination = combineReducers({
    productListByType: paginate({
        mapActionToKey: action => action.productType,
        types: [
            ActionTypes.PRODUCT.REQUEST,
            ActionTypes.PRODUCT.SUCCESS,
            ActionTypes.PRODUCT.FAILURE
        ]
    })
})

// sidebar
const isSidebarVisible = (state = false, action) => {
    if (action.type === ActionTypes.SIDEBAR_TOGGLE) {
        return !state
    }
    return state
}
// 

const rootReducer = combineReducers({
    curriculumVitae,
    entities,
    user,
    productTypeIds,
    pagination,
    isSidebarVisible,
    examples
})

export default rootReducer


// selector
export const getProductTypes = (state) => {
    return state.entities.productTypes
}

export const getProductListByType = (state, productType) => {
    return state.pagination.productListByType[productType] || {}
}