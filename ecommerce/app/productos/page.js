"use client"

import { useState, useEffect } from "react";
import { productos } from "../mock/productos";

export default function Productos() {
    const [filtroProductos, setFiltroProductos] = useState([]);

    useEffect(() => {
        setFiltroProductos(productos)
    }, []);

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
                    </div>  
                ))}
            </div>
        </main>
    )
}

