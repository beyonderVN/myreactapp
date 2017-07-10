const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
    return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`
        return acc
    }, {})
}

export const PRODUCT_TYPE = createRequestTypes('PRODUCT_TYPE')
export const PRODUCT = createRequestTypes('PRODUCT')

export const LOAD_APP = 'LOAD_APP'

function action(type, payload = {}) {
    return { type, ...payload }
}

export const productType = {
    request: login => action(PRODUCT_TYPE[REQUEST], { login }),
    success: (login, response) => action(PRODUCT_TYPE[SUCCESS], { login, response }),
    failure: (login, error) => action(PRODUCT_TYPE[FAILURE], { login, error }),
}

export const product = {
    request: fullName => action(PRODUCT[REQUEST], { fullName }),
    success: (fullName, response) => action(PRODUCT[SUCCESS], { fullName, response }),
    failure: (fullName, error) => action(PRODUCT[FAILURE], { fullName, error }),
}

export const loadApp = (login, requiredFields = []) => action(LOAD_APP, { login, requiredFields })