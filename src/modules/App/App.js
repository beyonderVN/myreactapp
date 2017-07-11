import React from 'react'
import { connect } from 'react-redux'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ProductListByType from './Container/ProductListByType'
import About from './Container/About'
import { api } from '../../services'
import { loadApp } from '../../actions'
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

    getInitialState() {
        return {
            scrollIndex: 0,
        }
    }
    componentWillMount() {
        this.props.loadApp(this.props.login)
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="">

                <Route path="/" component={Sidebar} />
                <div id="main" className="w3-main scrollbar style-3">
                    <div className="main-wrap">
                        <Route path="/" component={Header} />
                        <Switch >
                            <Route path="/:producttypeid/:producttypename" component={ProductListByType} />
                            <Route path="/about" component={About} />
                        </Switch>

                        <Route path="/" component={Footer} />
                    </div>

                </div>
            </div>
        )

    }
}
export default connect(
    (state) => {
        const { user } = state
        console.log(user);
        return {
            login: user
        }
    },
    {
        loadApp
    }
)(App)