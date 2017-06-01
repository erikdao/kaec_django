import React, { Component } from 'react';
import Slider from 'react-slick';

class ImageSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                { path: "static/imgs/city-gate.jpg" },
                { path: "static/imgs/Juman-Park.jpg" },
                { path: "static/imgs/Bayviews-e1474719383226.jpg" }
            ]
        };
    }

    render() {
        let images = this.state.data;

        let settings = {
            dots: true,
            infinite: true,
            speed: 850,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            draggable: false,
            fade: true,
            className: "hero-slider"
        };

        return (
            <Slider {...settings}>
                { images.map((image, idx) => (
                    <div key={idx}>
                        <img src={image.path} alt="" className="img-responsive" />
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 txt-image">
                                    <img src="static/imgs/video-txt.png" alt="" className="animation fadeInUp animated" data-animation="fadeInUp" data-duration={150} />
                                    <a href="#moving" className="animation down scroll-to fadeInUp animated" title="Scroll Down" data-animation="fadeInUp" data-duration="1100">
                                        <img src="static/imgs/down-pointer.svg" alt="down pointer" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </Slider>
        );
    }
}

export default ImageSlider;