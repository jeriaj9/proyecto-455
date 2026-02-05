"use client";

import Link from "next/link";
import { Wrench, Disc, Thermometer, Car, Laptop, Filter, Phone, MapPin, Clock, Facebook, Instagram, MessageCircle, ArrowRight } from "lucide-react";
import ProjectDropdown from "@/components/ProjectDropdown";
import { useLanguage } from "@/contexts/LanguageContext";
import BrandFooter from "@/components/BrandFooter";

export default function AutoServicesPage() {
    const { t } = useLanguage();

    const getWhatsAppLink = (serviceName: string) => {
        const message = t.autoServices.whatsappMessage.replace("{service_name}", serviceName);
        return `https://wa.me/18097326422?text=${encodeURIComponent(message)}`;
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            {/* Header */}
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center text-black/90 bg-white/90 backdrop-blur-md transition-all">
                <div className="relative group cursor-pointer w-32 h-12 flex items-center">
                    <img src="/images/455AutoServiceLogo.png" alt="455 Auto Services" className="w-32 h-12 object-contain" />
                </div>
                <div className="hidden md:flex gap-8 font-bold uppercase text-sm tracking-widest">
                    <Link href="#services" className="hover:text-[#4E759C] transition-colors">{t.common.services}</Link>
                    <Link href="#about" className="hover:text-[#4E759C] transition-colors">{t.common.aboutUs}</Link>
                    <Link href="#contact" className="hover:text-[#4E759C] transition-colors">{t.common.contact}</Link>
                </div>
                <ProjectDropdown theme="light" />
            </nav>

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="Auto Shop Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 text-center space-y-6 px-4 max-w-4xl mx-auto">
                    <div className="inline-block bg-[#4E759C] text-white font-bold uppercase text-xs px-4 py-1 rounded-full mb-4 tracking-widest">
                        {t.autoServices.trustedCare}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-tight">
                        {t.autoServices.expertCare} <br />
                        <span className="text-[#A6C5E1]">{t.autoServices.yourVehicle}</span>
                    </h1>
                    <p className="text-xl text-slate-200 max-w-2xl mx-auto font-medium">
                        {t.autoServices.heroDesc}
                    </p>
                    <div className="pt-8">
                        <a href="#services" className="bg-[#4E759C] text-white px-10 py-4 rounded-lg font-black uppercase tracking-widest hover:bg-[#A6C5E1] hover:text-[#4E759C] transition-all shadow-xl shadow-[#4E759C]/50 inline-block">
                            {t.autoServices.ourServices}
                        </a>
                    </div>
                </div>
            </section>

            {/* About Us */}
            <section id="about" className="py-24 bg-white">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-[#A6C5E1] rounded-xl transform -rotate-2" />
                        <img
                            src="/images/455ManWorking.jpg"
                            alt="Mechanic at work"
                            className="relative rounded-xl shadow-2xl"
                        />
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black uppercase italic text-slate-800">
                            {t.autoServices.whoWeAre}
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            {t.autoServices.aboutDesc1}
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            {t.autoServices.aboutDesc2}
                        </p>
                        <div className="flex gap-8 pt-4">
                            <div>
                                <h3 className="text-3xl font-black text-[#4E759C]">15+</h3>
                                <p className="text-sm font-bold uppercase text-slate-400">{t.autoServices.yearsExp}</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-[#4E759C]">5k+</h3>
                                <p className="text-sm font-bold uppercase text-slate-400">{t.autoServices.happyClients}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services" className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-4xl font-black uppercase italic text-slate-800 mb-4">
                            {t.autoServices.ourServices}
                        </h2>
                        <p className="text-slate-500">
                            {t.autoServices.servicesDesc}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Item */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#A6C5E1] transition-all group">
                            <div className="w-14 h-14 bg-[#A6C5E1]/20 rounded-lg flex items-center justify-center text-[#4E759C] mb-6 group-hover:bg-[#4E759C] group-hover:text-white transition-colors">
                                <Car size={32} />
                            </div>
                            <h3 className="text-xl font-black uppercase italic text-slate-800 mb-3">{t.autoServices.oilChange}</h3>
                            <p className="text-slate-500 mb-6">{t.autoServices.oilDesc}</p>
                            <a
                                href={getWhatsAppLink(t.autoServices.oilChange)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold uppercase text-[#4E759C] hover:text-[#2c4e70] transition-colors"
                            >
                                {t.common.requestInfo} <ArrowRight size={16} />
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#A6C5E1] transition-all group">
                            <div className="w-14 h-14 bg-[#A6C5E1]/20 rounded-lg flex items-center justify-center text-[#4E759C] mb-6 group-hover:bg-[#4E759C] group-hover:text-white transition-colors">
                                <Thermometer size={32} />
                            </div>
                            <h3 className="text-xl font-black uppercase italic text-slate-800 mb-3">{t.autoServices.acRepair}</h3>
                            <p className="text-slate-500 mb-6">{t.autoServices.acDesc}</p>
                            <a
                                href={getWhatsAppLink(t.autoServices.acRepair)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold uppercase text-[#4E759C] hover:text-[#2c4e70] transition-colors"
                            >
                                {t.common.requestInfo} <ArrowRight size={16} />
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#A6C5E1] transition-all group">
                            <div className="w-14 h-14 bg-[#A6C5E1]/20 rounded-lg flex items-center justify-center text-[#4E759C] mb-6 group-hover:bg-[#4E759C] group-hover:text-white transition-colors">
                                <Disc size={32} />
                            </div>
                            <h3 className="text-xl font-black uppercase italic text-slate-800 mb-3">{t.autoServices.brakeBands}</h3>
                            <p className="text-slate-500 mb-6">{t.autoServices.brakeDesc}</p>
                            <a
                                href={getWhatsAppLink(t.autoServices.brakeBands)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold uppercase text-[#4E759C] hover:text-[#2c4e70] transition-colors"
                            >
                                {t.common.requestInfo} <ArrowRight size={16} />
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#A6C5E1] transition-all group">
                            <div className="w-14 h-14 bg-[#A6C5E1]/20 rounded-lg flex items-center justify-center text-[#4E759C] mb-6 group-hover:bg-[#4E759C] group-hover:text-white transition-colors">
                                <Wrench size={32} />
                            </div>
                            <h3 className="text-xl font-black uppercase italic text-slate-800 mb-3">{t.autoServices.accessories}</h3>
                            <p className="text-slate-500 mb-6">{t.autoServices.accessoriesDesc}</p>
                            <a
                                href={getWhatsAppLink(t.autoServices.accessories)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold uppercase text-[#4E759C] hover:text-[#2c4e70] transition-colors"
                            >
                                {t.common.requestInfo} <ArrowRight size={16} />
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#A6C5E1] transition-all group">
                            <div className="w-14 h-14 bg-[#A6C5E1]/20 rounded-lg flex items-center justify-center text-[#4E759C] mb-6 group-hover:bg-[#4E759C] group-hover:text-white transition-colors">
                                <Laptop size={32} />
                            </div>
                            <h3 className="text-xl font-black uppercase italic text-slate-800 mb-3">{t.autoServices.diagnostics}</h3>
                            <p className="text-slate-500 mb-6">{t.autoServices.diagnosticsDesc}</p>
                            <a
                                href={getWhatsAppLink(t.autoServices.diagnostics)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold uppercase text-[#4E759C] hover:text-[#2c4e70] transition-colors"
                            >
                                {t.common.requestInfo} <ArrowRight size={16} />
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#A6C5E1] transition-all group">
                            <div className="w-14 h-14 bg-[#A6C5E1]/20 rounded-lg flex items-center justify-center text-[#4E759C] mb-6 group-hover:bg-[#4E759C] group-hover:text-white transition-colors">
                                <Filter size={32} />
                            </div>
                            <h3 className="text-xl font-black uppercase italic text-slate-800 mb-3">{t.autoServices.preventive}</h3>
                            <p className="text-slate-500 mb-6">{t.autoServices.preventiveDesc}</p>
                            <a
                                href={getWhatsAppLink(t.autoServices.preventive)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold uppercase text-[#4E759C] hover:text-[#2c4e70] transition-colors"
                            >
                                {t.common.requestInfo} <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <BrandFooter
                logoSrc="/images/455AutoServiceLogo.jpeg"
                description={t.autoServices.footerDesc}
                instagramUrl="https://www.instagram.com/autoservicios455/"
                brandName="Auto Servicios 455"
            />
        </div>
    );
}
