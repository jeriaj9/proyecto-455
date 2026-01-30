"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Mock data for initial development - Nexx Helmets
const MOCK_PRODUCTS = [
    {
        id: "1",
        name: "Nexx X.WED 2",
        description: "The ultimate adventure helmet, ready for any terrain.",
        image: "https://nexx-helmets.com/wp-content/uploads/2025/10/XRALLY_PLAIN_BSSSLACK_SIDE-300x300.png",
        price: "N/A"
    },
    {
        id: "2",
        name: "Nexx X.R3R",
        description: "Born for the track, uncompromising sport performance.",
        image: "https://nexx-helmets.com/wp-content/uploads/2024/01/X.WED3_ZERO-PRO-Carbon-MT-2-300x300.png",
        price: "N/A"
    },
    {
        id: "3",
        name: "Nexx X.VILITUR",
        description: "Dynamic, elegant and robust modular touring helmet.",
        image: "https://nexx-helmets.com/wp-content/uploads/2024/01/X.WED3_ZERO-PRO-Carbon-MT-2-300x300.png",
        price: "N/A"
    },
    {
        id: "4",
        name: "Nexx SX.100",
        description: "Urban style with premium features at a competitive price.",
        image: "https://nexx-helmets.com/wp-content/uploads/2023/11/Y.10_PLAIN_BLACK-MT2-300x300.png",
        price: "N/A"
    },
    {
        id: "5",
        name: "Nexx X.G100",
        description: "Retro style meets modern safety standards.",
        image: "https://nexx-helmets.com/wp-content/uploads/2024/11/XLIFECOUNTRY_PLAIN_BLACK_LAT-15362346-1-300x300.png",
        price: "N/A"
    },
    {
        id: "6",
        name: "Nexx Y.10",
        description: "Open face freedom with maximum protection.",
        image: "https://nexx-helmets.com/wp-content/uploads/2025/10/XTR_PLAIN_BLACK_SIDE-300x300.png",
        price: "N/A"
    },
];

export default function NexxCatalogPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-[#C54D3C] selection:text-white">
            {/* Header */}
            <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200 py-6 px-8">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/nexx" className="group flex items-center text-gray-500 hover:text-black transition-colors text-sm font-bold uppercase tracking-widest">
                        <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> {t.common.back}
                    </Link>

                    <div className="flex items-center gap-2">
                        <span className="text-xl font-black italic uppercase tracking-tighter">
                            Nexx <span className="text-[#C54D3C]">Helmets</span>
                        </span>
                        <span className="hidden md:inline text-xl font-black italic uppercase tracking-tighter">
                            <span className="text-[#C54D3C]">/</span> {t.common.catalog}
                        </span>
                    </div>

                    <div className="w-20" /> {/* Spacer for visual balance */}
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-16 px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
                            {t.common.theCollection}
                        </h1>
                        <p className="text-gray-600 max-w-xl">
                            Explore our range of premium European helmets designed for every riding style.
                        </p>
                    </div>
                    {/* Filter placeholder */}
                    <div className="mt-8 md:mt-0 flex gap-4">
                        <button className="text-sm font-bold uppercase tracking-widest text-[#C54D3C] border-b border-[#C54D3C]">{t.common.all}</button>
                        <button className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Adventure</button>
                        <button className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Sport</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MOCK_PRODUCTS.map((product) => (
                        <div key={product.id} className="group bg-white border border-gray-200 hover:border-[#C54D3C] transition-all duration-300 flex flex-col">
                            <div className="aspect-square relative overflow-hidden bg-gray-100">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                                {/* Overlay Tag */}
                                <div className="absolute top-4 right-4 bg-[#C54D3C] text-white text-[10px] font-black uppercase px-2 py-1 tracking-widest">
                                    {t.common.new}
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col items-start">
                                <h3 className="text-2xl font-black uppercase italic text-black mb-2">{product.name}</h3>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-1">{product.description}</p>

                                <a
                                    href={`https://wa.me/18298851616?text=Hello, I'm interested in the ${product.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 bg-black text-white hover:bg-[#C54D3C] hover:text-white font-black uppercase tracking-widest py-4 px-6 transition-all clip-path-slant"
                                >
                                    <MessageCircle size={18} />
                                    {t.common.inquireNow}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="py-8 text-center text-gray-500 text-xs uppercase tracking-widest">
                Nexx Helmets {t.common.catalogFooter} &copy; 2026
            </footer>
        </div>
    );
}
