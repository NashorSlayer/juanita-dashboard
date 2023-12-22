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
import { Inventario } from "../utils/interfaces";
import { title } from "process";
type Props = {
    data: Inventario[]
    title: string
}


const TableInventory: React.FC<Props> = ({ data, title }) => {
    return (

        <Card>
            <Title>{title}</Title>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Identidicador</TableHeaderCell>
                        <TableHeaderCell>Cantidad</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.identificador}</TableCell>
                            <TableCell>
                                <Text>{item.Cantidad}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.A_o}</Text>
                            </TableCell>
                            <TableCell>
                                <Badge color="emerald" icon={StatusOnlineIcon}>
                                    {item.Mes}
                                </Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>


    );
};

export default TableInventory;