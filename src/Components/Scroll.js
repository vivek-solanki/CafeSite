import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import p1 from '../Assets/p1.jpg'
import p2 from '../Assets/p2.jpg'
import p3 from '../Assets/p3.jpg'

function Scroll() {
    return (
        <>

            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 shlid img-fluid"
                        src={p1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 shlid img-fluid"
                        src={p2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 shlid img-fluid"
                        src={p3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel></>
    )
}

export default Scroll