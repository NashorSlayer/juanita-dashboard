import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/react";
import Link from "next/link";
import ThemeSwitchMode from "./SwitchThemeMode";

const ShowNavBar: React.FC = () => {
    return (
        <Navbar className="background-color-white">
            <NavbarBrand>
                <Link

                    className="font-bold text-inherit"
                    href="/"> JuanitaShop</Link>
            </NavbarBrand>
            <NavbarContent>
                <Link
                    color="foreground"
                    href="/Boletas">
                    Boletas
                </Link>
            </NavbarContent>
            <NavbarContent>
                <Link href="/Facturas">
                    Facturas
                </Link>
            </NavbarContent>
            <NavbarContent>
                <Link href="/Precio">
                    Precios
                </Link>
            </NavbarContent>
            <NavbarContent>
                <Link href="/Inventario">
                    Inventario
                </Link>
            </NavbarContent>
            <NavbarContent>
                <Link href="/Proveedores">
                    Proveedores
                </Link>
            </NavbarContent>
            <NavbarContent>
                <Link href="/Producto">
                    Productos
                </Link>
            </NavbarContent>
            <ThemeSwitchMode />
        </Navbar>
    );
};
export default ShowNavBar;