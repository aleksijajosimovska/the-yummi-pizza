import React, { createContext, useState } from 'react';
import { typesOfPizza } from '../services/useful';
export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {

    const [products] = useState(typesOfPizza);

    return ( 
        <ProductsContext.Provider value={{products}} >
            { children }
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;