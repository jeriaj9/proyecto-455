export default function AutoServicesPage() {
    const services = [
        { name: "Oil Change", icon: "🛢️" },
        { name: "Engine Filters", icon: "💨" },
        { name: "Cabin Filters", icon: "❄️" },
        { name: "A/C Repair", icon: "🌡️" },
        { name: "General Maintenance", icon: "🛠️" },
        { name: "Diagnostics", icon: "💻" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            {/* Hero */}
            <section className="relative h-[60vh] bg-green-900 flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                {/* Hero Image Placeholder */}
                <div className="absolute inset-0 bg-gray-800 animate-pulse" />

                <div className="relative z-20 text-center space-y-4 px-4">
                    <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wider">
                        Auto Servicios <span className="text-green-400">455</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-green-100">
                        Expert Mechanics. Premium Service. Trusted Results.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold uppercase text-slate-800">Our Services</h2>
                    <div className="w-24 h-1 bg-green-500 mx-auto mt-4" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-green-500 hover:-translate-y-1 transition-transform">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-slate-800">{service.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us & Contact */}
            <section className="bg-slate-900 text-white py-20 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-green-400">Why Choose Us?</h2>
                        <ul className="space-y-4 text-lg text-slate-300">
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Certified Technicians</li>
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Modern Diagnostic Tools</li>
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Transparent Pricing</li>
                            <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Quick Turnaround</li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-green-400">Visit Us</h2>
                        <p className="text-slate-300 text-lg">
                            123 Main Street, Santo Domingo.<br />
                            Open Mon-Fri: 8AM - 6PM <br />
                            Sat: 9AM - 2PM
                        </p>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full md:w-auto">
                            Contact via WhatsApp
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
