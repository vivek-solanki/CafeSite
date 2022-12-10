import React from 'react'
import pp1 from '../Assets/p-1.jpg'
import pp2 from '../Assets/p-2.jpg'
import pp3 from '../Assets/p-3.jpg'
import pp4 from '../Assets/p-4.jpg'
import pp5 from '../Assets/p-5.jpg'
import pp6 from '../Assets/p-6.jpg'

function Popular() {
    return (
        <>
            <section className="popular" id='popular'>

                <h1 className="heading"> most <span>popular</span> foods </h1>

                <div className="box-container">

                    <div className="box">

                        <img src={pp1} alt="" />
                        <h3>burger</h3>
                        <a href="#order" className="btn">order now</a>
                    </div>
                    <div className="box">

                        <img src={pp2} alt="" />
                        <h3>cakes</h3>
                        <a href="#order" className="btn">order now</a>
                    </div>
                    <div className="box">

                        <img src={pp3} alt="" />
                        <h3>pao bhaji</h3>
                        <a href="#order" className="btn">order now</a>
                    </div>
                    <div className="box">

                        <img src={pp4} alt="" />
                        <h3>hakka nudals</h3>
                        <a href="#order" className="btn">order now</a>
                    </div>
                    <div className="box">

                        <img src={pp5} alt="" />
                        <h3>Juses</h3>
                        <a href="#order" className="btn">order now</a>
                    </div>
                    <div className="box">

                        <img src={pp6} alt="" />
                        <h3>kulfi</h3>
                        <a href="#order" className="btn">order now</a>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Popular