import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments, addDocuments, getDocuments } from "../utils/firebase/firebase.utils.js";

// import SHOP_DATA from '../shop-data.js';

// const SHOP_DATA = {
//     name: 'samsung iphone',
//     imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
//     price: 25,
// };

export const ProductsContext = createContext({
    products: [],
    setCurrentProducts: () => {},
});

export const ProductsProvider = ({ children }) => {
    const [products, setCurrentProducts] = useState([]);

    // console.log(SHOP_DATA);

    useEffect(() => {

        const fun = async () => {
            const res = await getDocuments();
            setCurrentProducts(res);
        }
        fun();
        
        // addDocuments(SHOP_DATA);
    }, []);

        console.log(products);


    const value = { products, setCurrentProducts };

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};