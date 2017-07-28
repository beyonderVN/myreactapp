import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { sidebarToggle, loadApp } from '../../../actions'
const SideBar = React.createClass({
    _handleSpy(event) {

        let scroller = document.querySelector('#mySidebar')
        let scrollTop = event.target.scrollTop
        let scrollUp = this.lastScrollTop > scrollTop
        console.log(scrollTop)
        // console.log('event', scrollUp, scroller.scrollTop);
        if (scrollUp) {
            scrollTop = Math.min(scrollTop, scroller.scrollTop)
        } else {
            scrollTop = Math.max(scrollTop, scroller.scrollTop)
        }
        this.lastScrollTop = scrollTop
        scroller.scrollTop = this.lastScrollTop
    },
    offEvent() {
        const el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window
        el.removeEventListener('scroll', this._handleSpy)
    },

    onEvent() {
        let scroller = document.querySelector('#mySidebar')
        const el = document.querySelector('body') || window
        el.addEventListener('scroll', this._handleSpy)
        scroller.addEventListener('scroll', () => {
            this.lastScrollTop = scroller.scrollTop
        })
    },
    componentDidMount() {
        this.props.loadApp()
        this.lastScrollTop = 0;
        this.onEvent()
    },
    componentWillUnmount() {
        this.offEvent()
    },
    render() {
        // console.log(this.props); 
        const { productTypes, isSidebarVisible, sidebarToggle } = this.props
        return (
            <nav className="w3-sidebar w3-collapse w3-animate-left w3-card-4 scrollbar style-3  main-sidebar " style={{
                zIndex: '10',
                display: isSidebarVisible ? 'block' : 'none'
            }} id="mySidebar">

                <div className="main-sidebar-wrap">
                    <div className="nav-heading w3-row-padding w3-padding-16">
                        <a href="#" onClick={sidebarToggle} className="w3-hide-large w3-right w3-jumbo w3-padding side-bar-close-btn" title="close menu">
                            <i className="fa fa-remove"></i>
                        </a>
                        <img src="http://via.placeholder.com/350x150" style={{ width: '70%' }} className="w3-round" />
                    </div>
                    <div className="w3-container">
                        <h4><b>Ngo Hoang Long</b></h4>
                        <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Designer</p>
                        <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK</p>
                        <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>ex@mail.com</p>
                        <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534</p>

                        <div className="w3-panel w3-large">
                            <i className="fa fa-facebook-official w3-hover-opacity w3-margin-right"></i>
                            <i className="fa fa-instagram w3-hover-opacity w3-margin-right"></i>
                            <i className="fa fa-snapchat w3-hover-opacity w3-margin-right"></i>
                            <i className="fa fa-pinterest-p w3-hover-opacity w3-margin-right"></i>
                            <i className="fa fa-twitter w3-hover-opacity w3-margin-right"></i>
                            <i className="fa fa-linkedin w3-hover-opacity w3-margin-right"></i>
                        </div>
                        <hr />
                    </div>
                    <div className="w3-bar-block">
                        <Link className="w3-bar-item w3-button w3-padding" to={`/`} >HOME</Link>
                        <a href="#portfolio" onclick="w3_close()" className="w3-bar-item w3-button w3-padding w3-text-teal">PORTFOLIO</a>
                        <a href="/about" onclick="w3_close()" className="w3-bar-item w3-button w3-padding">ABOUT</a>
                        <Link className="w3-bar-item w3-button w3-padding" to={`/education`} >EDUCATION</Link>
                        <Link className="w3-bar-item w3-button w3-padding" to={`/workexperience`} >WORK EXPERIENCE</Link>
                        <a href="#contact" onclick="w3_close()" className="w3-bar-item w3-button w3-padding">CONTACT</a>
                    </div>
                    <div className="w3-container"><hr /></div>
                    <div className="w3-container">
                        <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                        <span className="w3-tag w3-teal w3-round w3-margin-bottom w3-margin-right">HTML/HTML5</span>
                        <span className="w3-tag w3-teal w3-round w3-margin-bottom w3-margin-right">CSS/CSS3</span>
                        <span className="w3-tag w3-teal w3-round w3-margin-bottom w3-margin-right">Java</span>
                        <span className="w3-tag w3-teal w3-round w3-margin-bottom w3-margin-right">Android</span>
                        <span className="w3-tag w3-teal w3-round w3-margin-bottom w3-margin-right">NodeJs</span>
                        <span className="w3-tag w3-teal w3-round w3-margin-bottom w3-margin-right">ReactJs</span>
                        <span className="w3-tag w3-teal w3-round w3-margin-bottom w3-margin-right">VB.NET</span>
                        <br />

                        <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                        <span className="w3-tag w3-teal w3-round w3-margin-bottom w3-margin-right">Vietnamese</span>
                        <span className="w3-tag w3-teal w3-round w3-margin-bottom w3-margin-right">English</span>
                        <br />
                    </div>
                    <div className="nav-catalogy">
                        <div className="heading">
                            <span>Catalogy</span>
                        </div>
                        <div className="nav-wrap w3-white ">
                            {!_.isEmpty(productTypes) && productTypes.map((item) => {
                                return (
                                    <div className="nav-item" key={item.product_type_id}>
                                        <Link className="item-wrap" to={`/product/${item.product_type_id}/${item.product_type_name}`} >
                                            <div className="heading">{item.product_type_name}</div>
                                            <div className="des">
                                                Chuyên cung cấp The coconut tree (Cocos nucifera) is a member of the family Arecaceae (palm family) and the only species
                                        of the genus Cocos. The term coconut can refer to the whole coconut palm or the seed,
                                        or the fruit, which, botanically, is a drupe, not a nut.
                                    </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="w3-overlay w3-hide-large w3-animate-opacity"
                    onClick={sidebarToggle}
                    style={{
                        cursor: 'pointer',
                        zIndex: '-1',
                        display: isSidebarVisible ? 'block' : 'none'
                    }}
                    title="close side menu"
                ></div>
            </nav>
        )


    }
})

export default connect((state) => {
    const { entities: { productTypes }, productTypeIds, isSidebarVisible } = state
    return {
        productTypes: _.isEmpty(productTypeIds) ? [] : productTypeIds.map((id) => {
            return productTypes[id]
        }),
        isSidebarVisible: isSidebarVisible
    }
},
    {
        sidebarToggle,
        loadApp
    }
)(SideBar)
