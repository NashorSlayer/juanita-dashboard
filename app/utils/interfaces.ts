export interface Boleta {
    id: string;
    codigo: string;
    productos: Producto[];
    total: number;
    dia: number;
    mes: number;
    anio: number;
}

export interface Facturas {
    Proveedor: Proveedor;
    Productos: Producto;
    cantidad: number;
    precioUnitario: number;
    PrecioTotal: number;
}

export interface Inventario {

}


export interface Precios {
    identificador: string;
    precio: number;
}

export interface Producto {

}

export interface Proveedor {

}

