import React from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegEye, FaRegHeart } from "react-icons/fa";

const MiniCard = ({ product }) => {
    return (
        <div data-aos="zoom-in">
            <div className="w-[242px] flex flex-col gap-2 text-[15px] maven-pro-font bg-white  duration-300">

                {/* Image & Hover Effects */}
                <div className="relative group overflow-hidden rounded-t-xl">
                    <img
                        className='w-[242px] h-[242px] object-cover'
                        src={product.product_image}
                        alt={product.name}
                    />

                    {/* Diagonal Hover Shade */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 z-10" />

                    {/* Hover Icons */}
                    <div className="absolute top-0 left-0 w-full h-full flex gap-2 justify-center items-center z-20">
                        <div
                            className="bg-black text-white p-2 text-xl opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500 cursor-pointer"
                            onClick={() => document.getElementById(`${product.id}`).showModal()}
                        >
                            <FaRegEye />
                        </div>
                        <div
                            className="bg-black text-white p-2 text-xl opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition duration-700 cursor-pointer"
                        >
                            <FaRegHeart />
                        </div>
                    </div>
                </div>

                {/* Product Info */}
                <div className="px-2 pb-3">
                    <div className="flex items-start justify-between border-b py-2 border-gray-300">
                        <p className='font-semibold'>{product.name}</p>
                        <MdOutlineShoppingBag className='text-xl' />
                    </div>
                    <p className="text-gray-700 mt-1">${product.price}</p>
                </div>
            </div>

            {/* Modal for Quick View */}
            <dialog id={product.id} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="">
                        <h1>{product.name}</h1>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MiniCard;
