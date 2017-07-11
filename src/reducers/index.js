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
const rootReducer = combineReducers({
    entities,
    user,
    productTypeIds,
    pagination
    // pagination
})

export default rootReducer
// selector
export const getProductTypes = (state) => {
    return state.entities.productTypes
}

export const getProductListByType = (state, productType) => {
    return state.pagination.productListByType[productType] || {}
}