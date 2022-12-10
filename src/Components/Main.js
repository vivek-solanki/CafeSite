import React from 'react'
import Nav1 from "./Nav";
import Specility from './Specility';
import Popular from './Popular';
import Scroll from "./Scroll";
import Steps from "./Steps";
import Gallary from "./Gallary";
import Order from "./Order";
import Footer from "./Footer";
import './style.css';

function Main() {
    return (
        <>
            <Nav1 />
            <Scroll />
            <Specility />
            <Popular />
            <Steps />
            <Gallary />
            <Order />
            <Footer />
        </>
    )
}

export default Main