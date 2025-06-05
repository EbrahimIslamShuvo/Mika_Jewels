import React, { useEffect } from 'react';
import Header from '../../../Component/Shared/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules'; // 👉 Import Autoplay
import MiniCard from '../../../Component/Shared/MiniCard';
import "../Component/CSS/new_arrival.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
import useBlog from '../../../Data/useBlog';
import BlogCard from '../../../Component/Shared/BlogCard';

export default function Blog() {
    const { blogs } = useBlog();

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <div className='w-9/12 mx-auto'>
            <Header name={"From The Blog"} />
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }} 
                breakpoints={{
                    640: { slidesPerView: 1.5, spaceBetween: 20 },
                    768: { slidesPerView: 1.5, spaceBetween: 40 },
                    1024: { slidesPerView: 2, spaceBetween: 50 },
                }}
                modules={[Pagination, Autoplay]} // 👉 Add Autoplay here
                className="mySwiper"
            >
                {blogs?.map((blog, index) => (
                    <SwiperSlide key={index}>
                        <div data-aos="zoom-in">
                            <BlogCard blog={blog} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
