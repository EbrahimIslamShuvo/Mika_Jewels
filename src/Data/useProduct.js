import React, { useEffect, useState } from 'react';

const useProduct = () => {
    const [products, setProduct] = useState([])
    useEffect(()=>{
        fetch('/Product.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return {products}
};

export default useProduct;