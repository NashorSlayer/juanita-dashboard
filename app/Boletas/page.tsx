'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Boleta } from '../utils/interfaces'
import GraficoLinea from '../components/GraficoLinea';

const BoletasPage = () => {
    const [boletas, setBoletas] = useState([]);


    useEffect(() => {
        const getBoletas = async () => {
            const response = await axios.get('http://localhost:3000/api/Boleta');
            setBoletas(response.data);
        };

        getBoletas();
    }, []);

    return (
        <div>
            <GraficoLinea
                data={boletas}
                index={"Boleta"}
                categories={["Precio_Total"]}
                title={"Boletas"}
            />
        </div>
    );
};

export default BoletasPage;
