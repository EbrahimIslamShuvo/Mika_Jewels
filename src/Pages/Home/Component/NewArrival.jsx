import React, { useEffect } from 'react';
import Header from '../../../Component/Shared/Header';
import useProduct from '../../../Data/useProduct';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import MiniCard from '../../../Component/Shared/MiniCard';
import "../Component/CSS/new_arrival.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function NewArrival() {
    const { products } = useProduct();

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    const feature_products = (products?.sort((a, b) =>
        new Date(b.added_date) - new Date(a.added_date))
    ).slice(0, 7);

    return (
        <div className='w-9/12 mx-auto'>
            <Header name={"New arrivals"} />
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 40 },
                    1024: { slidesPerView: 4, spaceBetween: 50 },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {feature_products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <div data-aos="zoom-in">
                            <MiniCard product={product} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
