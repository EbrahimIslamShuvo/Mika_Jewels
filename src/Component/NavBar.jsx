import React, { useState } from 'react';
import logo from "../assets/image/logo.webp"
import { NavLink } from 'react-router-dom';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
import { HiMenuAlt2 } from 'react-icons/hi';
import { RxCross1 } from 'react-icons/rx';

const NavBar = () => {
    const [status, setStatus] = useState("hidden");

    const toggle = (paraStatus) => {
        setStatus(paraStatus);
    };

    const linkClasses = ({ isActive }) =>
        isActive
            ? 'relative inline-block after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-300'
            : 'relative inline-block after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full';

    return (
        <div className="bg-[#000000] text-white relative">
            <div className="flex items-center justify-between lg:w-9/12 w-10/12 mx-auto py-5">
                <div className='flex items-center gap-5 md:gap-0'>
                    <div>
                        <HiMenuAlt2
                            className='text-4xl hover:text-[#9194AC] md:hidden cursor-pointer'
                            onClick={() => toggle("block")}
                        />
                    </div>
                    <NavLink to="/">
                        <img className='md:w-37 w-30' src={logo} alt="Logo" />
                    </NavLink>
                </div>
                <div className="hidden md:block">
                    <div className="maven-pro-font flex items-center gap-10 lg:text-lg text-sm">
                        <NavLink to="/" className={linkClasses}>Home</NavLink>
                        <NavLink to="/shop" className={linkClasses}>Shop</NavLink>
                        <NavLink to="/blog" className={linkClasses}>Blog</NavLink>
                        <NavLink to="/about" className={linkClasses}>About</NavLink>
                        <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
                    </div>
                </div>
                <div className="flex items-center gap-5 text-2xl">
                    <FaRegHeart />
                    <MdShoppingCart />
                    <FaRegUser />
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${status} absolute z-50 top-0 bg-black h-screen w-96 rounded-r-4xl p-8`}>
                <div className="flex items-center justify-between border-b border-gray-700 pb-3">
                    <h4 className='text-2xl'>Menu</h4>
                    <RxCross1 className='text-4xl cursor-pointer' onClick={() => toggle("hidden")} />
                </div>
                <div className="flex items-center justify-between border-b border-gray-700 py-2">
                    <NavLink to="/" className="maven-pro-font text-2xl" onClick={() => toggle("hidden")}>Home</NavLink>
                </div>
                <div className="flex items-center justify-between border-b border-gray-700 py-2">
                    <NavLink to="/shop" className="maven-pro-font text-2xl" onClick={() => toggle("hidden")}>Shop</NavLink>
                </div>
                <div className="flex items-center justify-between border-b border-gray-700 py-2">
                    <NavLink to="/blog" className="maven-pro-font text-2xl" onClick={() => toggle("hidden")}>Blog</NavLink>
                </div>
                <div className="flex items-center justify-between border-b border-gray-700 py-2">
                    <NavLink to="/about" className="maven-pro-font text-2xl" onClick={() => toggle("hidden")}>About</NavLink>
                </div>
                <div className="flex items-center justify-between border-b border-gray-700 py-2">
                    <NavLink to="/contact" className="maven-pro-font text-2xl" onClick={() => toggle("hidden")}>Contact</NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
