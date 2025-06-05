import React from 'react';
import Hero from './Component/Hero';
import Category from './Component/Category';
import Add from './Component/Add';
import NewArrival from './Component/NewArrival';
import AllProduct from './Component/AllProduct';
import Banner from './Component/Banner';
import BestSeller from './Component/BestSeller';
import Blog from './Component/Blog';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Category></Category>
            <NewArrival></NewArrival>
            <Add></Add>
            <AllProduct></AllProduct>
            <Banner></Banner>
            <BestSeller></BestSeller>
            <Blog></Blog>
        </div>
    );
};

export default Home;