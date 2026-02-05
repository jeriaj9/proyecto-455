"use client";

import Link from "next/link";
import { ArrowRight, Clock, Facebook, Instagram, MapPin, Phone, Shield, Wind, Zap, MessageCircle, Play } from "lucide-react";
import ProjectDropdown from "@/components/ProjectDropdown";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import ProductVideoModal from "@/components/ProductVideoModal";
import ProductCard from "@/components/ProductCard";
import BrandFooter from "@/components/BrandFooter";
import BrandHeader from "@/components/BrandHeader";

export default function ShaftPage() {
    const { t } = useLanguage();
    const [products, setProducts] = useState<any[]>([]);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);

    useEffect(() => {
        async function loadProducts() {
            try {
                const res = await fetch('/data/shaft-products.json');
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
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#e6ef5a] selection:text-black">
            <BrandHeader
                logoSrc="/images/ShaftLogo.png"
                logoAlt="Shaft Dominicana"
                links={[
                    { label: t.shaft.helmets, href: "#helmets" },
                    { label: t.shaft.technology, href: "#about" },
                    { label: t.common.catalog, href: "/shaft/catalog" },
                    { label: t.common.textileCatalog, href: "/shaft/textile-catalog" },
                ]}
                theme="dark"
                hoverColor="#e6ef5a"
            />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-start bg-black overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-[#e6ef5a]/20 to-transparent skew-x-12 transform translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

                {/* Placeholder for Hero Image - Ideally an aggressive rider shot */}
                <div className="absolute inset-0 z-0 opacity-60 bg-[url('/images/ShaftHero.gif')] bg-cover bg-center" />

                <div className="relative z-20 px-8 md:px-24 w-full md:w-2/3 space-y-6">
                    <div className="inline-block bg-[#e6ef5a] text-black font-black uppercase text-xs px-3 py-1 mb-2 tracking-widest">
                        {t.shaft.officialRep}
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9]">
                        {t.shaft.heroTitle} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            {t.shaft.heroSubtitle}
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-md font-medium border-l-4 border-[#e6ef5a] pl-4">
                        {t.shaft.heroDesc}
                    </p>
                    <div className="pt-8 flex flex-col md:flex-row gap-4">
                        <Link href="/shaft/catalog">
                            <button className="bg-[#e6ef5a] text-black px-10 py-4 rounded-none font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all clip-path-slant">
                                {t.common.viewCollection}
                            </button>
                        </Link>
                        <button className="border border-white/30 text-white px-10 py-4 rounded-none font-bold uppercase tracking-widest hover:border-white transition-all backdrop-blur-sm">
                            {t.common.learnMore}
                        </button>
                    </div>
                </div>
            </section>

            {/* Categories / Grid */}
            <section id="helmets" className="py-24 bg-zinc-950">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12 border-b border-gray-800 pb-6">
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
                            New <span className="text-[#e6ef5a]">Arrivals</span>
                        </h2>
                        <Link href="/shaft/catalog" className="text-sm font-bold uppercase tracking-widest flex items-center hover:text-[#e6ef5a] transition-colors">
                            {t.common.seeAll} <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {products.slice(0, 3).map((product) => (
                            <div key={product.id}>
                                <ProductCard
                                    product={product}
                                    theme="dark"
                                    brandColor="#e6ef5a"
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
            <section id="about" className="py-24 bg-black relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e6ef5a] to-transparent opacity-50" />

                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-[#e6ef5a] blur-[100px] opacity-20 rounded-full" />
                        <img
                            src="/images/ShaftTechnology.gif"
                            alt="Technology"
                            className="relative z-10 border-2 border-zinc-800 bg-zinc-900 p-2"
                        />
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic leading-tight">
                            {t.shaft.protectionSystem} <br /><span className="text-[#e6ef5a]">{t.shaft.advanced}</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {t.shaft.protectionDesc}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                            <div className="space-y-3">
                                <Shield className="w-10 h-10 text-[#e6ef5a]" />
                                <h3 className="text-xl font-bold uppercase">{t.shaft.certifiedSafety}</h3>
                                <p className="text-gray-500 text-sm">{t.shaft.certifiedDesc}</p>
                            </div>
                            <div className="space-y-3">
                                <Wind className="w-10 h-10 text-[#e6ef5a]" />
                                <h3 className="text-xl font-bold uppercase">{t.shaft.aeroDynamics}</h3>
                                <p className="text-gray-500 text-sm">{t.shaft.aeroDesc}</p>
                            </div>
                            <div className="space-y-3">
                                <Zap className="w-10 h-10 text-[#e6ef5a]" />
                                <h3 className="text-xl font-bold uppercase">{t.shaft.impactShell}</h3>
                                <p className="text-gray-500 text-sm">{t.shaft.impactDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BrandFooter
                logoSrc="/images/ShaftLogo.png"
                description={t.shaft.footerDesc}
                instagramUrl="https://www.instagram.com/shaftdominicana/"
                brandName="Shaft Dominicana"
            />
            <ProductVideoModal
                isOpen={!!videoUrl}
                onClose={() => setVideoUrl(null)}
                videoUrl={videoUrl || ""}
            />
        </div>
    );
}
