import Link from "next/link";
import { ArrowRight, Shield, Wind, Zap } from "lucide-react";

export default function NexxPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-[#C54D3C] selection:text-white">
            {/* Navigation (Fixed) */}
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center text-black/90 bg-white/90 backdrop-blur-md transition-all">
                <div className="relative group cursor-pointer w-32 h-12 flex items-center">
                    {/* Logo Image Placeholder */}
                    <img src="https://nexx-helmets.com/wp-content/themes/nexx/images/logotype.svg" alt="Nexx Helmets" className="w-32 h-12 object-contain" />
                </div>
                <div className="hidden md:flex gap-8 font-bold uppercase text-sm tracking-widest">
                    <Link href="#helmets" className="hover:text-[#C54D3C] transition-colors">Helmets</Link>
                    <Link href="#about" className="hover:text-[#C54D3C] transition-colors">Safety</Link>
                    <Link href="/nexx/catalog" className="hover:text-[#C54D3C] transition-colors">Catalog</Link>
                </div>
                <button className="hidden md:block border-2 border-black px-6 py-2 rounded-full font-bold uppercase text-xs hover:bg-black hover:text-white transition-all">
                    Contact Us
                </button>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-start bg-white overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-[#C54D3C]/20 to-transparent skew-x-12 transform translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

                {/* Placeholder for Hero Image */}
                {/* <div className="absolute inset-0 z-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center" /> */}
                <video className="absolute inset-0 z-0 opacity-60" autoPlay playsInline loop muted poster="">
                    <source src="https://nexx-helmets.com/wp-content/uploads/2025/10/TECH_RALLY.mp4" type="video/mp4" />
                </video>

                <div className="relative z-20 px-8 md:px-24 w-full md:w-2/3 space-y-6">
                    <div className="inline-block bg-[#C54D3C] text-black font-black uppercase text-xs px-3 py-1 mb-2 tracking-widest">
                        Official Verified Dealer
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9]">
                        Ride <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">
                            The Future.
                        </span>
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl max-w-md font-medium border-l-4 border-[#C54D3C] pl-4">
                        European innovation meets motorcycle passion.
                        Technologically advanced helmets for every rider.
                    </p>
                    <div className="pt-8 flex flex-col md:flex-row gap-4">
                        <Link href="/nexx/catalog">
                            <button className="bg-[#C54D3C] text-white px-10 py-4 rounded-none font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all clip-path-slant">
                                View Collection
                            </button>
                        </Link>
                        <button className="border border-black/30 text-black px-10 py-4 rounded-none font-bold uppercase tracking-widest hover:border-black transition-all backdrop-blur-sm">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Categories / Grid */}
            <section id="helmets" className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-6">
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
                            New <span className="text-[#C54D3C]">Arrivals</span>
                        </h2>
                        <Link href="/nexx/catalog" className="text-sm font-bold uppercase tracking-widest flex items-center hover:text-[#C54D3C] transition-colors">
                            See All <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="group relative h-[500px] bg-white overflow-hidden border border-gray-200 hover:border-[#C54D3C] transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent z-10" />
                                <img
                                    src={'https://nexx-helmets.com/wp-content/uploads/2025/10/XRALLY_RAID_BLUE_RED_SIDE-300x300.png'}
                                    alt="Helmet"
                                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    <h3 className="text-3xl font-black uppercase italic mb-2">Nexx X.WED {i + 2}</h3>
                                    <p className="text-gray-600 mb-6 line-clamp-2">Carbon fiber shell with X-Matrix 2 technology. Ultimate adventure versatility.</p>
                                    <span className="text-[#C54D3C] font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                        View Details <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology / Features */}
            <section id="about" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C54D3C] to-transparent opacity-50" />

                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-[#C54D3C] blur-[100px] opacity-20 rounded-full" />
                        <img
                            src="https://nexx-helmets.com/wp-content/uploads/sb-instagram-feed-images/612336352_1334536158711011_5161154648921028489_nfull.webp"
                            alt="Technology"
                            className="relative z-10 border-2 border-zinc-800 bg-zinc-900 p-2"
                        />
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic leading-tight">
                            Advanced <br /><span className="text-[#C54D3C]">Composite Tech</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Nexx Helmets are crafted with X-Matrix 2 technology, combining fiberglass, 3D organic fibers, and aramid reinforcements for superior strength and lightness.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                            <div className="space-y-3">
                                <Shield className="w-10 h-10 text-[#C54D3C]" />
                                <h3 className="text-xl font-bold uppercase">X-Matrix Shell</h3>
                                <p className="text-gray-500 text-sm">Resistant, lightweight and flexible.</p>
                            </div>
                            <div className="space-y-3">
                                <Wind className="w-10 h-10 text-[#C54D3C]" />
                                <h3 className="text-xl font-bold uppercase">Air Dynamic</h3>
                                <p className="text-gray-500 text-sm">Complex ventilation systems for varied conditions.</p>
                            </div>
                            <div className="space-y-3">
                                <Zap className="w-10 h-10 text-[#C54D3C]" />
                                <h3 className="text-xl font-bold uppercase">Vora Tech</h3>
                                <p className="text-gray-500 text-sm">Innovative visor systems for wide field of view.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-100 border-t border-gray-200 py-16 text-center md:text-left">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <div className="text-xl font-black italic tracking-tighter uppercase text-black">
                            Nexx <span className="text-[#C54D3C]">Helmets</span>
                        </div>
                        <p className="text-gray-500 text-sm">
                            Official representative.
                            <br />Innovation, Design, Technology.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold uppercase mb-6 text-sm tracking-wider text-black">Shop</h4>
                        <ul className="space-y-4 text-gray-600 text-sm">
                            <li><a href="#" className="hover:text-black transition-colors">Adventure</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Touring</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Sport</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold uppercase mb-6 text-sm tracking-wider text-black">Support</h4>
                        <ul className="space-y-4 text-gray-600 text-sm">
                            <li><a href="#" className="hover:text-black transition-colors">Size Guide</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Warranty</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold uppercase mb-6 text-sm tracking-wider text-black">Newsletter</h4>
                        <div className="flex bg-white border border-gray-300 p-1">
                            <input type="email" placeholder="EMAIL ADDRESS" className="bg-transparent px-4 py-2 w-full text-sm focus:outline-none text-black placeholder-gray-400" />
                            <button className="bg-[#C54D3C] text-white px-4 py-2 font-bold uppercase text-xs hover:bg-black hover:text-white transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© 2026 Nexx Helmets. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-black">Instagram</a>
                        <a href="#" className="hover:text-black">Facebook</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
