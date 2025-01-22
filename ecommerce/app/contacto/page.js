"use client"
import { useRouter } from "next/navigation"


export default function Contacto() {

    const router = useRouter();

    return (
        <div class="container mx-auto max-w-md p-8">
    <h1 class="text-3xl font-bold mb-8">Contáctanos</h1>
    <form id="contact-form" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Nombre:</label>
        <input type="text" id="name" name="name" required class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico:</label>
        <input type="email" id="email" name="email" required class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
      </div>
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">Mensaje:</label>
        <textarea id="message" name="message" required rows="4" class="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
      </div>
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
      <button 
      onClick={() => router.back()}
      className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded"
      aria-label="Volver"
      >
        Volver
      </button>
    </form>
  </div>
    )
}