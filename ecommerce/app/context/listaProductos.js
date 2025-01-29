import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "@/firebase/config";

export const fetchProducts = async () => {
    try {
        const productsCollection = collection(db, "productos");
        const querySnapshot = await getDocs(productsCollection);
        const products = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        console.log("Productos obtenidos:", products); // Depuración
        return products;
    } catch (error) {
        console.error("Error al obtener los productos: ", error);
        return []; // Devuelve un array vacío en caso de error
    }
};

export const getProductsByCategory = async (category) => {
    try {
        const productsCollection = collection(db, "productos");
        const q = query(productsCollection, where("category", "==", category));
        const productsSnapshot = await getDocs(q);

        const filteredProducts = productsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        console.log("Productos filtrados por categoría:", filteredProducts); // Depuración
        return filteredProducts;
    } catch (error) {
        console.error("Error filtrando productos por categoría:", error);
        return []; // Devuelve un array vacío en caso de error
    }
};