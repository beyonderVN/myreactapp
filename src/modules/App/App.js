import React from 'react'
import { connect } from 'react-redux'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { api } from '../../services'
import { loadApp } from '../../actions'

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
                <Sidebar />
                <div id="main" className="w3-main scrollbar style-3">
                    <div className="main-wrap">
                        <Header />
                        <div className="main-content w3-container w3-card-4">
                            <div className="w3-third w3-container w3-margin-bottom grid-item ">
                                <div className="util-box">
                                    <a className="w3-card-2 w3-white w3-border w3-round util-box-item">
                                        <span>Detail</span>
                                    </a>
                                    <a className="w3-card-2 w3-white w3-border w3-round util-box-item">
                                        <i className="fa fa-plus button-icon"></i><span>Cart</span>
                                    </a>
                                    <a className="w3-card-2 w3-white w3-border w3-round util-box-item buy-now">
                                        <span>Buy Now</span>
                                    </a>
                                </div>
                                <div className="hover_scale scrollbar style-3 w3-border w3-white">
                                    <a data-fancybox="gallery" href="http://vivmall.hk/vivmallhk/image/Untitled-3.jpg" title="Barbatos 6th Form">
                                        <img className="animation w3-hover-opacity" src="http://vivmall.hk/vivmallhk/image/Untitled-3.jpg" />
                                    </a>
                                    <div className="w3-container w3-white">
                                        <p><b>Lorem Ipsum</b></p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="w3-third w3-container w3-margin-bottom grid-item ">
                                <div className="util-box">
                                    <a className="w3-card-2 w3-white w3-border w3-round util-box-item">
                                        <span>Detail</span>
                                    </a>
                                    <a className="w3-card-2 w3-white w3-border w3-round util-box-item">
                                        <i className="fa fa-plus button-icon"></i><span>Cart</span>
                                    </a>
                                    <a className="w3-card-2 w3-white w3-border w3-round util-box-item buy-now">
                                        <span>Buy Now</span>
                                    </a>
                                </div>
                                <div className="hover_scale scrollbar style-3 w3-border w3-white">
                                    <a data-fancybox="gallery" href="http://vivmall.hk/vivmallhk/image/Untitled-4.jpg" title="Barbatos 6th Form">
                                        <img className="animation w3-hover-opacity" src="http://vivmall.hk/vivmallhk/image/Untitled-4.jpg" />
                                    </a>
                                    <div className="w3-container w3-white">
                                        <p><b>Lorem Ipsum</b></p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="w3-third w3-container w3-margin-bottom grid-item ">
                                <div className="util-box">
                                    <a className="w3-card-2 w3-white w3-border w3-round util-box-item">
                                        <span>Detail</span>
                                    </a>
                                    <a className="w3-card-2 w3-white w3-border w3-round util-box-item">
                                        <i className="fa fa-plus button-icon"></i><span>Cart</span>
                                    </a>
                                    <a className="w3-card-2 w3-white w3-border w3-round util-box-item buy-now">
                                        <span>Buy Now</span>
                                    </a>
                                </div>
                                <div className="hover_scale scrollbar style-3 w3-border w3-white">
                                    <a data-fancybox="gallery" href="http://vivmall.hk/vivmallhk/image/Untitled-2.jpg" title="Barbatos 6th Form">
                                        <img className="animation w3-hover-opacity" src="http://vivmall.hk/vivmallhk/image/Untitled-2.jpg" />
                                    </a>
                                    <div className="w3-container w3-white">
                                        <p><b>Lorem Ipsum</b></p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="w3-third w3-container w3-margin-bottom grid-item ">
                                <div className="util-box">
                                    <a className="w3-card-2 w3-white w3-border w3-round util-box-item">
                                        <span>Detail</span>
                                    </a>
                                    <a className="w3-card-2 w3-white w3-border w3-round util-box-item">
                                        <i className="fa fa-plus button-icon"></i><span>Cart</span>
                                    </a>
                                    <a className="w3-card-2 w3-white w3-border w3-round util-box-item buy-now">
                                        <span>Buy Now</span>
                                    </a>
                                </div>
                                <div className="hover_scale scrollbar style-3 w3-border w3-white">
                                    <a data-fancybox="gallery" href="http://vivmall.hk/vivmallhk/image/Untitled-5.jpg" title="Barbatos 6th Form">
                                        <img className="animation w3-hover-opacity" src="http://vivmall.hk/vivmallhk/image/Untitled-5.jpg" />
                                    </a>
                                    <div className="w3-container w3-white">
                                        <p><b>Lorem Ipsum</b></p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="w3-third w3-container w3-margin-bottom grid-item ">
                                <div className="util-box">
                                    <a className="w3-card-2 w3-white w3-border w3-round util-box-item">
                                        <span>Detail</span>
                                    </a>
                                    <a className="w3-card-2 w3-white w3-border w3-round util-box-item">
                                        <i className="fa fa-plus button-icon"></i><span>Cart</span>
                                    </a>
                                    <a className="w3-card-2 w3-white w3-border w3-round util-box-item buy-now">
                                        <span>Buy Now</span>
                                    </a>
                                </div>
                                <div className="hover_scale scrollbar style-3 w3-border w3-white">
                                    <a data-fancybox="gallery" href="http://vivmall.hk/vivmallhk/image/Untitled-6.jpg" title="Barbatos 6th Form">
                                        <img className="animation w3-hover-opacity" src="http://vivmall.hk/vivmallhk/image/Untitled-6.jpg" />
                                    </a>
                                    <div className="w3-container w3-white">
                                        <p><b>Lorem Ipsum</b></p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="w3-third w3-container w3-margin-bottom grid-item ">
                                <div className="util-box">
                                    <a className="w3-card-2 w3-white w3-border w3-round util-box-item">
                                        <span>Detail</span>
                                    </a>
                                    <a className="w3-card-2 w3-white w3-border w3-round util-box-item">
                                        <i className="fa fa-plus button-icon"></i><span>Cart</span>
                                    </a>
                                    <a className="w3-card-2 w3-white w3-border w3-round util-box-item buy-now">
                                        <span>Buy Now</span>
                                    </a>
                                </div>
                                <div className="hover_scale scrollbar style-3 w3-border w3-white">
                                    <a data-fancybox="gallery" href="http://vivmall.hk/vivmallhk/image/Untitled-7.jpg" title="Barbatos 6th Form">
                                        <img className="animation w3-hover-opacity" src="http://vivmall.hk/vivmallhk/image/Untitled-7.jpg" />
                                    </a>
                                    <div className="w3-container w3-white">
                                        <p><b>Lorem Ipsum</b></p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <Footer />
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