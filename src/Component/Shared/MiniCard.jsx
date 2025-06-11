import React, { useState } from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaMinus, FaPlus, FaRegEye, FaRegHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const MiniCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        setQuantity(prev => Math.max(1, prev - 1));
    };

    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
    };

    const subtotal = product.price * quantity;

    return (
        <div data-aos="zoom-in">
            <NavLink to={`/shop/${product.id}`}>
                <div className="w-[242px] flex flex-col gap-2 text-[15px] maven-pro-font bg-white duration-300">

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
                                onClick={() => document.getElementById(`modal-${product.id}`).showModal()}
                                title="Quick View"
                            >
                                <FaRegEye />
                            </div>
                            <div
                                className="bg-black text-white p-2 text-xl opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition duration-700 cursor-pointer"
                                onClick={() => console.log(`Added to wishlist: ${product.name}`)}
                                title="Add to Wishlist"
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
            </NavLink>

            {/* Modal for Quick View */}
            <dialog id={`modal-${product.id}`} className="modal">
                <div className="modal-box max-w-3xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="flex flex-col md:flex-row gap-5 w-full">
                        <div className="w-full md:w-1/2">
                            <img className='w-full h-auto' src={product.product_image} alt={product.name} />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h1 className='text-3xl font-bold'>{product.name}</h1>
                            <p className='mt-4 text-lg text-gray-500'>{product.short_description}</p>
                            <p className='text-xl mt-2'><span className='font-semibold'>Price:</span> ${product.price} USD</p>
                            <p className='text-xl mt-2'><span className='font-semibold'>Size:</span> {product.size}</p>
                            <div className="flex justify-between mt-2">
                                <p className='text-xl'><span className='font-semibold'>Metal:</span> {product.metal}</p>
                                <p className='text-xl'><span className='font-semibold'>Movement:</span> {product.movement}</p>
                            </div>

                            {/* Quantity Control */}
                            <div className="flex items-center mt-4">
                                <div className="border px-4.5 py-5 bg-gray-200 border-gray-200 cursor-pointer" onClick={handleDecrease}>
                                    <FaMinus />
                                </div>
                                <p className='border-x px-4.5 py-[15px] bg-gray-200 border-gray-200 border-x-gray-400 text-xl'>{quantity}</p>
                                <div className="border px-4.5 py-5 bg-gray-200 border-gray-200 cursor-pointer" onClick={handleIncrease}>
                                    <FaPlus />
                                </div>
                            </div>

                            {/* Subtotal and Button */}
                            <p className='text-xl my-3'>
                                <span className='font-semibold'>Sub-Total:</span> ${subtotal.toFixed(2)} USD
                            </p>
                            <button
                                className='bg-black text-white text-lg px-5 py-3'
                                onClick={() => console.log(`Added to cart: ${product.name} x${quantity}`)}
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MiniCard;
