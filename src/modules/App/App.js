import React from 'react'
import { connect } from 'react-redux'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import Footer from './Footer/Footer'
const App = React.createClass({

    getInitialState() {
        return {
            scrollIndex: 0,
        }
    },
    render() {

        return (
            <div className="">
                <Sidebar />
                <div id="main" className="w3-main scrollbar style-3">

                    <div className="main-wrap">
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

                        <footer className=" w3-dark-grey">
                            <div className="w3-row-padding w3-padding-32">
                                <div className="w3-third">
                                    <h3>FOOTER</h3>
                                    <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
                                congue gravida diam non fringilla.</p>
                                    <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
                                </div>

                                <div className="w3-third">
                                    <h3>BLOG POSTS</h3>
                                    <ul className="w3-ul w3-hoverable">
                                        <li className="w3-padding-16">
                                            <img src="https://www.w3schools.com/w3images/workshop.jpg" className="w3-left w3-margin-right" style={{ width: "50px" }} />
                                            <span className="w3-large">Lorem</span><br />
                                            <span>Sed mattis nunc</span>
                                        </li>
                                        <li className="w3-padding-16">
                                            <img src="https://www.w3schools.com/w3images/gondol.jpg" className="w3-left w3-margin-right" style={{ width: "50px" }} />
                                            <span className="w3-large">Ipsum</span><br />
                                            <span>Praes tinci sed</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="w3-third">
                                    <h3>POPULAR TAGS</h3>
                                    <p>
                                        <span className="w3-tag w3-black w3-margin-bottom">Travel</span> <span className="w3-tag w3-grey w3-small w3-margin-bottom">New York</span>                                <span className="w3-tag w3-grey w3-small w3-margin-bottom">London</span>
                                        <span className="w3-tag w3-grey w3-small w3-margin-bottom">IKEA</span> <span className="w3-tag w3-grey w3-small w3-margin-bottom">NORWAY</span>                                <span className="w3-tag w3-grey w3-small w3-margin-bottom">DIY</span>
                                        <span className="w3-tag w3-grey w3-small w3-margin-bottom">Ideas</span> <span className="w3-tag w3-grey w3-small w3-margin-bottom">Baby</span>                                <span className="w3-tag w3-grey w3-small w3-margin-bottom">Family</span>
                                        <span className="w3-tag w3-grey w3-small w3-margin-bottom">News</span> <span className="w3-tag w3-grey w3-small w3-margin-bottom">Clothing</span>                                <span className="w3-tag w3-grey w3-small w3-margin-bottom">Shopping</span>
                                        <span className="w3-tag w3-grey w3-small w3-margin-bottom">Sports</span> <span className="w3-tag w3-grey w3-small w3-margin-bottom">Games</span>
                                    </p>
                                </div>

                            </div>
                            <div className="w3-black w3-center w3-padding-24">Powered by <a href="#" title="W3.CSS" target="_blank" className="w3-hover-opacity">Hikaruu</a></div>
                        </footer>
                    </div>

                </div>
            </div>

        )

    }
})
export default App