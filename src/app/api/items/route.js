import { NextResponse } from 'next/server'

export async function GET() {

    const data = {
        id: 123
    }

    return NextResponse.json({ data })
}