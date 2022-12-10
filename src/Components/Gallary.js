import React from 'react'
import g1 from '../Assets/g-1.jpg'
import g2 from '../Assets/g-2.jpg'
import g4 from '../Assets/g-4.jpg'
import g5 from '../Assets/g-5.jpg'
import g6 from '../Assets/g-6.jpg'
import g7 from '../Assets/g-7.jpg'
import g8 from '../Assets/g-8.jpg'
import g9 from '../Assets/g-9.jpg'

function Gallary() {
    return (
        <>
            <section className="gallery" id="gallery">

                <h1 className="heading"> our food <span> gallery </span> </h1>

                <div className="box-container">

                    <div className="box">
                        <img src={g1} alt="" />
                        <div className="content">
                            <h3>burger</h3>
                            <p>order your Delicious Burgers</p>
                            <a href="#order" className="btn">ordern now</a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={g2} alt="" />
                        <div className="content">
                            <h3>sandwich</h3>
                            <p>order your Delicious sandwichs</p>
                            <a href="#order" className="btn">ordern now</a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={g4} alt="" />
                        <div className="content">
                            <h3>veg megghi</h3>
                            <p>order your Delicious veg megghi</p>
                            <a href="#order" className="btn">ordern now</a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={g5} alt="" />
                        <div className="content">
                            <h3>veg pasta</h3>
                            <p>order your Delicious veg pasta</p>
                            <a href="#order" className="btn">ordern now</a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={g6} alt="" />
                        <div className="content">
                            <h3>fride rice</h3>
                            <p>order your Delicious fride rice</p>
                            <a href="#order" className="btn">ordern now</a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={g7} alt="" />
                        <div className="content">
                            <h3>veg nudals</h3>
                            <p>order your Delicious veg nudals</p>
                            <a href="#order" className="btn">ordern now</a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={g8} alt="" />
                        <div className="content">
                            <h3>cake</h3>
                            <p>order your Delicious cakes</p>
                            <a href="#order" className="btn">ordern now</a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={g9} alt="" />
                        <div className="content">
                            <h3>manchuriyan</h3>
                            <p>order your Delicious manchuriyan</p>
                            <a href="#order" className="btn">ordern now</a>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Gallary