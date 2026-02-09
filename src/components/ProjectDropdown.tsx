"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectDropdownProps {
    theme?: "light" | "dark";
}

export default function ProjectDropdown({ theme = "light" }: ProjectDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const buttonColor = theme === "dark" ? "text-white hover:bg-white/10" : "text-black hover:bg-black/10";
    const dropdownBg = "bg-white";
    const dropdownText = "text-slate-900";

    const toggleLanguage = () => {
        setLanguage(language === "es" ? "en" : "es");
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full transition-colors ${buttonColor}`}
                aria-label="Switch Project"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className={`absolute right-0 mt-2 w-56 rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 ${dropdownBg} origin-top-right transform transition-all`}>
                        <div className="p-3 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{t.common.selectBrand}</span>
                        </div>

                        <button
                            onClick={toggleLanguage}
                            className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 ${dropdownText}`}
                        >
                            <div className="w-8 h-8 rounded bg-gray-100 text-gray-600 flex items-center justify-center">
                                <Globe size={16} />
                            </div>
                            <span className="font-bold flex-1 text-left">{language === "es" ? "English" : "Español"}</span>
                            <span className="text-xs font-bold uppercase bg-gray-100 px-2 py-1 rounded text-gray-500">
                                {language.toUpperCase()}
                            </span>
                        </button>

                        <div className="flex flex-col p-1">
                            <Link
                                href="/shaft"
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors ${dropdownText}`}
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="w-8 h-8 rounded bg-[#1e293b] flex items-center justify-center text-white font-black italic text-[10px] uppercase">
                                    <img src={"/images/ShaftLogo.png"} className="h-24 mx-auto object-contain" />
                                </div>
                                <span className="font-bold">Shaft Dominicana</span>
                            </Link>

                            <Link
                                href="/nexx"
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors ${dropdownText}`}
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-black font-black italic text-[10px] uppercase">
                                    <img src={"/images/nexxLogo.png"} className="h-24 mx-auto object-contain" />
                                </div>
                                <span className="font-bold">Nexx Helmets</span>
                            </Link>

                            <Link
                                href="/auto-services"
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors ${dropdownText}`}
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-white font-black italic text-[10px] uppercase">
                                    <img src={"/images/455AutoServiceLogo.png"} className="h-24 mx-auto object-contain" />
                                </div>
                                <span className="font-bold">Auto Servicios</span>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
