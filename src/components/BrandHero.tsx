import Link from "next/link";
import { ReactNode } from "react";

interface BrandHeroProps {
    theme: 'light' | 'dark';
    brandColor: string;
    textColor: string;
    backgroundMedia: {
        type: 'image' | 'video';
        src: string;
    };
    badgeText: string;
    title: ReactNode;
    subtitle: ReactNode;
    description: string;
    buttons: {
        viewCollection: {
            text: string;
            href: string;
        };
        learnMore: {
            text: string;
        };
    };
}

export default function BrandHero({
    theme,
    brandColor,
    textColor,
    backgroundMedia,
    badgeText,
    title,
    subtitle,
    description,
    buttons
}: BrandHeroProps) {
    const isDark = theme === 'dark';

    const containerClass = isDark ? "bg-black text-white" : "bg-white text-black";
    const gradientOverlayClass = isDark
        ? "from-black via-black/80 to-transparent"
        : "from-white via-white/80 to-transparent";

    const descriptionClass = isDark ? "text-gray-400" : "text-gray-600";
    const subtitleGradient = isDark
        ? "from-white to-gray-400"
        : "from-black to-gray-500";

    return (
        <section className={`relative min-h-screen flex items-center justify-start overflow-hidden pt-28 md:pt-0 ${containerClass}`}>
            <div
                className="absolute top-0 right-0 w-3/4 h-full skew-x-12 transform translate-x-1/4"
                style={{
                    background: `linear-gradient(to left, ${brandColor}33, transparent)`
                }}
            />
            <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t ${gradientOverlayClass} z-10`} />

            {backgroundMedia.type === 'image' ? (
                <div
                    className="absolute inset-0 z-0 opacity-60 bg-cover bg-center"
                    style={{ backgroundImage: `url('${backgroundMedia.src}')` }}
                />
            ) : (
                <video className="absolute inset-0 z-0 opacity-60 w-full h-full object-cover" autoPlay playsInline loop muted poster="">
                    <source src={backgroundMedia.src} type="video/mp4" />
                </video>
            )}

            <div className="relative z-20 px-8 md:px-24 w-full md:w-2/3 space-y-6">
                <div
                    className="inline-block text-black font-black uppercase text-xs px-3 py-1 mb-2 tracking-widest"
                    style={{ backgroundColor: brandColor, color: textColor }}
                >
                    {badgeText}
                </div>
                <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9]">
                    {title} <br />
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${subtitleGradient} pr-4`}>
                        {subtitle}
                    </span>
                </h1>
                <p
                    className={`text-lg md:text-xl max-w-md font-medium border-l-4 pl-4 ${descriptionClass}`}
                    style={{ borderColor: brandColor }}
                >
                    {description}
                </p>
                <div className="pt-8 flex flex-col md:flex-row gap-4">
                    <Link href={buttons.viewCollection.href}>
                        <button
                            className="text-black px-10 py-4 rounded-none font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all clip-path-slant"
                            style={{ backgroundColor: brandColor, color: textColor }}
                        >
                            {buttons.viewCollection.text}
                        </button>
                    </Link>
                    <button
                        className={`border px-10 py-4 rounded-none font-bold uppercase tracking-widest transition-all backdrop-blur-sm ${isDark
                            ? "border-white/30 text-white hover:border-white"
                            : "border-black/30 text-black hover:border-black"
                            }`}
                    >
                        {buttons.learnMore.text}
                    </button>
                </div>
            </div>
        </section>
    );
}
