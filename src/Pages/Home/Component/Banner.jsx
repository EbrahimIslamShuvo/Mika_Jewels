import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="w-9/12 mx-auto mt-15">
                <div className="bg-black/65 julius-sans-one-font text-white text-center lg:px-45 md:px-20 px-7 py-15 flex flex-col lg:gap-10 gap-5">
                    <h1 className='lg:text-7xl md:text-4xl text-2xl '>Free Shipping On Store All Items Collection</h1>
                    <p className='lg:text-2xl md:text-base text-sm'>this offer is valid on all our store items or all our collection shopping items</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;