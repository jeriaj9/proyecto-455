import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Mock data for initial development
const MOCK_PRODUCTS = [
    {
        id: "1",
        name: "Shaft 542 GT",
        description: "Full face helmet with aerodynamic design and superior ventilation.",
        image: "https://placehold.co/400x400?text=Shaft+542",
        price: "N/A"
    },
    {
        id: "2",
        name: "Shaft Pro 610",
        description: "Modular helmet for touring and city riding.",
        image: "https://placehold.co/400x400?text=Shaft+Pro",
        price: "N/A"
    },
    {
        id: "3",
        name: "Shaft MX 320",
        description: "Off-road helmet for extreme conditions.",
        image: "https://placehold.co/400x400?text=Shaft+MX",
        price: "N/A"
    },
    {
        id: "4",
        name: "Shaft Jet Custom",
        description: "Classic style with modern protection.",
        image: "https://placehold.co/400x400?text=Shaft+Jet",
        price: "N/A"
    },
];

export default function ShaftCatalogPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-black text-white py-8 px-8 sticky top-0 z-30 shadow-lg">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/shaft" className="flex items-center text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft className="mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-2xl font-bold uppercase tracking-wider">Shaft Catalog</h1>
                    <div className="w-24" /> {/* Spacer */}
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-12 px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {MOCK_PRODUCTS.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                            <div className="aspect-square bg-gray-200 relative">
                                {/* Normally we'd use next/image but stick to img for placehold.co simplicity */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                                <p className="text-gray-600 text-sm mb-6 flex-1">{product.description}</p>
                                <a
                                    href={`https://wa.me/18001234567?text=I'm interested in the ${product.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors"
                                >
                                    Request via WhatsApp
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
