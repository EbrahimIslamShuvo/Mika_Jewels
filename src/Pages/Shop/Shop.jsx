import React, { useState, useMemo } from 'react';
import useProduct from '../../Data/useProduct';
import MiniCard from '../../Component/Shared/MiniCard';
import DropDown from '../../Component/Shared/DropDown';

const Shop = () => {
    const { products } = useProduct();

    // Sorting state
    const [sortOption, setSortOption] = useState('');
    // Filters state
    const [selectedMetal, setSelectedMetal] = useState('All');
    const [selectedMovement, setSelectedMovement] = useState('All');

    // Filtered products based on Metal and Movement (Category)
    const filteredProducts = useMemo(() => {
        if (!products) return [];

        return products.filter(product => {
            const metalMatch = selectedMetal === 'All' || product.metal === selectedMetal;
            const movementMatch = selectedMovement === 'All' || product.movement === selectedMovement;
            return metalMatch && movementMatch;
        });
    }, [products, selectedMetal, selectedMovement]);

    // Then sort the filtered products
    const sortedProducts = useMemo(() => {
        const sorted = [...filteredProducts];
        switch (sortOption) {
            case 'A to Z':
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            case 'Z to A':
                return sorted.sort((a, b) => b.name.localeCompare(a.name));
            case 'Price Low to High':
                return sorted.sort((a, b) => a.price - b.price);
            case 'Price High to Low':
                return sorted.sort((a, b) => b.price - a.price);
            case 'Publish Date':
                return sorted.sort((a, b) => new Date(b.added_date) - new Date(a.added_date));
            case 'Best Selling':
                return sorted.sort((a, b) => b.sold_quantity - a.sold_quantity);
            default:
                return sorted;
        }
    }, [filteredProducts, sortOption]);

    // Options arrays for easier map rendering and DRY
    const metals = ['All', 'diamond', 'pendant', 'white perl', 'gold'];
    const movements = ['All', 'necklace', 'ring', 'earrings', 'bracelet', 'bangle'];

    return (
        <div className="">
            {/* Header */}
            <div className="sticky top-21 h-fit relative z-48 bg-white pt-7 pb-2">
                <div className="w-11/12 md:w-10/12 mx-auto flex justify-between gap-4 md:gap-0 mb-5">
                    <p className='julius-sans-one-font text-2xl md:text-4xl font-bold text-center md:text-left'>
                        ALL your desire Product
                    </p>
                    <div className="maven-pro-font flex items-center gap-3 md:gap-10">
                        <p className='text-lg md:text-xl'>Filter By:</p>
                        <DropDown label="Sort By">
                            <p onClick={() => setSortOption('Z to A')}>Z to A</p>
                            <p onClick={() => setSortOption('A to Z')}>A to Z</p>
                            <p onClick={() => setSortOption('Price High to Low')}>Price High to Low</p>
                            <p onClick={() => setSortOption('Price Low to High')}>Price Low to High</p>
                            <p onClick={() => setSortOption('Publish Date')}>Publish Date</p>
                            <p onClick={() => setSortOption('Best Selling')}>Best Selling</p>
                        </DropDown>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row gap-10">
                {/* Sidebar Filters */}
                <div className="w-full md:w-3/12 lg:w-2/12 flex flex-col gap-6 md:sticky lg:sticky top-45 h-fit">
                    {/* Metal Filter */}
                    <div className="bg-gray-300 px-5 py-4 rounded-lg flex flex-col gap-3 maven-pro-font">
                        <h1 className='text-2xl md:text-3xl font-semibold border-b-2'>Metal</h1>
                        {metals.map(metal => (
                            <p
                                key={metal}
                                onClick={() => setSelectedMetal(metal)}
                                className={`border px-3 py-1 text-base md:text-xl rounded-lg cursor-pointer
                                    ${selectedMetal === metal
                                        ? 'bg-black text-white border-black shadow-lg'
                                        : 'bg-gray-400 border-gray-400 text-white hover:bg-gray-300 hover:text-black hover:shadow'
                                    }
                                `}
                            >
                                {metal}
                            </p>
                        ))}
                    </div>

                    {/* Movement Filter (Category) */}
                    <div className="bg-gray-300 px-5 py-4 rounded-lg flex flex-col gap-3 maven-pro-font">
                        <h1 className='text-2xl md:text-3xl font-semibold border-b-2'>Category</h1>
                        {movements.map(movement => (
                            <p
                                key={movement}
                                onClick={() => setSelectedMovement(movement)}
                                className={`border px-3 py-1 text-base md:text-xl rounded-lg cursor-pointer
                                    ${selectedMovement === movement
                                        ? 'bg-black text-white border-black shadow-lg'
                                        : 'bg-gray-400 border-gray-400 text-white hover:bg-gray-300 hover:text-black hover:shadow'
                                    }
                                `}
                            >
                                {movement}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="w-full md:w-9/12 lg:w-10/12">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {sortedProducts.length === 0 && (
                            <p className="text-center text-lg col-span-full">No products found.</p>
                        )}
                        {sortedProducts.map(product => (
                            <MiniCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
