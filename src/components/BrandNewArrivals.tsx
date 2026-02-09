import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";

interface BrandNewArrivalsProps {
    theme: 'light' | 'dark';
    brandColor: string;
    products: any[];
    texts: {
        titlePrefix: string;
        titleHighlight: string;
        seeAll: string;
        viewDetails: string;
        inquireNow: string;
        viewVideo: string;
    };
    seeAllHref: string;
    onVideoClick: (url: string) => void;
}

export default function BrandNewArrivals({
    theme,
    brandColor,
    products,
    texts,
    seeAllHref,
    onVideoClick
}: BrandNewArrivalsProps) {
    const isDark = theme === 'dark';

    const bgClass = isDark ? "bg-zinc-950" : "bg-gray-50";
    const borderClass = isDark ? "border-gray-800" : "border-gray-200";

    return (
        <section id="newArrivals" className={`py-24 ${bgClass} ${isDark ? 'text-white' : 'text-black'}`}>
            <div className="container mx-auto px-6">
                <div className={`flex justify-between items-end mb-12 border-b pb-6 ${borderClass}`}>
                    <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
                        {texts.titlePrefix} <span style={{ color: brandColor }}>{texts.titleHighlight}</span>
                    </h2>
                    <Link
                        href={seeAllHref}
                        className="text-sm font-bold uppercase tracking-widest flex items-center transition-colors"
                        style={{
                            '--brand-color': brandColor
                        } as React.CSSProperties}
                    >
                        <style jsx>{`
                            a:hover {
                                color: ${brandColor} !important;
                            }
                        `}</style>
                        {texts.seeAll} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.slice(0, 3).map((product) => (
                        <div key={product.id}>
                            <ProductCard
                                product={product}
                                theme={theme}
                                brandColor={brandColor}
                                texts={{
                                    viewDetails: texts.viewDetails,
                                    inquireNow: texts.inquireNow,
                                    viewVideo: texts.viewVideo
                                }}
                                onVideoClick={onVideoClick}
                                showActions={true}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
