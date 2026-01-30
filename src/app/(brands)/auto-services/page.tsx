"use client";

import Link from "next/link";
import { Wrench, Disc, Thermometer, Car, Laptop, Filter, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export default function AutoServicesPage() {
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
                        <Link href="#services" className="hover:text-[#4E759C] transition-colors">Services</Link>
                        <Link href="#about" className="hover:text-[#4E759C] transition-colors">About Us</Link>
                        <Link href="#contact" className="hover:text-[#4E759C] transition-colors">Contact</Link>
                    </div>
                    <button className="bg-[#4E759C] text-white px-6 py-2 rounded-full font-bold uppercase text-xs hover:bg-[#3a5a78] transition-all shadow-lg shadow-[#4E759C]/20">
                        Book Now
                    </button>
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
                        Trusted Auto Care Since 2010
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-tight">
                        Expert Care for <br />
                        <span className="text-[#A6C5E1]">Your Vehicle</span>
                    </h1>
                    <p className="text-xl text-slate-200 max-w-2xl mx-auto font-medium">
                        Comprehensive auto repair and maintenance services. We keep you on the road with safety and reliability.
                    </p>
                    <div className="pt-8">
                        <a href="#services" className="bg-[#4E759C] text-white px-10 py-4 rounded-lg font-black uppercase tracking-widest hover:bg-[#A6C5E1] hover:text-[#4E759C] transition-all shadow-xl shadow-[#4E759C]/50 inline-block">
                            Our Services
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
                            Who <span className="text-[#4E759C]">We Are</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            At 455 Auto Services, we define ourselves by our commitment to quality and transparency. With over 15 years of experience in the automotive industry, our team of certified mechanics uses state-of-the-art diagnostic tools to ensure every vehicle receives the best care possible.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Whether it's routine maintenance or complex repairs, we treat every car as if it were our own. We believe in honest pricing and quick turnaround times so you can get back on the road safely.
                        </p>
                        <div className="flex gap-8 pt-4">
                            <div>
                                <h3 className="text-3xl font-black text-[#4E759C]">15+</h3>
                                <p className="text-sm font-bold uppercase text-slate-400">Years Exp.</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-[#4E759C]">5k+</h3>
                                <p className="text-sm font-bold uppercase text-slate-400">Happy Clients</p>
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
                            Our <span className="text-[#4E759C]">Services</span>
                        </h2>
                        <p className="text-slate-500">
                            We offer a complete range of automotive services to keep your vehicle running at peak performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Item */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#A6C5E1] transition-all group">
                            <div className="w-14 h-14 bg-[#A6C5E1]/20 rounded-lg flex items-center justify-center text-[#4E759C] mb-6 group-hover:bg-[#4E759C] group-hover:text-white transition-colors">
                                <Car size={32} />
                            </div>
                            <h3 className="text-xl font-black uppercase italic text-slate-800 mb-3">Oil Change</h3>
                            <p className="text-slate-500">Premium synthetic and conventional oil changes to protect your engine and improve efficiency.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#A6C5E1] transition-all group">
                            <div className="w-14 h-14 bg-[#A6C5E1]/20 rounded-lg flex items-center justify-center text-[#4E759C] mb-6 group-hover:bg-[#4E759C] group-hover:text-white transition-colors">
                                <Thermometer size={32} />
                            </div>
                            <h3 className="text-xl font-black uppercase italic text-slate-800 mb-3">A/C Repair</h3>
                            <p className="text-slate-500">Complete air conditioning diagnostics, recharging, and repair to keep you cool.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#A6C5E1] transition-all group">
                            <div className="w-14 h-14 bg-[#A6C5E1]/20 rounded-lg flex items-center justify-center text-[#4E759C] mb-6 group-hover:bg-[#4E759C] group-hover:text-white transition-colors">
                                <Disc size={32} />
                            </div>
                            <h3 className="text-xl font-black uppercase italic text-slate-800 mb-3">Brake Bands</h3>
                            <p className="text-slate-500">Brake pad replacement, rotor resurfacing, and system checks for maximum stopping power.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#A6C5E1] transition-all group">
                            <div className="w-14 h-14 bg-[#A6C5E1]/20 rounded-lg flex items-center justify-center text-[#4E759C] mb-6 group-hover:bg-[#4E759C] group-hover:text-white transition-colors">
                                <Wrench size={32} />
                            </div>
                            <h3 className="text-xl font-black uppercase italic text-slate-800 mb-3">Accessories</h3>
                            <p className="text-slate-500">Installation of custom lights, audio systems, racks, and other vehicle enhancements.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#A6C5E1] transition-all group">
                            <div className="w-14 h-14 bg-[#A6C5E1]/20 rounded-lg flex items-center justify-center text-[#4E759C] mb-6 group-hover:bg-[#4E759C] group-hover:text-white transition-colors">
                                <Laptop size={32} />
                            </div>
                            <h3 className="text-xl font-black uppercase italic text-slate-800 mb-3">Diagnostics</h3>
                            <p className="text-slate-500">Computerized engine diagnostics to accurately identify and fix any warning lights or issues.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#A6C5E1] transition-all group">
                            <div className="w-14 h-14 bg-[#A6C5E1]/20 rounded-lg flex items-center justify-center text-[#4E759C] mb-6 group-hover:bg-[#4E759C] group-hover:text-white transition-colors">
                                <Filter size={32} />
                            </div>
                            <h3 className="text-xl font-black uppercase italic text-slate-800 mb-3">Preventive</h3>
                            <p className="text-slate-500">Regular check-ups, fluid top-offs, and filter replacements to prevent costly future repairs.</p>
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
                            Your trusted partner for all automotive needs. Professional service with a personal touch.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#4E759C] transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#4E759C] transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase mb-6 text-[#A6C5E1]">Contact Info</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-1 text-[#4E759C] shrink-0" size={18} />
                                <span>123 Main Street, Santo Domingo, Dominican Republic</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-[#4E759C] shrink-0" size={18} />
                                <span>+1 (829) 555-0455</span>
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.058721677351!2d-69.9312!3d18.4861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI5JzEwLjAiTiA2OcKwNTUnNTIuMyJX!5e0!3m2!1sen!2sdo!4v1620000000000!5m2!1sen!2sdo"
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
