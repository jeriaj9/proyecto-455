"use client";

import Link from "next/link";
import { Wrench, Disc, Thermometer, Car, Laptop, Filter, Phone, MapPin, Clock, Facebook, Instagram, MessageCircle, ArrowRight } from "lucide-react";
import ProjectDropdown from "@/components/ProjectDropdown";
import { useLanguage } from "@/contexts/LanguageContext";
import BrandFooter from "@/components/BrandFooter";
import ServiceCard from "@/components/ServiceCard";

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
                    src="/images/455AutoServiceHero.avif"
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
                        <ServiceCard
                            icon={Car}
                            title={t.autoServices.oilChange}
                            description={t.autoServices.oilDesc}
                            linkHref={getWhatsAppLink(t.autoServices.oilChange)}
                            linkText={t.common.requestInfo}
                        />

                        <ServiceCard
                            icon={Thermometer}
                            title={t.autoServices.acRepair}
                            description={t.autoServices.acDesc}
                            linkHref={getWhatsAppLink(t.autoServices.acRepair)}
                            linkText={t.common.requestInfo}
                        />

                        <ServiceCard
                            icon={Disc}
                            title={t.autoServices.brakeBands}
                            description={t.autoServices.brakeDesc}
                            linkHref={getWhatsAppLink(t.autoServices.brakeBands)}
                            linkText={t.common.requestInfo}
                        />

                        <ServiceCard
                            icon={Wrench}
                            title={t.autoServices.accessories}
                            description={t.autoServices.accessoriesDesc}
                            linkHref={getWhatsAppLink(t.autoServices.accessories)}
                            linkText={t.common.requestInfo}
                        />

                        <ServiceCard
                            icon={Laptop}
                            title={t.autoServices.diagnostics}
                            description={t.autoServices.diagnosticsDesc}
                            linkHref={getWhatsAppLink(t.autoServices.diagnostics)}
                            linkText={t.common.requestInfo}
                        />

                        <ServiceCard
                            icon={Filter}
                            title={t.autoServices.preventive}
                            description={t.autoServices.preventiveDesc}
                            linkHref={getWhatsAppLink(t.autoServices.preventive)}
                            linkText={t.common.requestInfo}
                        />
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
