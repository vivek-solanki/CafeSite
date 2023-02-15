import React from 'react'
import s1 from '../Assets/s-1.png'
import s2 from '../Assets/s-2.png'
import s3 from '../Assets/s-3.png'
import s4 from '../Assets/s-4.png'
import s6 from '../Assets/s-6.png'

function Specility() {
    return (
        <>
            <section className="speciality" id="speciality">

                <h1 className="heading"> our special Food's </h1>

                <div className="box-container">

                    <div className="box">
                        <img className="image" src="https://www.licious.in/blog/wp-content/uploads/2022/08/shutterstock_2014376390.jpg" alt="" />
                        <div className="content">
                            <img src={s1} alt="" />
                            <h3>burger</h3>
                            <p>Delicious Burgers</p>
                        </div>
                    </div>
                    <div className="box">
                        <img className="image" src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg" alt="" />
                        <div className="content">
                            <img src={s2} alt="" />
                            <h3>pizza</h3>
                            <p>Delicious Pizza</p>
                        </div>
                    </div>
                    <div className="box">
                        <img className="image" src="https://cdn.pixabay.com/photo/2017/06/06/16/33/ice-2377713_960_720.png" alt="" />
                        <div className="content">
                            <img src={s3} alt="" />
                            <h3>ice-cream</h3>
                            <p>Delicious ice-cream</p>
                        </div>
                    </div>
                    <div className="box">
                        <img className="image" src="https://content.jdmagicbox.com/comp/def_content/soft-drink-retailers/shutterstock-1457239913-soft-drink-retailers-3-5wxtb.jpg?clr=3e2828" alt="" />
                        <div className="content">
                            <img src={s4} alt="" />
                            <h3>cold drinks</h3>
                            <p>cold drinks</p>
                        </div>
                    </div>
                    <div className="box">
                        <img className="image" src="https://imgmediagumlet.lbb.in/media/2019/01/5c3c36d1750bfb2a1e3bce1c_1547450065034.jpg?fm=webp&w=750&h=500&dpr=1" alt="" />
                        <div className="content">
                            <img src={s4} alt="" />
                            <h3>shakes</h3>
                            <p>tasty shakes</p>
                        </div>
                    </div>
                    <div className="box">
                        <img className="image" src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Quick-Garlic-Toast_EXPS_FT20_9875_F_0427_1_HOME.jpg?fit=700,1024" alt="" />
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