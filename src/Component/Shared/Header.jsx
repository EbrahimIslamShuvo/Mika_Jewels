import React from 'react';

const Header = ({name}) => {
    return (
        <div>
            <div className=" text-center text-5xl mt-20 mb-15 julius-sans-one-font">
                <p>{name}</p>
            </div>
        </div>
    );
};

export default Header;