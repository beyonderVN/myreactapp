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
    position: 'developer',
    education: [
        '1996 – 2001: Chi Linh school, Vung Tau City, Ba Ria-Vung Tau Province',
        '2001 – 2005: Thang Nhat school, Vung Tau City, Ba Ria-Vung Tau Province',
        '2005 – 2008: Le Quy Don gifted high School, Vung Tau City, Ba Ria-Vung Tau Province',
        '2008 – 2014: Posts and Telecommunications Institute of Technology HCM',
        '2016 : 8 weeks of learning android at http://www.coderschool.vn/ , win final contest at rank 2',
    ],
    workExperience: [
        {
            from: '05/2014',
            to: '02/2015',
            company: {
                name: 'Financial Software Solution Company',
                address: '315 Truong Chinh Street, Thanh Xuan District, Ha Noi',
                des: 'Established in March, 2008 by a team of experienced professionals in financial services software, aiming at providing software solutions and services to Vietnamese and international financial institutions. After 6 years in operation, FSS has been developing to become an young, innovative and high prestige software company in the financial services sector in Vietnam. Now having more than 100 employees.'
            },
            position: 'developer',
            jobDescription: [
                'Prepare the necessary tools for programming',
                'Develop and integrating',
                'Review and test code',
                'Support issues relating to programming',
                'Implementation modify system follow requirements analysis document',
                'Technical support after golive system',
            ],
            language: ['SQL', 'VB.net', 'C#'],
            tools: ['SQL Navigator', 'Visual Studio 2008', 'Crystal Report', 'Source Safe'],
            projects: [
                'Provide and implement Core securities software FLEX for Phuong Nam Securities(PNS)',
                'Provide and implement Core securities software FLEX for , Phu Hung Securities(PHS)'
            ]
        },
        {
            from: '04/2016',
            to: '08/2017',
            company: {
                name: 'Vinh Sang Limited',
                address: '31 Ton Duc Thang, 1 District, TPHCM City',
                des: 'Vinh Sang Limited was founded in 2011 and set HoChiMinh City as the starting point to explore the ASEAN market. As a subsidiary company of Glorious I.T. Creation Limited in Hong Kong, Vinh Sang focus in being a multi-skilled I.T. solution provider with a highly competent workforce and strong ASEAN presence. In the near future, we will expand our service in the &quot;internet is everything&quot; field and combine the I.T. technology with studying, living and working.'
            },
            position: ['front-end developer', 'android developer', 'design'],
            language: ['HTML5,', 'CSS3', 'javascripts es6', 'react', 'nodeJs', 'java', 'android'],
            tools: ['Eclipe,', 'Visual Code', 'Slack', 'Android Studio', 'SQL Workbench'],
            projects: [
                'Vivmall project : building e-commerce website vi http://vivmall.vn/, http://vivmall.hk/, http://www.vinhsangvn.com/, http://fas22.vn/, http://tab156.vn/',
                'http://www.gloriouscreationgroup.com/',
                'http://www.greenbuildingplus.com/'
            ]
        }
    ],
    technicalSkills: ['Java', 'Android', 'Javascript', 'HTML', 'CSS', 'VB.NET', 'C#', 'SQL', 'noSQL'],
    hobbies: ['football', 'music', 'travel'],
    language: ['vietnamese', 'english']
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