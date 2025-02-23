"use client";

import React from "react";
import { useProducts } from "../context/productContext";
import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchProducts, getProductsByCategory } from "./listaProductos";

const Products = () => {

    const { filteredProducts } = useProducts();


    if (!filteredProducts || filteredProducts.length === 0) {
        return <p className="text-center text-gray-600">Cargando productos...</p>;
    }


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80">
                    <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-80 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-xl text-gray-800 mb-2">${product.price}</p>
                    <button
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Agregar al carrito
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;