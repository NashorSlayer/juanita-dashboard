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
import { Producto } from "../utils/interfaces";
type Props = {
    data: Producto[]
}


const TableProductos: React.FC<Props> = ({ data }) => {
    return (
        <Card>
            <Title>Productos</Title>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Nombre</TableHeaderCell>
                        <TableHeaderCell>Categoria</TableHeaderCell>
                        <TableHeaderCell>Sub-Categoria</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.ID}>
                            <TableCell>{item.ID}</TableCell>
                            <TableCell>
                                <Text>{item.Nombre}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.Categor_a}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.Sub_categor_a}</Text>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>


    );
};

export default TableProductos;