import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '../prismaClient';

export const GET = async (req: NextRequest, res: NextResponse) => {
    const boletas = await prisma.boletas.findMany({
        take: 10,
    });
    return NextResponse.json(boletas);
}


