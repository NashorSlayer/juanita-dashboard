"use client"

import axios from "axios";
import { useState, useEffect } from "react";
import GraficoLinea from "../components/GraficoLinea";

const PrecioPage = () => {
    const [precios, setPrecios] = useState([]);

    useEffect(() => {
        const getPrecios = async () => {
            const response = await axios.get('http://localhost:3000/api/Precio');
            setPrecios(response.data);
        };

        getPrecios();

    }, []);
    return (
        <div>
            <GraficoLinea
                data={precios}
                index={"Identificador"}
                categories={["Precio"]}
                title={"Precios"}
            />
        </div>
    );
}
export default PrecioPage;