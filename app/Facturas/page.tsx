"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import GraficoLinea from "../components/GraficoLinea";

const FacturasPage = () => {
    const [facturas, setFacturas] = useState([]);

    useEffect(() => {
        const getFacturas = async () => {
            const response = await axios.get('http://localhost:3000/api/Facturas');
            setFacturas(response.data);

        };

        getFacturas();

    }, []);
    return (
        <div>
            <GraficoLinea
                data={facturas}
                index={"id"}
                categories={["Precio_Total", "Proveedor"]}
                title="Facturas"
            />
        </div>
    );
}
export default FacturasPage;


