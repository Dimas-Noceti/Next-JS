import { productos } from "../../mock/productos";


export default function CategoryPage ({ params }) {
    const { category } = params;
    const filteredProducts = productos.filter(producto => producto.category === category);
    return (
        <div>
            <h1>{category}</h1>
            {filteredProducts.map(producto => 
            <div key={producto.id}>
                {producto.title}
            </div>
            )}
        </div>
    );
}

