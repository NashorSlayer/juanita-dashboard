'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import { Producto } from "../utils/interfaces";
import GraficoLinea from "../components/GraficoLinea";
import TableProductos from "../components/TableProductos";

const ProductoPage = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getProductos = async () => {
            const response = await axios('http://localhost:3000/api/Producto');
            setProductos(response.data);
        };
        getProductos();
    }, []);


    return (
        <>
            <TableProductos
                data={productos}
            />
        </>
    );
}
export default ProductoPage;