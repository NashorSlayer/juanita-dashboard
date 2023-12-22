"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import { Proveedor } from "../utils/interfaces";
import GraficoLinea from "../components/GraficoLinea";
import TableProviders from "../components/TableProviders";

const ProductoPage = () => {
    const [proveedores, setProveedores] = useState([]);

    useEffect(() => {
        const getFacturas = async () => {
            const response = await axios.get('http://localhost:3000/api/Proveedores');
            setProveedores(response.data);

        };

        getFacturas();

    }, []);
    console.log(proveedores);
    return (
        <div>
            <TableProviders data={proveedores} />

        </div>
    );
}
export default ProductoPage;