import {
    Badge,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Text,
    Title,
} from "@tremor/react";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import { Proveedor } from "../utils/interfaces";
type Props = {
    data: Proveedor[]
}


const TableProviders: React.FC<Props> = ({ data }) => {
    return (

        <Card>
            <Title>Proveedores</Title>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Proveedor</TableHeaderCell>
                        <TableHeaderCell>Contacto Comercial</TableHeaderCell>
                        <TableHeaderCell>Email</TableHeaderCell>
                        <TableHeaderCell>Telefono</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item: Proveedor) => (
                        <TableRow key={item.ID}>
                            <TableCell>{item.Proveedor}</TableCell>
                            <TableCell>
                                <Text>{item.Contacto_comercial}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.Email}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.Tel_fono}</Text>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>


    );
};

export default TableProviders;