"use client"
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-2xl mt-4">Page not found</p>
            <button onClick={() => router.back()} className="mt-6 text-blue-600 hover:underline">Back</button>
        </div>
    )
}

export default NotFoundPage;