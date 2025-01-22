"use client"

import { useState, useEffect } from "react";
import { productos } from "../mock/productos";

export default function Productos() {
    const [filtroProductos, setFiltroProductos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        setFiltroProductos(productos)
    }, []);

    const handleFilter = () => {
        if (selectedCategory) {
            const filtered = productos.filter(producto => producto.category === selectedCategory)
            setFiltroProductos(filtered)
        } else {
            setFiltroProductos(productos)
        }
    }


    console.log(filtroProductos)
    return (
        <main className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Productos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filtroProductos.map(producto => (
                    <div key={producto.id} className="border rounded-lg p-4 shadow-md">
                        <h2 className="text-xl font-semibold">{producto.title}</h2>
                        <p className="text-gray-600">{producto.category}</p>
                        <p className="text-lg font-bold">${producto.price}</p>
                        <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
                        aria-label="Agregar al carrito">
                            Agregar al carrito
                        </button>
                    </div>  
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <select 
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">Todas</option>
                    {Array.from(new Set(productos.map(producto => producto.category))).map((category, index) => (  
                        <option key={index} value={category}>{category}</option>
                        ))}
                </select>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={handleFilter}>
                    Filtrar
                </button>
            </div>
        </main>
    )
}

