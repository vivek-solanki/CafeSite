import React from 'react'

function Popular() {
    return (
        <>
            <section className="popular" id='popular'>

                <h1 className="heading"> most <span>popular</span> foods </h1>

                <div className="box-container">

                    <div className="box">

                        <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/burger-fries.jpg?quality=82&strip=1&w=640" alt="" />
                        <h3>burger</h3>
                        <a href="#order" className="btn">order now</a>
                    </div>
                    <div className="box">

                        <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-special-butterscotch-cake-half-kg--109218-m.jpg" alt="" />
                        <h3>cakes</h3>
                        <a href="#order" className="btn">order now</a>
                    </div>
                    <div className="box">

                        <img src="https://www.cookwithkushi.com/wp-content/uploads/2016/10/IMG_5587_-1.jpg" alt="" />
                        <h3>pao bhaji</h3>
                        <a href="#order" className="btn">order now</a>
                    </div>
                    <div className="box">

                        <img src="https://thechutneylife.com/wp-content/uploads/2017/09/Veg-Hakka-Noodles-The-Chutney-Life-4.jpg" alt="" />
                        <h3>hakka nudals</h3>
                        <a href="#order" className="btn">order now</a>
                    </div>
                    <div className="box">

                        <img src="https://media.istockphoto.com/id/158268808/photo/fresh-citrus-juices.jpg?s=612x612&w=0&k=20&c=vflsrO3KXXtWfpOOzNZdBVgeIpLy21-OSUl-QPSgPmU=" alt="" />
                        <h3>Juses</h3>
                        <a href="#order" className="btn">order now</a>
                    </div>
                    <div className="box">

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Q0JXuKcXoP_DVydg9c1PSrtMRffBAvj3XA&usqp=CAU" alt="" />
                        <h3>kulfi</h3>
                        <a href="#order" className="btn">order now</a>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Popular