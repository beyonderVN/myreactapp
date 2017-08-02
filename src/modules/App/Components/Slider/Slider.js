import Slider from 'react-slick';
import React from 'react';
import './Slider.css'
import './Slider-theme.css'

class ResponsiveSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        };
        return (
            <div style={{
                position: 'absolute',
                top: 0,
                right: '0',
                left: '0',
                bottom: 0
            }}>
                <Slider {...settings}>
                    <div style={{
                        height: '300px',
                        overflow: 'hidden'
                    }}>
                        <img
                            style={{
                                objectFit: 'cover',
                                height: '300px',
                            }}
                            src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/20597119_10214501772440711_6337573181393523330_n.jpg?oh=a6fd3456934e5788159808720ed03a6e&oe=5A039D54"
                            alt="http://via.placeholder.com/350x300" />
                    </div>
                    <div style={{
                        height: '300px',
                        overflow: 'hidden'
                    }}>
                        <img
                            style={{
                                objectFit: 'cover',
                                height: '300px',
                            }}
                            src="http://via.placeholder.com/350x300"
                            alt="http://via.placeholder.com/350x300" />
                    </div>
                    <div style={{
                        height: '300px',
                        overflow: 'hidden'
                    }}>
                        <img
                            style={{
                                objectFit: 'cover',
                                height: '300px',
                            }}
                            src="http://via.placeholder.com/350x300"
                            alt="http://via.placeholder.com/350x300" />
                    </div>
                    <div style={{
                        height: '300px',
                        overflow: 'hidden'
                    }}>
                        <img
                            style={{
                                objectFit: 'cover',
                                height: '300px',
                            }}
                            src="http://via.placeholder.com/350x300"
                            alt="http://via.placeholder.com/350x300" />
                    </div>
                    <div style={{
                        height: '300px',
                        overflow: 'hidden'
                    }}>
                        <img
                            style={{
                                objectFit: 'cover',
                                height: '300px',
                            }}
                            src="http://via.placeholder.com/350x300"
                            alt="http://via.placeholder.com/350x300" />
                    </div>
                    <div style={{
                        height: '300px',
                        overflow: 'hidden'
                    }}>
                        <img
                            style={{
                                objectFit: 'cover',
                                height: '300px',
                            }}
                            src="http://via.placeholder.com/350x300"
                            alt="http://via.placeholder.com/350x300" />
                    </div>
                    <div style={{
                        height: '300px',
                        overflow: 'hidden'
                    }}>
                        <img
                            style={{
                                objectFit: 'cover',
                                height: '300px',
                            }}
                            src="http://via.placeholder.com/350x300"
                            alt="http://via.placeholder.com/350x300" />
                    </div>
                </Slider>
            </div>
        );
    }
};

export default ResponsiveSlider