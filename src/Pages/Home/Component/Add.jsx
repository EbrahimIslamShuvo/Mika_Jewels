import React from 'react';
import add1 from "../../../assets/image/ad1.webp"
import add2 from "../../../assets/image/ad2.webp"
import add3 from "../../../assets/image/ad3.webp"

const Add = () => {
    return (
        <div>
            <div className="">
                <div className="flex justify-center gap-10 my-20 group">
                    <div className=" relative overflow-hidden">
                        <img className='h-full' src={add1} alt="" />
                        <div className="h-5000 w-20 bg-white/40  absolute top-0 left-1/2 transform group-hover:translate"></div>
                    </div>
                    <div className="flex flex-col gap-7">
                        <img src={add2} alt="" />
                        <img src={add3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;