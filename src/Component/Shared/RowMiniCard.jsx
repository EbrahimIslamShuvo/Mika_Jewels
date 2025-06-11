import React, { useState } from 'react';
import { FaRegEye, FaRegHeart, FaPlus, FaMinus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const RowMiniCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    const subtotal = product.price * quantity;

    return (
        <div className="relative group">
            <div className="px-5 py-2 flex gap-8 w-80 bg-white border border-gray-400">
                {/* Image + Icons */}
                <div className="relative w-30 h-28 overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src={product.product_image}
                        alt={product.name}
                    />

                    {/* Hover Icons */}
                    <div className="absolute top-0 left-0 w-full h-full flex gap-2 justify-center items-center z-20">
                        <div
                            className="bg-black text-white p-2 text-xl opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500 cursor-pointer"
                            onClick={() => document.getElementById(`modal-${product.id}`).showModal()}
                            title="Quick View"
                        >
                            <FaRegEye />
                        </div>
                    </div>
                </div>

                {/* Product Info */}
                <NavLink to={`/shop/${product.id}`}>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl font-bold">{product.name}</h1>
                        <p className=""><span className="font-semibold text-lg">Price:</span> ${product.price} USD</p>
                    </div>
                </NavLink>
            </div>

            {/* Modal */}
            <dialog id={`modal-${product.id}`} className="modal">
                <div className="modal-box max-w-3xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="flex flex-col md:flex-row gap-5 w-full">
                        <div className="w-full md:w-1/2">
                            <img className="w-full h-auto" src={product.product_image} alt={product.name} />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h1 className="text-3xl font-bold">{product.name}</h1>
                            <p className="mt-4 text-lg text-gray-500">{product.short_description}</p>
                            <p className="text-xl mt-2"><span className="font-semibold">Price:</span> ${product.price} USD</p>
                            <p className="text-xl mt-2"><span className="font-semibold">Size:</span> {product.size}</p>
                            <div className="flex justify-between mt-2">
                                <p className="text-xl"><span className="font-semibold">Metal:</span> {product.metal}</p>
                                <p className="text-xl"><span className="font-semibold">Movement:</span> {product.movement}</p>
                            </div>

                            {/* Quantity Control */}
                            <div className="flex items-center mt-4">
                                <div className="border px-4 py-3 bg-gray-200 border-gray-300 cursor-pointer" onClick={handleDecrease}>
                                    <FaMinus />
                                </div>
                                <p className="border-x px-6 py-[7px] bg-gray-200 text-xl border-gray-500">{quantity}</p>
                                <div className="border px-4 py-3 bg-gray-200 border-gray-300 cursor-pointer" onClick={handleIncrease}>
                                    <FaPlus />
                                </div>
                            </div>

                            {/* Subtotal */}
                            <p className="text-xl my-3">
                                <span className="font-semibold">Sub-Total:</span> ${subtotal.toFixed(2)} USD
                            </p>
                            <button
                                className="bg-black text-white text-lg px-5 py-3"
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

export default RowMiniCard;
