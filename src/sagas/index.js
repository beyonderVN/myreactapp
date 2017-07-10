import { take, put, call, fork, select, all } from 'redux-saga/effects'
import { api } from '../services'
import * as actions from '../actions'
import { getProductTypes } from '../reducers'
import _ from 'lodash'

/***************************** Subroutines ************************************/

// resuable fetch Subroutine
// entity :  user | repo | starred | stargazers
// apiFn  : api.fetchUser | api.fetchRepo | ...
// id     : login | fullName
// url    : next page url. If not provided will use pass id to apiFn
function* fetchEntity(entity, apiFn, id, url) {
    yield put(entity.request(id))

    const { response, error } = yield call(apiFn, url || id)
    console.log('response', response);
    if (response)
        yield put(entity.success(id, response))
    else
        yield put(entity.failure(id, error))
}


// yeah! we can also bind Generators
export const fetchProductTypes = fetchEntity.bind(null, actions.productType, api.fetchProductTypeList)

// load user unless it is cached
function* loadProductTypes(login, requiredFields) {
    const productTypes = yield select(getProductTypes, login)
    console.log('productTypes', productTypes);
    if (!productTypes || _.isEmpty(productTypes)) {
        console.log('!productTypes', !productTypes);
        yield call(fetchProductTypes, login)
    }
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/


// Fetches data for a User : user data + starred repos
function* watchLoadUserPage() {
    while (true) {
        const { login, requiredFields = [] } = yield take(actions.LOAD_APP)
        console.log("login", login);
        yield fork(loadProductTypes, login, requiredFields)
    }
}
export default function* root() {
    yield all([
        fork(watchLoadUserPage)
    ])
}
