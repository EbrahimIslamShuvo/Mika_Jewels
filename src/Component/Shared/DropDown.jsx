import React, { useState } from 'react';

const DropDown = ({ children, label = "Select" }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300"
                onClick={() => setOpen(!open)}
            >
                {label}
            </button>
            {open && (
                <div className="absolute z-50 mt-2 w-48 bg-white border rounded shadow">
                    <div
                        onClick={() => setOpen(false)}
                        className="flex flex-col cursor-pointer"
                    >
                        {React.Children.map(children, (child) => (
                            <div className="hover:bg-gray-100 px-4 py-2 border-b last:border-b-0">
                                {child}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropDown;
