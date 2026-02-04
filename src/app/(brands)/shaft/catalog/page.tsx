"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

// Mock data for initial development
// Mock data removed in favor of static JSON fetch


export default function ShaftCatalogPage() {
    const { t } = useLanguage();
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProducts() {
            try {
                const res = await fetch('/data/shaft-products.json');
                if (res.ok) {
                    const data = await res.json();
                    setProducts(data);
                } else {
                    console.error("Failed to load products");
                }
            } catch (error) {
                console.error("Error loading products", error);
            } finally {
                setLoading(false);
            }
        }
        loadProducts();
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#C54D3C] selection:text-white">
            {/* Header */}
            <header className="sticky top-0 z-30 bg-black/90 backdrop-blur-md border-b border-zinc-900 py-6 px-8">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/shaft" className="group flex items-center text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                        <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> {t.common.back}
                    </Link>

                    <div className="flex items-center gap-2">
                        <img src="/images/ShaftLogo.png" alt="Shaft Logo" className="h-8 w-auto brightness-0 invert" />
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
                        <p className="text-gray-400 max-w-xl">
                            Explore our range of certified helmets designed for safety, comfort, and speed.
                        </p>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C54D3C]"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="group bg-zinc-900 border border-zinc-800 hover:border-[#C54D3C] transition-all duration-300 flex flex-col">
                                <div className="aspect-square relative overflow-hidden bg-zinc-950">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={product.image_url}
                                        alt={product.name}
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                    />
                                    {/* Overlay Tag */}
                                    {/* <div className="absolute top-4 right-4 bg-[#C54D3C] text-white text-[10px] font-black uppercase px-2 py-1 tracking-widest">
                                        {t.common.new}
                                    </div> */}
                                </div>

                                <div className="p-8 flex-1 flex flex-col items-start">
                                    <h3 className="text-2xl font-black uppercase italic text-white mb-2">{product.name}</h3>
                                    <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-1">{product.description}</p>

                                    <a
                                        href={`https://wa.me/18298851616?text=Hello Shaft Dominicana, I'm interested in the ${product.name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-[#C54D3C] hover:text-white font-black uppercase tracking-widest py-4 px-6 transition-all clip-path-slant"
                                    >
                                        <MessageCircle size={18} />
                                        {t.common.inquireNow}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <footer className="py-8 text-center text-zinc-800 text-xs uppercase tracking-widest">
                Shaft Dominicana {t.common.catalogFooter} &copy; 2026
            </footer>
        </div>
    );
}
