import React from 'react';
import logo from "../assets/image/logo.webp"
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaFacebookF, FaPhoneAlt, FaTiktok, FaTwitter } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';
import { GrInstagram } from 'react-icons/gr';
const Footer = () => {
    return (
        <div>
            <div className="bg-black text-white mt-10">
                <div className="w-8/12 mx-auto py-10">
                    <div className="lg:hidden mb-5">
                        <img src={logo} alt="" />
                        <h1 className='julius-sans-one-font mt-2 text-2xl'><span className='maven-pro-font font-bold'>Mika</span> Jewels ltd.</h1>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start">
                        <div className="hidden lg:block">
                            <img src={logo} alt="" />
                            <h1 className='julius-sans-one-font mt-2 text-2xl'><span className='maven-pro-font font-bold'>Mika</span> Jewels ltd.</h1>
                        </div>
                        <div className="flex justify-between w-9/12 md:w-auto mb-5">
                            <div className="julius-sans-one-font flex flex-col gap-2">
                                <p className='text-xl font-semibold border-b text-gray-500'>Pages</p>
                                <NavLink to={"/"}>Home</NavLink>
                                <NavLink to={"/shop"}>SHOP</NavLink>
                                <NavLink to={"/blog"}>BLOG</NavLink>
                                <NavLink to={"/about"}>ABOUT</NavLink>
                                <NavLink to={"/contact"}>CONTACT</NavLink>
                            </div>
                            <div className="julius-sans-one-font flex flex-col gap-2 md:hidden">
                                <p className='text-xl font-semibold border-b text-gray-500'>Categories</p>
                                <NavLink to={"/"}>diamond</NavLink>
                                <NavLink to={"/shop"}>pendant</NavLink>
                                <NavLink to={"/blog"}>white perl</NavLink>
                                <NavLink to={"/about"}>gold</NavLink>
                            </div>
                        </div>
                        <div className=" hidden md:block">
                            <div className="julius-sans-one-font flex flex-col gap-2">
                                <p className='text-xl font-semibold border-b text-gray-500'>Categories</p>
                                <NavLink to={"/"}>diamond</NavLink>
                                <NavLink to={"/shop"}>pendant</NavLink>
                                <NavLink to={"/blog"}>white perl</NavLink>
                                <NavLink to={"/about"}>gold</NavLink>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className='text-xl font-semibold border-b text-gray-500'>Contact</p>
                            <p className=''>Main Road, Block - A, Banashee, Rampura, Dhaka - 1212</p>
                            <div className="flex items-center gap-2">
                                <FaPhoneAlt />
                                <p>+880 1648438489</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <LuMail />
                                <p>ebrahimislam2003@gmail.com</p>
                            </div>
                            <img src="https://www.pngplay.com/wp-content/uploads/8/Payment-Method-Download-Free-PNG.png" className='w-80' alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-8/12 mx-auto border-t border-gray-500 py-4 flex justify-between">
                    <div className="">
                        <p>Copyright © 2025 by <a href="">MD.Ebrahim Islam Shuvo</a></p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaFacebookF className=' hover:text-gray-400 hover:-translate-y-1 duration-700' />
                        <FaTwitter className=' hover:text-gray-400 hover:-translate-y-1 duration-700' />
                        <GrInstagram className=' hover:text-gray-400 hover:-translate-y-1 duration-700' />
                        <FaTiktok className=' hover:text-gray-400 hover:-translate-y-1 duration-700' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;