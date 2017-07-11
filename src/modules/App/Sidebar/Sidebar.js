import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'
const SideBar = React.createClass({
    _handleSpy(event) {

        let scroller = document.querySelector('#mySidebar')
        let scrollTop = event.target.scrollTop
        let scrollUp = this.lastScrollTop > scrollTop
        // console.log(scroller.scrollTop)
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
        const el = document.querySelector('#main') || window
        // console.log(el)
        scroller.addEventListener('scroll', () => {
            this.lastScrollTop = scroller.scrollTop
        })
        el.addEventListener('scroll', this._handleSpy)
    },
    componentDidMount() {
        this.lastScrollTop = 0;
        this.onEvent()
    },
    componentWillUnmount() {
        this.offEvent()
    },
    render() {
        // console.log(this.props); 
        const { productTypes } = this.props
        return (
            <nav className="w3-sidebar w3-collapse w3-animate-left w3-card-4 scrollbar style-3  main-sidebar " style={{ zIndex: '10' }} id="mySidebar">
                <div className="main-sidebar-wrap">
                    <div className="nav-heading w3-row-padding w3-padding-16">
                        <a href="#" onclick="w3_close()" className="w3-hide-large w3-right w3-jumbo w3-padding side-bar-close-btn" title="close menu">
                            <i className="fa fa-remove"></i>
                        </a>
                        <img src="http://via.placeholder.com/350x150" style={{ width: '70%' }} className="w3-round" /><br /><br />
                        <h4><b>Vivmall</b></h4>
                        <p className="w3-text-grey">The coconut tree (Cocos nucifera) is a member of the family Arecaceae (palm family) and the only species
                            of the genus Cocos. The term coconut can refer to the whole coconut palm or the seed, or the fruit,
                            which,
                            <botanica></botanica>lly, is a drupe, not a nut.</p>
                    </div>
                    <div className="w3-bar-block">
                        <a href="#portfolio" onclick="w3_close()" className="w3-bar-item w3-button w3-padding w3-text-teal">PORTFOLIO</a>
                        <a href="#about" onclick="w3_close()" className="w3-bar-item w3-button w3-padding">ABOUT</a>
                        <a href="#contact" onclick="w3_close()" className="w3-bar-item w3-button w3-padding">CONTACT</a>

                    </div>
                    <div className="w3-panel w3-large">
                        <i className="fa fa-facebook-official w3-hover-opacity"></i>
                        <i className="fa fa-instagram w3-hover-opacity"></i>
                        <i className="fa fa-snapchat w3-hover-opacity"></i>
                        <i className="fa fa-pinterest-p w3-hover-opacity"></i>
                        <i className="fa fa-twitter w3-hover-opacity"></i>
                        <i className="fa fa-linkedin w3-hover-opacity"></i>
                    </div>
                    <div className="nav-catalogy">
                        <div className="heading">
                            <span>Catalogy</span>
                        </div>
                        <div className="nav-wrap w3-white ">
                            {!_.isEmpty(productTypes) && productTypes.map((item) => {
                                return (
                                    <div className="nav-item" key={item.product_type_id}>
                                        <Link className="item-wrap" to={`/${item.product_type_id}/${item.product_type_name}`} >
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
            </nav>
        )


    }
})

export default connect((state) => {
    const { entities: { productTypes }, productTypeIds } = state
    return {
        productTypes: _.isEmpty(productTypeIds) ? [] : productTypeIds.map((id) => {
            return productTypes[id]
        })
    }
}
)(SideBar)