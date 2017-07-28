import React from 'react'
import { connect } from 'react-redux'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ProductListByType from './Container/ProductListByType'
import About from './Container/About'
import Home from './Container/Home/home'
import WorkExperience from './Container/WorkExperience';
import Education from './Container/Education';
import { Switch, Route } from 'react-router-dom';

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
        <Route path="/isRequiredLogin" component={requiredAuthorize(About)} />
        <Route path="/about" component={About} />
        <Route path="/" >
            <div>
                <Route path="/" component={Sidebar} />
                <div id="main" className="w3-main ">
                    <div className="main-wrap w3-card-4">
                        <Route path="/" component={Header} />
                        <Switch >
                            <Route path="/product/:producttypeid/:producttypename" component={ProductListByType} />
                            <Route path="/education" component={Education} />
                            <Route path="/workexperience" component={WorkExperience} />
                            <Route path="/" component={Home} />
                        </Switch>

                        <Route path="/" component={Footer} />
                    </div>

                </div>
            </div>
        </Route>
    </Switch>

export default Routes

