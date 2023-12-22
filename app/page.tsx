"use client"
import GraficoBarra from './components/GraficoBarra';
import axios from 'axios';
import { useState, useEffect } from 'react';




const Home: React.FC = () => {
  const [facturas, setFacturas] = useState([]);

  useEffect(() => {

    const getFacturas = async () => {
      const response = await axios.get('http://localhost:3000/api/Facturas');
      setFacturas(response.data);

    };

    getFacturas();

  }, []);
  return (
    <>
      <GraficoBarra
        data={facturas}
        index={"Proveedor"}
        categories={["Cantidad", "Producto"]}
        title={"Proveedores vs Productos"}

      ></GraficoBarra>
    </>
  )
}

export default Home;