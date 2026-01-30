"use client";

import Link from "next/link";
import { Wrench, Disc, Thermometer, Car, Laptop, Filter, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import ProjectDropdown from "@/components/ProjectDropdown";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AutoServicesPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            {/* Header */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#4E759C]/20 shadow-sm">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/455AutoServicesLogo.jpg" alt="455 Auto Services" className="h-12 w-auto object-contain" />
                    </div>
                    <div className="hidden md:flex gap-8 font-bold uppercase text-sm tracking-widest text-slate-600">
                        <Link href="#services" className="hover:text-[#4E759C] transition-colors">{t.common.services}</Link>
                        <Link href="#about" className="hover:text-[#4E759C] transition-colors">{t.common.aboutUs}</Link>
                        <Link href="#contact" className="hover:text-[#4E759C] transition-colors">{t.common.contact}</Link>
                    </div>
                    <ProjectDropdown theme="light" />
                </div>
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
                            src="https://instagram.fsdq1-2.fna.fbcdn.net/v/t39.30808-6/449785137_17918166788939146_1836767684387046958_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzQwNDg2MjkxNjI0NTgxNjU0Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=24l2rUbfzx8Q7kNvwGlpmg7&_nc_oc=AdmbrNcS5_UcFVmA9iFclYRiVX3QFTsOcm83UxwqK499zSQilQrVIM2WadzZ9rGxJYA&_nc_ad=z-m&_nc_cid=1367&_nc_zt=23&_nc_ht=instagram.fsdq1-2.fna&_nc_gid=OzSSrruFF-nASv8U3bFGDA&oh=00_AfosSH7_ylUMZsfSrNgtsJ93GR9ezSEmTgq4vdkDVfc1IA&oe=69830439"
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
                            <p className="text-slate-500">{t.autoServices.oilDesc}</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#A6C5E1] transition-all group">
                            <div className="w-14 h-14 bg-[#A6C5E1]/20 rounded-lg flex items-center justify-center text-[#4E759C] mb-6 group-hover:bg-[#4E759C] group-hover:text-white transition-colors">
                                <Thermometer size={32} />
                            </div>
                            <h3 className="text-xl font-black uppercase italic text-slate-800 mb-3">{t.autoServices.acRepair}</h3>
                            <p className="text-slate-500">{t.autoServices.acDesc}</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#A6C5E1] transition-all group">
                            <div className="w-14 h-14 bg-[#A6C5E1]/20 rounded-lg flex items-center justify-center text-[#4E759C] mb-6 group-hover:bg-[#4E759C] group-hover:text-white transition-colors">
                                <Disc size={32} />
                            </div>
                            <h3 className="text-xl font-black uppercase italic text-slate-800 mb-3">{t.autoServices.brakeBands}</h3>
                            <p className="text-slate-500">{t.autoServices.brakeDesc}</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#A6C5E1] transition-all group">
                            <div className="w-14 h-14 bg-[#A6C5E1]/20 rounded-lg flex items-center justify-center text-[#4E759C] mb-6 group-hover:bg-[#4E759C] group-hover:text-white transition-colors">
                                <Wrench size={32} />
                            </div>
                            <h3 className="text-xl font-black uppercase italic text-slate-800 mb-3">{t.autoServices.accessories}</h3>
                            <p className="text-slate-500">{t.autoServices.accessoriesDesc}</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#A6C5E1] transition-all group">
                            <div className="w-14 h-14 bg-[#A6C5E1]/20 rounded-lg flex items-center justify-center text-[#4E759C] mb-6 group-hover:bg-[#4E759C] group-hover:text-white transition-colors">
                                <Laptop size={32} />
                            </div>
                            <h3 className="text-xl font-black uppercase italic text-slate-800 mb-3">{t.autoServices.diagnostics}</h3>
                            <p className="text-slate-500">{t.autoServices.diagnosticsDesc}</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#A6C5E1] transition-all group">
                            <div className="w-14 h-14 bg-[#A6C5E1]/20 rounded-lg flex items-center justify-center text-[#4E759C] mb-6 group-hover:bg-[#4E759C] group-hover:text-white transition-colors">
                                <Filter size={32} />
                            </div>
                            <h3 className="text-xl font-black uppercase italic text-slate-800 mb-3">{t.autoServices.preventive}</h3>
                            <p className="text-slate-500">{t.autoServices.preventiveDesc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-[#1e293b] z-10 text-white pt-20 pb-10">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/455AutoServicesLogo.jpg" alt="455 Auto Services" className="h-14 w-auto object-contain rounded-md" />
                            {/* <div className="text-2xl font-black italic tracking-tighter uppercase">AUTO SERVICIOS <span className="text-[#4E759C]">455</span></div> */}
                        </div>
                        <p className="text-slate-400">
                            {t.autoServices.footerDesc}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#4E759C] transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/autoservicios455/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#4E759C] transition-colors">
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
                                <span>(809)-732-6422</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="text-[#4E759C] shrink-0" size={18} />
                                <span>Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</span>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 h-64 rounded-xl overflow-hidden bg-slate-800 relative">
                        {/* Map Placeholder - Replace with actual Google Maps Embed */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.53565663170068!2d-69.95589765063913!3d18.457799884563475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea561f889cf10a9%3A0xc96ba24ef9561a70!2sLovato%20Auto%20Gas!5e0!3m2!1sen!2sdo!4v1769807510715!5m2!1sen!2sdo"
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
                    <p>&copy; 2026 Auto Servicios 455. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
