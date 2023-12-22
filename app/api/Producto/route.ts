import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../prismaClient";



export const GET = async (req: NextRequest, res: NextResponse) => {
    const producos = await prisma.productos.findMany({
        take: 100,
    });
    return NextResponse.json(producos);
}