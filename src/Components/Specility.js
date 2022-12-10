import React from 'react'
import s1 from '../Assets/s-1.png'
import s2 from '../Assets/s-2.png'
import s3 from '../Assets/s-3.png'
import s4 from '../Assets/s-4.png'
import s5 from '../Assets/s-5.png'
import s6 from '../Assets/s-6.png'
import ss1 from '../Assets/s-img-1.jpg'
import ss2 from '../Assets/s-img-2.jpg'
import ss3 from '../Assets/s-img-3.jpg'
import ss4 from '../Assets/s-img-4.jpg'
import ss5 from '../Assets/s-img-5.jpg'
import ss6 from '../Assets/s-img-6.jpg'

function Specility() {
    return (
        <>
            <section className="speciality" id="speciality">

                <h1 className="heading"> our <span>speciality</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <img className="image" src={ss1} alt="" />
                        <div className="content">
                            <img src={s1} alt="" />
                            <h3>burger</h3>
                            <p>Delicious Burgers</p>
                        </div>
                    </div>
                    <div className="box">
                        <img className="image" src={ss2} alt="" />
                        <div className="content">
                            <img src={s2} alt="" />
                            <h3>pizza</h3>
                            <p>Delicious Pizza</p>
                        </div>
                    </div>
                    <div className="box">
                        <img className="image" src={ss3} alt="" />
                        <div className="content">
                            <img src={s3} alt="" />
                            <h3>ice-cream</h3>
                            <p>Delicious ice-cream</p>
                        </div>
                    </div>
                    <div className="box">
                        <img className="image" src={ss4} alt="" />
                        <div className="content">
                            <img src={s4} alt="" />
                            <h3>cold drinks</h3>
                            <p>cold drinks</p>
                        </div>
                    </div>
                    <div className="box">
                        <img className="image" src={ss5} alt="" />
                        <div className="content">
                            <img src={s5} alt="" />
                            <h3>shakes</h3>
                            <p>tasty shakes</p>
                        </div>
                    </div>
                    <div className="box">
                        <img className="image" src={ss6} alt="" />
                        <div className="content">
                            <img src={s6} alt="" />
                            <h3>healty breakfast</h3>
                            <p>healty breakfast</p>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

export default Specility