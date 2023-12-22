'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Boleta } from '../utils/interfaces'

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
            <h1>Boletas</h1>
            <ul>
                {boletas.map((boleta: Boleta) => (
                    <li key={boleta.id}>
                        <h2>{boleta.Boleta}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BoletasPage;
