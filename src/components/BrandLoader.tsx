"use client";

import { motion } from "framer-motion";

type Brand = "shaft" | "auto-services" | "nexx";

interface BrandLoaderProps {
    brand: Brand;
}

export default function BrandLoader({ brand }: BrandLoaderProps) {
    const getLoaderContent = () => {
        switch (brand) {
            case "shaft":
                return (
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="w-16 h-16 border-4 border-[#C54D3C] rounded-full border-t-transparent"
                        />
                        <p className="text-xl font-bold text-[#C54D3C]">Loading Shaft Dominicana</p>
                    </div>
                );
            case "auto-services":
                return (
                    <div className="flex flex-col items-center justify-center space-y-4">
                        {/* Placeholder for Vehicle + Tools animation */}
                        <motion.div
                            animate={{ x: [-10, 10, -10] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="text-4xl"
                        >
                            🚗 🔧
                        </motion.div>
                        <p className="text-xl font-bold text-green-600">Preparing Your Service</p>
                    </div>
                );
            case "nexx":
                return (
                    <div className="flex flex-col items-center justify-center space-y-4">
                        {/* Placeholder for 4x4 animation */}
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="text-4xl"
                        >
                            🚙 ⛰️
                        </motion.div>
                        <p className="text-xl font-bold text-orange-600">Exploring New Roads</p>
                    </div>
                );
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            {getLoaderContent()}
        </div>
    );
}
