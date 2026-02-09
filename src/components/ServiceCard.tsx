import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    linkHref: string;
    linkText: string;
}

export default function ServiceCard({
    icon: Icon,
    title,
    description,
    linkHref,
    linkText,
    backgroundImage
}: ServiceCardProps & { backgroundImage?: string }) {
    return (
        <div
            className={`
                relative overflow-hidden p-8 rounded-xl shadow-sm border transition-all group h-full flex flex-col items-start
                ${backgroundImage ? 'border-transparent text-white' : 'bg-white border-slate-100 hover:shadow-xl hover:border-[#A6C5E1] text-slate-900'}
            `}
        >
            {backgroundImage && (
                <>
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-10" />
                </>
            )}

            <div className="relative z-20 w-full h-full flex flex-col items-start">
                <div
                    className={`
                        w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-colors
                        ${backgroundImage
                            ? 'bg-white/20 text-white backdrop-blur-sm group-hover:bg-[#4E759C] group-hover:text-white'
                            : 'bg-[#A6C5E1]/20 text-[#4E759C] group-hover:bg-[#4E759C] group-hover:text-white'
                        }
                    `}
                >
                    <Icon size={32} />
                </div>
                <h3 className={`text-xl font-black uppercase italic mb-3 ${backgroundImage ? 'text-white' : 'text-slate-800'}`}>{title}</h3>
                <p className={`mb-6 flex-1 ${backgroundImage ? 'text-slate-200' : 'text-slate-500'}`}>{description}</p>
                <a
                    href={linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                        inline-flex items-center gap-2 text-sm font-bold uppercase transition-colors mt-auto
                        ${backgroundImage ? 'text-[#A6C5E1] hover:text-white' : 'text-[#4E759C] hover:text-[#2c4e70]'}
                    `}
                >
                    {linkText} <ArrowRight size={16} />
                </a>
            </div>
        </div>
    );
}
