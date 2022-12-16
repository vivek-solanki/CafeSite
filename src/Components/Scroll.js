import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Scroll() {
    return (
        <>
            <div className='d-md-block d-none'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 shlid img-fluid"
                        src="https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZSUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 shlid img-fluid"
                        src="https://media-cdn.tripadvisor.com/media/photo-s/1b/53/3c/7c/honey-mustard-burger.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 shlid img-fluid"
                        src="https://lh3.googleusercontent.com/p/AF1QipNr4PFW18-7jcIkKB22coh5rtxeXC6LYQ-nYoQ7=w1080-h608-p-no-v0"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            </div>
        </>
    )
}

export default Scroll