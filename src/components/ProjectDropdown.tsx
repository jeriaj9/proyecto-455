"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";

interface ProjectDropdownProps {
    theme?: "light" | "dark";
}

export default function ProjectDropdown({ theme = "light" }: ProjectDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Colors based on theme
    const buttonColor = theme === "dark" ? "text-white hover:bg-white/10" : "text-black hover:bg-black/10";
    const dropdownBg = "bg-white";
    const dropdownText = "text-slate-900";

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
                        <div className="p-3 border-b border-gray-100 bg-gray-50/50">
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Select Brand</span>
                        </div>
                        <div className="flex flex-col p-1">
                            <Link
                                href="/shaft"
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors ${dropdownText}`}
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="w-8 h-8 rounded bg-black flex items-center justify-center text-white font-black italic text-[10px] uppercase">
                                    Shaft
                                </div>
                                <span className="font-bold">Shaft Dominicana</span>
                            </Link>

                            <Link
                                href="/nexx"
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors ${dropdownText}`}
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="w-8 h-8 rounded bg-white border border-gray-200 flex items-center justify-center text-black font-black italic text-[10px] uppercase">
                                    Nexx
                                </div>
                                <span className="font-bold">Nexx Helmets</span>
                            </Link>

                            <Link
                                href="/auto-services"
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors ${dropdownText}`}
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="w-8 h-8 rounded bg-[#4E759C] flex items-center justify-center text-white font-black italic text-[10px] uppercase">
                                    455
                                </div>
                                <span className="font-bold">Auto Services</span>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
