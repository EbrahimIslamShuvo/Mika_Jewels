import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import cat1 from "../../../assets/image/cat1.webp";
import cat2 from "../../../assets/image/cat2.webp";
import cat3 from "../../../assets/image/cat3.webp";
import cat4 from "../../../assets/image/cat4.webp";
import Header from '../../../Component/Shared/Header';

const categories = [
    { image: cat1, label: "DIAMOND" },
    { image: cat2, label: "PENDANT" },
    { image: cat3, label: "WHITE PERL" },
    { image: cat4, label: "GOLD" },
];

const Category = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <div>
            <Header name={"SHOP BY CATEGORY"} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-9/12 mx-auto place-items-center">
                {categories.map((cat, index) => (
                    <NavLink key={index}>
                        <div
                            className="group relative overflow-hidden max-w-[320px]"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <img src={cat.image} alt={cat.label} className="w-full h-80 object-cover" />

                            <div className="absolute bottom-10 left-5 bg-white group-hover:bg-[#9194AB] text-black w-70 text-center py-3 text-xl font-semibold z-20">
                                <p className='julius-sans-one-font'>{cat.label}</p>
                            </div>

                            <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10 hidden group-hover:block duration-700"></div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Category;
