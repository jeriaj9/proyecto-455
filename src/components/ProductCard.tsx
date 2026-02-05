import Link from "next/link";
import { ArrowRight, MessageCircle, Play } from "lucide-react";

interface Product {
    id: string;
    name: string;
    description: string;
    category?: string;
    image_url: string;
    video_url?: string;
}

interface ProductCardProps {
    product: Product;
    theme: 'dark' | 'light';
    brandColor: string;
    texts: {
        viewDetails: string;
        inquireNow: string;
        viewVideo: string;
    };
    onVideoClick: (url: string) => void;
    showActions?: boolean; // Whether to show the bottom action buttons (Inquire/Video)
}

export default function ProductCard({
    product,
    theme,
    brandColor,
    texts,
    onVideoClick,
    showActions = true
}: ProductCardProps) {
    const isDark = theme === 'dark';

    // Theme-based styles
    const containerClasses = isDark
        ? "bg-zinc-900 border-zinc-800"
        : "bg-white border-gray-200";

    const textClasses = isDark
        ? "text-white"
        : "text-black";

    const descClasses = isDark
        ? "text-gray-400"
        : "text-gray-600";

    // Dynamic hover border style is handled via inline style or could be a class if using specific colors
    // Since brandColor is dynamic, we might need inline style for the specific color, 
    // but Tailwind 4 arbitrary values or style prop works.
    // However, for hover states with dynamic colors in Tailwind, it's tricky without arbitrary values generated at runtime or inline styles.
    // Let's use a group-hover approach with a specific class if possible, or style prop.
    // Given the previous code used `hover:border-[#Color]`, we can try to construct that if the color is standard, 
    // or better, use standard CSS variable approach or just inline style for the border color on hover.
    // EASIEST WAY: Use a style tag or just standard classes if we know the colors. 
    // Shaft: #e6ef5a, Nexx: #C54D3C. 
    // Let's stick to passing the color string and using it in style for border color on hover? 
    // Actually, inline styles for hover are hard in React.
    // Instead, let's use the `style` prop for the custom property and refer to it in Tailwind if possible, or just standard classes if the colors are fixed.
    // But the requirement says "pass properties such as ... colors".
    // Let's try to use style={{ '--brand-color': brandColor } as React.CSSProperties} and Tailwind's arbitrary values if supported, 
    // or just plain Classes if we only have 2 brands. 
    // For now, I will use the specific colors in the `style` prop for the border and buttons to match the exact request of "reusing it".

    const cardStyle = {
        borderColor: 'transparent', // Default state handled by class
    } as React.CSSProperties;

    return (
        <div
            className={`group flex flex-col h-full ${containerClasses} border transition-colors duration-300 relative`}
            style={{
                '--brand-color': brandColor,
            } as React.CSSProperties}
        >
            {/* Hover border effect using pseudo-element or direct style if possible. 
                Tailwind v4 supports dynamic values? 
                Let's emulate the original behavior: `hover:border-[#Color]`
                We can use a style tag for the group hover or just inline style for the border color if we toggle it on hover (state).
                But pure CSS is better. 
                Let's use a dataset attribute or just scoped style.
            */}
            <style jsx>{`
                .group:hover {
                    border-color: ${brandColor} !important;
                }
            `}</style>

            <div className={`relative aspect-square overflow-hidden ${isDark ? 'bg-zinc-950' : 'bg-gray-100'}`}>
                <div className={`absolute inset-0 z-10 bg-gradient-to-t ${isDark ? 'from-black/90' : 'from-white/95 via-white/40'} to-transparent`} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={product.image_url}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover ${isDark ? 'opacity-90' : 'grayscale'} group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700`}
                />
            </div>

            <div className="p-8 flex-1 flex flex-col items-start">
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: brandColor }}>{product.category}</div>
                <h3 className={`text-2xl font-black uppercase italic mb-2 ${textClasses}`}>{product.name}</h3>
                <p className={`${descClasses} text-sm mb-6 leading-relaxed flex-1 line-clamp-2`}>{product.description}</p>

                {showActions ? (
                    <div className="mt-auto space-y-3 w-full">
                        <a
                            href={`https://wa.me/18298851616?text=Hello, I'm interested in the ${product.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full flex items-center justify-center gap-2 font-black uppercase tracking-widest py-4 px-6 transition-all clip-path-slant text-sm
                                ${isDark
                                    ? 'bg-white text-black hover:bg-[var(--brand-color)] hover:text-black'
                                    : 'bg-black text-white hover:bg-[var(--brand-color)] hover:text-white'
                                }`}
                            // Note: Hover colors for text might need adjustment based on brand color brightness.
                            // Shaft (Lime) -> Black text. Nexx (Red) -> White text? 
                            // original Nexx: hover:text-white. original Shaft: hover:text-black.
                            // We can pass a `hoverTextColor` prop or infer it.
                            // For now, let's stick to the previous logic:
                            // Shaft (Dark theme, Lime color) -> Hover Text Black.
                            // Nexx (Light theme, Red color) -> Hover Text White.
                            style={{
                                '--hover-bg': brandColor,
                            } as React.CSSProperties}
                        >
                            <MessageCircle size={18} />
                            {texts.inquireNow}
                        </a>

                        {product.video_url && (
                            <button
                                onClick={() => onVideoClick(product.video_url!)}
                                className={`w-full flex items-center justify-center gap-2 border font-bold uppercase tracking-widest py-3 px-6 transition-all text-sm
                                    ${isDark
                                        ? 'border-white text-white hover:bg-white hover:text-black'
                                        : 'border-black text-black hover:bg-black hover:text-white'
                                    }`}
                            >
                                <Play size={16} fill="currentColor" />
                                {texts.viewVideo}
                            </button>
                        )}
                    </div>
                ) : (
                    <span className="font-bold uppercase tracking-wider text-sm flex items-center gap-2 mt-auto" style={{ color: brandColor }}>
                        {texts.viewDetails} <ArrowRight size={16} />
                    </span>
                )}
            </div>
        </div>
    );
}
