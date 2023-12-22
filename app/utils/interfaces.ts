export interface Boleta {
    Boleta: string;
    Productos: string[];
    PrecioTotal: number;
    A_o: number;
    Mes: number;
    id: number;
}

export interface Facturas {
    Proveedor: string;
    Productos: string;
    Cantidad: number;
    Precio_Unitario: number;
    Precio_Total: number;
    A_o: number;
    Mes: number;
    id: number;
}

export interface Inventario {
    identificador: string;
    Cantidad: number;
    A_o: number;
    Mes: number;
    id: number;
}


export interface Precios {
    Identificador: string;
    Precio: number;
    A_o: number;
    Mes: number;
    id: number;
}

export interface Producto {
    ID: string;
    Categor_a: string;
    Sub_categor_a: string;
    Nombre: string;
}

export interface Proveedor {
    ID: string;
    Proveedor: string;
    Contacto_comercial: string;
    Email: string;
    Tel_fono: string;
}

