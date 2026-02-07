"use client";

import { Shield, Wind, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import ProductVideoModal from "@/components/ProductVideoModal";
import BrandFooter from "@/components/BrandFooter";
import BrandHeader from "@/components/BrandHeader";
import BrandHero from "@/components/BrandHero";
import BrandNewArrivals from "@/components/BrandNewArrivals";

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
            <BrandHero
                theme="dark"
                brandColor="#e6ef5a"
                textColor="black"
                backgroundMedia={{
                    type: 'image',
                    src: '/images/ShaftHero.gif'
                }}
                badgeText={t.shaft.officialRep}
                title={t.shaft.heroTitle}
                subtitle={t.shaft.heroSubtitle}
                description={t.shaft.heroDesc}
                buttons={{
                    viewCollection: {
                        text: t.common.viewCollection,
                        href: "/shaft/catalog"
                    },
                    learnMore: {
                        text: t.common.learnMore
                    }
                }}
            />
            <BrandNewArrivals
                theme="dark"
                brandColor="#e6ef5a"
                products={products}
                texts={{
                    titlePrefix: "New",
                    titleHighlight: "Arrivals",
                    seeAll: t.common.seeAll,
                    viewDetails: t.common.viewDetails,
                    inquireNow: t.common.inquireNow,
                    viewVideo: t.common.viewVideo
                }}
                seeAllHref="/shaft/catalog"
                onVideoClick={(url) => setVideoUrl(url)}
            />
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
