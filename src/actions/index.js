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
export const STARRED = createRequestTypes('STARRED')

export const LOAD_APP = 'LOAD_APP'
export const LOAD_PRODUCT_LIST_BY_TYPE = 'LOAD_PRODUCT_LIST_BY_TYPE'
export const SIDEBAR_TOGGLE = 'SIDEBAR_TOGGLE'

function action(type, payload = {}) {
    return { type, ...payload }
}

export const productType = {
    request: login => action(PRODUCT_TYPE[REQUEST], { login }),
    success: (login, response) => action(PRODUCT_TYPE[SUCCESS], { login, response }),
    failure: (login, error) => action(PRODUCT_TYPE[FAILURE], { login, error }),
}

export const product = {
    request: productType => action(PRODUCT[REQUEST], { productType }),
    success: (productType, response) => action(PRODUCT[SUCCESS], { productType, response }),
    failure: (productType, error) => action(PRODUCT[FAILURE], { productType, error }),
}


export const loadApp = (login, requiredFields = []) => action(LOAD_APP, { login, requiredFields })
export const loadProductListbyType = (login, requiredFields = []) => action(LOAD_PRODUCT_LIST_BY_TYPE, { login, requiredFields })
export const sidebarToggle = () => action(SIDEBAR_TOGGLE)
