import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '../prismaClient';

export const GET = async (req: NextRequest, res: NextResponse) => {
    const boletas = await prisma.boletas.findMany({
        take: 100,
        where: {
            A_o: "2005"
        }
    });
    return NextResponse.json(boletas);
}


