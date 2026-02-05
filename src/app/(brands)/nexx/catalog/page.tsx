"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle, Play, Video } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import ProductVideoModal from "@/components/ProductVideoModal";

// Mock data removed


export default function NexxCatalogPage() {
    const { t } = useLanguage();
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [videoUrl, setVideoUrl] = useState<string | null>(null);

    useEffect(() => {
        async function loadProducts() {
            try {
                const res = await fetch('/data/nexx-products.json');
                if (res.ok) {
                    const data = await res.json();
                    setProducts(data);

                    // Extract and normalize categories
                    const uniqueCategories = Array.from(new Set(data.map((p: any) => p.category?.trim()))).filter(Boolean) as string[];
                    setCategories(uniqueCategories.sort());
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

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(p => p.category?.trim() === selectedCategory);

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
                </div>

                {/* Filter Bar */}
                {!loading && categories.length > 0 && (
                    <div className="mb-10 flex flex-wrap gap-4">
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all border ${selectedCategory === 'all'
                                ? 'bg-[#C54D3C] border-[#C54D3C] text-white'
                                : 'bg-transparent border-gray-300 text-gray-500 hover:border-black hover:text-black'
                                }`}
                        >
                            {t.common.all}
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all border ${selectedCategory === cat
                                    ? 'bg-[#C54D3C] border-[#C54D3C] text-white'
                                    : 'bg-transparent border-gray-300 text-gray-500 hover:border-black hover:text-black'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                )}

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C54D3C]"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="group bg-white border border-gray-200 hover:border-[#C54D3C] transition-all duration-300 flex flex-col">
                                <div className="aspect-square relative overflow-hidden bg-gray-100">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={product.image_url}
                                        alt={product.name}
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                    />
                                </div>

                                <div className="p-8 flex-1 flex flex-col items-start">
                                    <div className="text-xs font-bold text-[#C54D3C] uppercase tracking-widest mb-1">{product.category}</div>
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

                                    {product.video_url && (
                                        <button
                                            onClick={() => setVideoUrl(product.video_url)}
                                            className="w-full mt-3 flex items-center justify-center gap-2 border border-black text-black hover:bg-black hover:text-white font-bold uppercase tracking-widest py-3 px-6 transition-all"
                                        >
                                            <Play size={16} fill="currentColor" />
                                            {t.common.viewVideo}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <ProductVideoModal
                isOpen={!!videoUrl}
                onClose={() => setVideoUrl(null)}
                videoUrl={videoUrl || ""}
            />

            <footer className="py-8 text-center text-gray-500 text-xs uppercase tracking-widest">
                Nexx Helmets {t.common.catalogFooter} &copy; 2026
            </footer>
        </div>
    );
}
