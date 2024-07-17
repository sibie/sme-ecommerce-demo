import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";

export const ProductContext = createContext(null);

const ProductContextProvider = (props) => {
    const contextValue = {all_product}

    return (
        <ProductContext.Provider value = {contextValue}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;