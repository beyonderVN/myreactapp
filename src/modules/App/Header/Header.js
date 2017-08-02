import React from 'react'
import { connect } from 'react-redux'
import { sidebarToggle } from '../../../actions'
import Slider from '../Components/Slider/Slider'
import Affix from 'react-affixed';
class Header extends React.Component {
    render() {
        const { sidebarToggle } = this.props
        return (
            <header className="header-main w3-border-bottom">
                <Slider />
                <Affix offsetTop={0}>
                    <div className="w3-bar">
                        <div className="w3-bar-left">
                            <span className="w3-bar-item w3-button w3-hide-large w3-xxlarge w3-hover-text-grey w3-margin-right" onClick={sidebarToggle}><i className="fa fa-bars"></i></span>

                            <a href="javascript:void(0)" className="w3-bar-item w3-button w3-border w3-margin-right">Home</a>
                            <a href="javascript:void(0)" className="w3-bar-item w3-button w3-border">Link 1</a>
                        </div>

                        <div className="w3-bar-right">
                            <input type="text" className="w3-bar-item w3-input w3-white w3-hide-small w3-right search-input" placeholder="Search..." />
                        </div>
                    </div>
                </Affix>

            </header>
        )
    }
}

export default connect(null, { sidebarToggle })(Header)
