import React from 'react';
import Hero from './Component/Hero';
import Category from './Component/Category';
import Add from './Component/Add';
import NewArrival from './Component/NewArrival';
import AllProduct from './Component/AllProduct';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Category></Category>
            <NewArrival></NewArrival>
            <Add></Add>
            <AllProduct></AllProduct>
        </div>
    );
};

export default Home;