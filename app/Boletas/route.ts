import { NextResponse, NextRequest } from 'next/server';

export const GET = async (req: NextRequest, res: NextResponse) => {
    const { id } = req.query;
    const boleta = await fetchBoleta(id);
    res.json(boleta);
}
