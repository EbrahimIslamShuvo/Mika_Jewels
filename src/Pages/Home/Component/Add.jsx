import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import add1 from "../../../assets/image/ad1.webp";
import add2 from "../../../assets/image/ad2.webp";
import add3 from "../../../assets/image/ad3.webp";

const Add = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 , once: false});
    }, []);

    const shadeClass = `
        relative 
        overflow-hidden 
        group 
        before:content-[''] 
        before:absolute 
        before:inset-0 
        before:bg-gradient-to-tr 
        before:from-black 
        before:to-transparent 
        before:opacity-0 
        hover:before:opacity-50 
        before:transition-opacity 
        before:duration-500
        before:z-10
    `;

    const imageClass = `w-full h-full object-cover relative z-0`;

    return (
        <div className="my-20 w-10/12 lg:w-full mx-auto">
            <div className="flex flex-col lg:flex-row justify-center gap-10">
                <div className={shadeClass} data-aos="fade-right">
                    <img className={imageClass} src={add1} alt="Ad 1" />
                </div>
                <div className="flex flex-col gap-7">
                    <div className={shadeClass} data-aos="fade-up">
                        <img className={imageClass} src={add2} alt="Ad 2" />
                    </div>
                    <div className={shadeClass} data-aos="fade-left">
                        <img className={imageClass} src={add3} alt="Ad 3" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;
