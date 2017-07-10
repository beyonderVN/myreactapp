import React from 'react'
import { connect } from 'react-redux'

const Header = ({ }) => {

    return (
        <header id="portfolio" className="header-main w3-border-bottom">
            <div className="slider">
                <div className="slider-wrap">
                    <div className="mySlides w3-animate-top" style={{ visibility: "visible" }}>

                    </div>
                    <div className="mySlides w3-animate-top" style={{ visibility: "hidden" }}>

                    </div>
                    <div className="mySlides w3-animate-top" style={{ visibility: "hidden" }}>

                    </div>
                    <div className="mySlides w3-animate-top" style={{ visibility: "hidden" }}>

                    </div>
                </div>

            </div>
            <div className="w3-bar">
                <div className="w3-bar-left">
                    <span className="w3-bar-item w3-button w3-hide-large w3-xxlarge w3-hover-text-grey w3-margin-right" onclick="w3_open()"><i className="fa fa-bars"></i></span>

                    <a href="javascript:void(0)" className="w3-bar-item w3-button w3-border w3-margin-right">Home</a>
                    <a href="javascript:void(0)" className="w3-bar-item w3-button w3-border">Link 1</a>
                </div>
                <div className="w3-bar-right">
                    <a href="javascript:void(0)" className="w3-bar-item w3-button w3-margin-right b">Login</a>
                    <a href="javascript:void(0)" className="w3-bar-item w3-button w3-margin-right b">Sign Up</a>
                    <input type="text" className="w3-bar-item w3-input w3-white w3-hide-small w3-right search-input" placeholder="Search..." />
                </div>

            </div>
        </header>
    )

}

export default Header