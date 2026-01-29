export default function OffroadPage() {
    const featuredProducts = [
        { name: "Rooftop Tents", image: "⛺" },
        { name: "Retractable Awnings", image: "🌂" },
        { name: "Camping Gear", image: "🔥" },
        { name: "Off-road Accessories", image: "🔦" },
    ];

    return (
        <div className="min-h-screen bg-stone-100 text-stone-900">
            {/* Hero */}
            <section className="relative h-[70vh] bg-orange-950 flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                {/* Placeholder for Hero Image */}
                <div className="absolute inset-0 bg-gray-800 animate-pulse" />

                <div className="relative z-20 text-center space-y-6 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-widest font-serif">
                        455 <span className="text-orange-500">Offroad</span>
                    </h1>
                    <p className="text-xl md:text-3xl font-light italic text-orange-100">
                        "Explore where the road ends."
                    </p>
                </div>
            </section>

            {/* Lifestyle / Brand Identity */}
            <section className="py-24 px-8 max-w-5xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Adventure is Calling</h2>
                <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
                    We provide top-tier equipment for overlanding enthusiasts. Whether you are crossing rivers
                    or camping under the stars, our gear ensures you are ready for the unknown.
                </p>
            </section>

            {/* Featured Products */}
            <section className="bg-stone-900 text-stone-100 py-24 px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-orange-500 uppercase tracking-wider">Essential Gear</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredProducts.map((product, idx) => (
                            <div key={idx} className="group relative overflow-hidden rounded-lg bg-stone-800 aspect-square flex flex-col items-center justify-center">
                                <div className="text-6xl group-hover:scale-110 transition-transform duration-500">{product.image}</div>
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-xl font-bold text-orange-400">{product.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-8 text-center bg-orange-600 text-white">
                <h2 className="text-4xl font-bold mb-8">Ready to Equip Yout Rig?</h2>
                <button className="bg-black text-white text-xl py-4 px-10 rounded-full font-bold hover:bg-stone-900 transition-colors shadow-xl">
                    Contact Us Now
                </button>
            </section>
        </div>
    );
}
