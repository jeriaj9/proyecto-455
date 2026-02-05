"use client";

import { Shield, Wind, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import ProductVideoModal from "@/components/ProductVideoModal";
import BrandFooter from "@/components/BrandFooter";
import BrandHeader from "@/components/BrandHeader";
import BrandHero from "@/components/BrandHero";
import BrandNewArrivals from "@/components/BrandNewArrivals";

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
            <BrandHeader
                logoSrc="/images/nexxLogo.svg"
                logoAlt="Nexx Helmets"
                links={[
                    { label: t.nexx.helmets, href: "#helmets" },
                    { label: t.nexx.safety, href: "#about" },
                    { label: t.common.catalog, href: "/nexx/catalog" },
                ]}
                theme="light"
                hoverColor="#C54D3C"
            />
            <BrandHero
                theme="light"
                brandColor="#C54D3C"
                backgroundMedia={{
                    type: 'video',
                    src: '/images/NexxHero.mp4'
                }}
                badgeText={t.nexx.innovation}
                title={t.nexx.heroTitle}
                subtitle={t.nexx.heroSubtitle}
                description={t.nexx.heroDesc}
                buttons={{
                    viewCollection: {
                        text: "View Collection",
                        href: "/nexx/catalog"
                    },
                    learnMore: {
                        text: "Learn More"
                    }
                }}
            />
            <BrandNewArrivals
                theme="light"
                brandColor="#C54D3C"
                products={products}
                texts={{
                    titlePrefix: "New",
                    titleHighlight: "Arrivals",
                    seeAll: "See All",
                    viewDetails: t.common.viewDetails,
                    inquireNow: t.common.inquireNow,
                    viewVideo: t.common.viewVideo
                }}
                seeAllHref="/nexx/catalog"
                onVideoClick={(url) => setVideoUrl(url)}
            />
            <section id="about" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C54D3C] to-transparent opacity-50" />
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-[#C54D3C] blur-[100px] opacity-20 rounded-full" />
                        <img
                            src="/images/NexxTechnology.webp"
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
