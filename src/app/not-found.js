import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
            <h1 className="text-6xl font-bold text-blue-500">404</h1>
            <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
            <p className="text-gray-400 mt-2 text-center">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link
                href="/"
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Return Home
            </Link>
        </div>
    );
}