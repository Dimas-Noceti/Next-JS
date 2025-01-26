"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { productos } from "../mock/productos";
import CatalogoList from "./catalogoList";

const CategoryPage = () => {
    const router = useRouter();
    const { category } = router.query;
    const [filtroProductos, setFiltroProductos] = useState()

    useEffect(() => {
        const productosFiltrados = productos.filter(producto => producto.category === category);
        setFiltroProductos(productosFiltrados);
    }, [category]);

    return (
        <div>
            <h1>CategoryPage</h1>
            <p>Category: {category}</p>
            <CatalogoList products={filtroProductos} />
        </div>
    )
}

export default CategoryPage;