import Link from "next/link";
import ProjectDropdown from "@/components/ProjectDropdown";

interface BrandHeaderProps {
    logoSrc: string;
    logoAlt: string;
    links: { label: string; href: string }[];
    theme: 'light' | 'dark';
    hoverColor: string;
    logoClass?: string;
}

export default function BrandHeader({
    logoSrc,
    logoAlt,
    links,
    theme,
    hoverColor,
    logoClass = "w-32 h-12 object-contain"
}: BrandHeaderProps) {
    const isDark = theme === 'dark';
    const navClass = isDark
        ? "text-white/90 bg-black/60 backdrop-blur-md"
        : "text-black/90 bg-white/90 backdrop-blur-md";

    const linkBaseClass = "hover:transition-colors transition-colors";

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center transition-all ${navClass}`}>
            <div className="relative group cursor-pointer w-32 h-12 flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logoSrc} alt={logoAlt} className={logoClass} />
            </div>
            <div className="hidden md:flex gap-8 font-bold uppercase text-sm tracking-widest">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={linkBaseClass}
                        style={{
                            '--hover-color': hoverColor,
                        } as React.CSSProperties}
                    >
                        <style jsx>{`
                            a:hover {
                                color: ${hoverColor} !important;
                            }
                        `}</style>
                        {link.label}
                    </Link>
                ))}
            </div>
            <ProjectDropdown theme={theme} />
        </nav>
    );
}
