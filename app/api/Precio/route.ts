import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '../prismaClient';

export const GET = async (req: NextRequest, res: NextRequest) => {
    const precios = await prisma.precios.findMany({
        take: 100,
        where: {
            A_o: "2006"
        }
    });
    return NextResponse.json(precios);
}