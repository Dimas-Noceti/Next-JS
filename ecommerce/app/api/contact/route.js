import { NextResponse } from "next/server";


export async function POST(request) {
    const formData = await request.json();
    console.log(formData)
    const name = formData.name;
    const message = formData.message;
    const email = formData.email
    return NextResponse.json({message: `Nombre: ${name}, email: ${email}, mensaje: ${message}`})
}
