'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import GraficoLinea from '../components/GraficoLinea';
import TableInventory from '../components/TableInventory';


const InventarioPage = () => {
    const [inventarios, setInventario] = useState([]);


    useEffect(() => {
        const getInventario = async () => {
            const response = await axios.get('http://localhost:3000/api/Inventario');
            setInventario(response.data);
        };
        getInventario();
    }, []);

    return (
        <div>
            <GraficoLinea
                data={inventarios}
                index={"Identificador"}
                categories={["Cantidad"]}
                title={"Inventario"}
            />
            <TableInventory
                title='Inventario'
                data={inventarios}
            />
        </div>
    );
};

export default InventarioPage;