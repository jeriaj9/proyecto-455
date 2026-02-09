"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";

interface BrandFooterProps {
    logoSrc: string;
    description: string;
    instagramUrl: string;
    facebookUrl?: string;
    brandName: string;
}

export default function BrandFooter({
    logoSrc,
    description,
    instagramUrl,
    facebookUrl = "#",
    brandName
}: BrandFooterProps) {
    const { t } = useLanguage();

    return (
        <footer id="contact" className="bg-[#1e293b] z-10 text-white pt-20 pb-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={logoSrc} alt={`${brandName} Logo`} className="h-14 w-auto object-contain rounded-md" />
                    </div>
                    <p className="text-slate-400">
                        {description}
                    </p>
                    <div className="flex gap-4">
                        <a href={facebookUrl} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#4E759C] transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#4E759C] transition-colors">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold uppercase mb-6 text-[#A6C5E1]">{t.autoServices.contactInfo}</h4>
                    <ul className="space-y-4 text-slate-400">
                        <li className="flex items-start gap-3">
                            <MapPin className="mt-1 text-[#4E759C] shrink-0" size={18} />
                            <span>Av. Núñez de Cáceres 455, Santo Domingo, Rep. Dom.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="text-[#4E759C] shrink-0" size={18} />
                            <a href="tel:+18097326422" className="hover:text-[#4E759C] transition-colors">(809)-732-6422</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Clock className="text-[#4E759C] shrink-0" size={18} />
                            <span>{t.common.weekDays}: 8:00 AM - 6:00 PM<br />{t.common.weekEnd}: 9:00 AM - 2:00 PM</span>
                        </li>
                    </ul>
                </div>

                <div className="lg:col-span-2 h-64 rounded-xl overflow-hidden bg-slate-800 relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946.1428143983284!2d-69.95660853040845!3d18.45776579891398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea56100230b2db1%3A0x682a5eb79e6c430b!2sAutoservicio%20455!5e0!3m2!1sen!2sdo!4v1770658656751!5m2!1sen!2sdo"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>
            </div>

            <div className="container mx-auto px-6 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                <p>&copy; 2026 {brandName}. All rights reserved.</p>
            </div>
        </footer>
    );
}
