import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '../prismaClient';

export const GET = async (req: NextRequest, res: NextResponse) => {
    const facturas = await prisma.facturas.findMany({
        take: 100,
    });
    return NextResponse.json(facturas);
};