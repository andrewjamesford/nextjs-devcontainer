import { NextResponse } from 'next/server'

export async function GET() {

    const data = {
        id: 123,
        name: "item 1"
    }

    return NextResponse.json(data)
}