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
    linkText
}: ServiceCardProps) {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#A6C5E1] transition-all group h-full flex flex-col items-start">
            <div className="w-14 h-14 bg-[#A6C5E1]/20 rounded-lg flex items-center justify-center text-[#4E759C] mb-6 group-hover:bg-[#4E759C] group-hover:text-white transition-colors">
                <Icon size={32} />
            </div>
            <h3 className="text-xl font-black uppercase italic text-slate-800 mb-3">{title}</h3>
            <p className="text-slate-500 mb-6 flex-1">{description}</p>
            <a
                href={linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase text-[#4E759C] hover:text-[#2c4e70] transition-colors mt-auto"
            >
                {linkText} <ArrowRight size={16} />
            </a>
        </div>
    );
}
