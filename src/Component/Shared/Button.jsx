import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({color}) => {
    return (
        <div>
            <div className={`bg-[${color}] md:px-7 md:py-4 px-2 py-2 text-sm md:text-base`}>
                <NavLink className="julius-sans-one-font">SHOP NOW</NavLink>
            </div>
        </div>
    );
};

export default Button;