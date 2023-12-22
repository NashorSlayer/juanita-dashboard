export interface Boleta {
    Boleta: string;
    Productos: Producto[];
    PrecioTotal: number;
    A_o: number;
    Mes: number;
    id: string;
}

export interface Facturas {
    Proveedor: Proveedor;
    Productos: Producto;
    cantidad: number;
    precioUnitario: number;
    PrecioTotal: number;
    A_o: number;
    Mes: number;
    id: string;
}

export interface Inventario {
    identificador: string;
    Cantidad: number;
    A_o: number;
    Mes: number;
    id: string;

}


export interface Precios {
    identificador: string;
    precio: number;
    A_o: number;
    Mes: number;
    id: string;
}

export interface Producto {
    ID: string;
    Categor_a: string;
    SubCategor_a: string;
    Nombre: string;
}

export interface Proveedor {

}

