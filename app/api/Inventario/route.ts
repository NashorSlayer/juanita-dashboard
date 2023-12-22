import { NextResponse } from 'next/server';
import { prisma } from '../prismaClient';

export const GET = async () => {
    const inventario = await prisma.inventario.findMany({
        take: 100,
        where: {
            Mes: "Enero",
            A_o: "2007"
        }
    });
    return NextResponse.json(inventario);


}
