import React from 'react'
import { connect } from 'react-redux'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ProductListByType from './Container/ProductListByType'
// import About from './Container/About'
// import Home from './Container/Home/home'
// import WorkExperience from './Container/WorkExperience';
// import Education from './Container/Education';
import { Switch, Route } from 'react-router-dom';
import Content from './Container/Content';
import ScrollTop from '../App/Components/ScrollTop';
import PreventingTransitions from '../App/Container/Example/PreventingTransitions';
import asyncComponent from '../App/Components/AsyncComponent';

import SkeletonLoading from '../App/Components/SkeletonLoading';

const renderLoadingHome = () => {
    return <div className="w3-container w3-card-2 w3-white w3-margin-bottom w3-padding" style={{ paddingBottom: '40px' }}>
        <h1><SkeletonLoading /></h1>
        <SkeletonLoading count={6} />
    </div>
}

const AsyncAbout = asyncComponent(() => import('./Container/About'), renderLoadingHome);
const AsyncHome = asyncComponent(() => import('./Container/Home/home'), renderLoadingHome);
const AsyncWorkExperience = asyncComponent(() => import('./Container/WorkExperience'), renderLoadingHome);
const AsyncEducation = asyncComponent(() => import('./Container/Education'), renderLoadingHome);


const requiredAuthorize = (Component) => {
    const AuthenticationComponent = ({ user }) => {
        return user ? <Component {...this.props} /> : <div>you are not login<button>Login</button>></div>
    }
    return connect((rootState) => {
        return {
            user: rootState.user
        }
    }
    )(AuthenticationComponent)
}
const Routes = () =>
    <Switch >
        <Route path="/isRequiredLogin" component={requiredAuthorize(AsyncAbout)} />
        <Route path="/about" component={AsyncAbout} />
        <Route path="/" >
            <div>
                <Route path="/" component={Sidebar} />
                <div id="main" className="w3-main ">
                    <div className="main-wrap w3-card-4">
                        <Route path="/" component={Header} />
                        <Content>
                            <ScrollTop />
                            <Switch>
                                <Route path="/" exact component={AsyncHome} />
                                <Route path="/product/:producttypeid/:producttypename" component={ProductListByType} />
                                <Route path="/education" component={AsyncEducation} />
                                <Route path="/workexperience" component={AsyncWorkExperience} />
                                <Route path="/exmples/preventingtransitions" component={PreventingTransitions} />

                                <Route component={() => <div>PAGE NOT FOUND</div>} />
                            </Switch>
                        </Content>
                        <Route path="/" component={Footer} />
                    </div>

                </div>
            </div>
        </Route>
    </Switch>

export default Routes

