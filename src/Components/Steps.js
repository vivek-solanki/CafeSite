import React from 'react'
import stp1 from '../Assets/step-1.jpg'
import stp2 from '../Assets/step-2.jpg'
import stp3 from '../Assets/step-3.jpg'
import stp4 from '../Assets/step-4.jpg'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Steps() {
    return (
        <>
            <div className="step-container mt-5">

                <h1 className="heading">how it <span>works</span></h1>

                <section className="steps">

                    <div className="box">
                        <img src={stp1} alt="" className='img-fluid' />
                        <h3>choose your favorite food</h3>
                    </div>
                    <div className="box">
                        <img src={stp2} alt="" className='img-fluid' />
                        <h3>fast delivery</h3>
                    </div>
                    <div className="box">
                        <img src={stp3} alt="" className='img-fluid' />
                        <h3>easy payments methods</h3>
                    </div>
                    <div className="box">
                        <img src={stp4} alt="" className='img-fluid' />
                        <h3>finally, enjoy your food</h3>
                    </div>

                </section>

            </div>
        </>
    )
}

export default Steps;