import React from 'react';
import NavBar from './Component/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer';

const Root = () => {
    return (
        <div>
            <div className=" sticky top-0 h-fit z-50">
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;