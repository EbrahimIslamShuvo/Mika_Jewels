import React from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import hero1 from "../../../assets/image/hero1.webp";
import hero2 from "../../../assets/image/hero2.webp";
import hero3 from "../../../assets/image/hero3.webp";
import hero4 from "../../../assets/image/hero4.webp";
import slide1 from "../../../assets/image/s1.jpg";
import slide2 from "../../../assets/image/s2.jpg";
import slide3 from "../../../assets/image/s3.jpg";
import Button from '../../../Component/Shared/Button';

const Hero = () => {
    return (
        <div className="mt-5 w-full">
            <div className="flex flex-col lg:flex-row items-stretch gap-5 w-11/12 mx-auto">
                <div className="flex flex-col md:flex-row lg:flex-col mx-auto lg:mx-0 lg:gap-5 gap-8.5 flex-[2]">
                    <div className=" relative">
                        <img className='w-[338px] h-[338px]' src={hero1} alt="" />
                        <div className=" absolute top-0 text-white p-10">
                            <h1 className='julius-sans-one-font text-3xl'>BANGLES</h1>
                            <NavLink className={` maven-pro-font text-lg text-gray-500`}>View More</NavLink>
                        </div>
                    </div>
                    <div className=" relative">
                        <img className='w-[338px] h-[338px]' src={hero2} alt="" />
                        <div className=" absolute top-0 text-white p-10">
                            <h1 className='julius-sans-one-font text-3xl'>RING</h1>
                            <NavLink className={` maven-pro-font text-lg text-gray-500`}>View More</NavLink>
                        </div>
                    </div>
                </div>

                <div className="flex-[6]">
                    <Swiper
                        direction="vertical"
                        slidesPerView={1}
                        spaceBetween={30}
                        mousewheel={true}
                        pagination={{ clickable: true }}
                        modules={[Mousewheel, Pagination]}
                        className="lg:w-full lg:h-[695px] md:w-10/12 md:h-[400px] w-10/12 h-[300px] overflow-hidden"
                    >
                        <SwiperSlide>
                            <div className="relative w-full h-full">
                                <img className="w-full h-full object-cover" src={slide1} alt={`Slide1`} />
                                <div className="absolute top-1/2 md:right-20 right-15 transform -translate-y-1/2 text-end text-white flex flex-col items-end">
                                    <p className="julius-sans-one-font text-xl md:text-4xl lg:text-5xl leading-snug">
                                        <span className="text-[#BBACA4] text-2xl lg:block hidden">BE MIND . . .</span>
                                        <span className="text-[#BBACA4] text-sm lg:hidden">BE MIND ...</span><br />
                                        ROUND<br />
                                        DIAMOND<br />
                                        NECKLACE
                                    </p>
                                    <div className="mt-3 bg-[#9F4E45]">
                                        <Button color="#9F4E45" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-full">
                                <img className="w-full h-full object-cover" src={slide2} alt={`Slide2`} />
                                <div className="absolute md:top-20 md:left-20 top-10 left-10 text-start text-white flex flex-col items-start">
                                    <p className="julius-sans-one-font text-3xl md:text-3xl lg:text-5xl leading-snug text-[#F7DD8B]">
                                        SET YOUR<br />
                                        OWN TREND<br />
                                        <span className='text-white lg:text-8xl md:text-7xl'>50%</span> OFF
                                    </p>
                                    <div className="mt-3 bg-[#574F46]">
                                        <Button color="#574F46" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-full">
                                <img className="w-full h-full object-cover" src={slide3} alt={`Slide3`} />
                                <div className="absolute lg:top-50 top-25 lg:right-20 right-12 text-end text-white flex flex-col items-end">
                                    <p className="julius-sans-one-font text-xl md:text-3xl lg:text-5xl leading-snug">
                                        <span className='text-[#C51F3E] lg:text-7xl md:text-5xl text-2xl'>20%</span> OFF<br />
                                        NECHLACE<br />
                                        COLLECTION<br />
                                    </p>
                                    <div className="mt-3 bg-[#DE4E63]">
                                        <Button color="#DE4E63" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Right Column */}
                <div className="flex flex-col md:flex-row lg:flex-col mx-auto lg:mx-0 lg:gap-5 md:gap-8.5 gap-5 flex-[2]">
                    <div className=" relative">
                        <img className='w-[338px] h-[338px]' src={hero3} alt="" />
                        <div className=" absolute top-0 text-white p-10">
                            <h1 className='julius-sans-one-font text-3xl'>EARRING</h1>
                            <NavLink className={` maven-pro-font text-lg text-gray-500`}>View More</NavLink>
                        </div>
                    </div>
                    <div className=" relative">
                        <img className='w-[338px] h-[338px]' src={hero4} alt="" />
                        <div className=" absolute top-0 text-white p-10">
                            <h1 className='julius-sans-one-font text-3xl'>NECKLACE</h1>
                            <NavLink className={` maven-pro-font text-lg text-gray-500`}>View More</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
