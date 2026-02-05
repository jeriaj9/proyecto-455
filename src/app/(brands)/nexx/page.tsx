"use client";

import Link from "next/link";
import { ArrowRight, Clock, Facebook, Instagram, MapPin, Phone, Shield, Wind, Zap, MessageCircle, Play } from "lucide-react";
import ProjectDropdown from "@/components/ProjectDropdown";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import ProductVideoModal from "@/components/ProductVideoModal";
import ProductCard from "@/components/ProductCard";
import BrandFooter from "@/components/BrandFooter";

export default function NexxPage() {
    const { t } = useLanguage();
    const [products, setProducts] = useState<any[]>([]);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);

    useEffect(() => {
        async function loadProducts() {
            try {
                const res = await fetch('/data/nexx-products.json');
                if (res.ok) {
                    const data = await res.json();
                    setProducts(data);
                }
            } catch (error) {
                console.error("Error loading products", error);
            }
        }
        loadProducts();
    }, []);

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-[#C54D3C] selection:text-white">
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center text-black/90 bg-white/90 backdrop-blur-md transition-all">
                <div className="relative group cursor-pointer w-32 h-12 flex items-center">
                    <img src="/images/nexxLogo.svg" alt="Nexx Helmets" className="w-32 h-12 object-contain" />
                </div>
                <div className="hidden md:flex gap-8 font-bold uppercase text-sm tracking-widest">
                    <Link href="#helmets" className="hover:text-[#C54D3C] transition-colors">{t.nexx.helmets}</Link>
                    <Link href="#about" className="hover:text-[#C54D3C] transition-colors">{t.nexx.safety}</Link>
                    <Link href="/nexx/catalog" className="hover:text-[#C54D3C] transition-colors">{t.common.catalog}</Link>
                </div>
                <ProjectDropdown theme="light" />
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-start bg-white overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-[#C54D3C]/20 to-transparent skew-x-12 transform translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

                {/* Placeholder for Hero Image */}
                {/* <div className="absolute inset-0 z-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center" /> */}
                <video className="absolute inset-0 z-0 opacity-60" autoPlay playsInline loop muted poster="">
                    <source src="https://nexx-helmets.com/wp-content/uploads/2025/10/TECH_RALLY.mp4" type="video/mp4" />
                </video>

                <div className="relative z-20 px-8 md:px-24 w-full md:w-2/3 space-y-6">
                    <div className="inline-block bg-[#C54D3C] text-black font-black uppercase text-xs px-3 py-1 mb-2 tracking-widest">
                        {t.nexx.innovation}
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9]">
                        {t.nexx.heroTitle} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">
                            {t.nexx.heroSubtitle}
                        </span>
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl max-w-md font-medium border-l-4 border-[#C54D3C] pl-4">
                        {t.nexx.heroDesc}
                    </p>
                    <div className="pt-8 flex flex-col md:flex-row gap-4">
                        <Link href="/nexx/catalog">
                            <button className="bg-[#C54D3C] text-white px-10 py-4 rounded-none font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all clip-path-slant">
                                View Collection
                            </button>
                        </Link>
                        <button className="border border-black/30 text-black px-10 py-4 rounded-none font-bold uppercase tracking-widest hover:border-black transition-all backdrop-blur-sm">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Categories / Grid */}
            <section id="helmets" className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-6">
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
                            New <span className="text-[#C54D3C]">Arrivals</span>
                        </h2>
                        <Link href="/nexx/catalog" className="text-sm font-bold uppercase tracking-widest flex items-center hover:text-[#C54D3C] transition-colors">
                            See All <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {products.slice(0, 3).map((product) => (
                            <div key={product.id}>
                                <ProductCard
                                    product={product}
                                    theme="light"
                                    brandColor="#C54D3C"
                                    texts={{
                                        viewDetails: t.common.viewDetails,
                                        inquireNow: t.common.inquireNow,
                                        viewVideo: t.common.viewVideo
                                    }}
                                    onVideoClick={(url) => setVideoUrl(url)}
                                    showActions={true}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology / Features */}
            <section id="about" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C54D3C] to-transparent opacity-50" />

                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-[#C54D3C] blur-[100px] opacity-20 rounded-full" />
                        <img
                            src="https://nexx-helmets.com/wp-content/uploads/sb-instagram-feed-images/612336352_1334536158711011_5161154648921028489_nfull.webp"
                            alt="Technology"
                            className="relative z-10 border-2 border-zinc-800 bg-zinc-900 p-2"
                        />
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic leading-tight">
                            {t.shaft.technology} <br /><span className="text-[#C54D3C]">{t.shaft.advanced}</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t.nexx.technologyDesc}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                            <div className="space-y-3">
                                <Shield className="w-10 h-10 text-[#C54D3C]" />
                                <h3 className="text-xl font-bold uppercase">{t.nexx.aerodynamicsTitle}</h3>
                                <p className="text-gray-500 text-sm">{t.nexx.aerodynamicsDesc}</p>
                            </div>
                            <div className="space-y-3">
                                <Wind className="w-10 h-10 text-[#C54D3C]" />
                                <h3 className="text-xl font-bold uppercase">{t.nexx.ventilationTitle}</h3>
                                <p className="text-gray-500 text-sm">{t.nexx.ventilationDesc}</p>
                            </div>
                            <div className="space-y-3">
                                <Zap className="w-10 h-10 text-[#C54D3C]" />
                                <h3 className="text-xl font-bold uppercase">{t.nexx.impactTitle}</h3>
                                <p className="text-gray-500 text-sm">{t.nexx.impactDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BrandFooter
                logoSrc="/images/nexxLogo.svg"
                description={t.nexx.footerDesc}
                instagramUrl="https://www.instagram.com/autoservicios455/"
                brandName="Nexx Helmets"
            />
            <ProductVideoModal
                isOpen={!!videoUrl}
                onClose={() => setVideoUrl(null)}
                videoUrl={videoUrl || ""}
            />
        </div>
    );
}
