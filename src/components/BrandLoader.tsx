"use client";

import { motion } from "framer-motion";

export type Brand = "shaft" | "auto-services" | "nexx";

interface BrandLoaderProps {
    brand: Brand;
}

export default function BrandLoader({ brand }: BrandLoaderProps) {
    const getBrandConfig = () => {
        switch (brand) {
            case "shaft":
                return {
                    logo: "/images/ShaftLogo.png",
                    bg: "bg-black",
                    width: "w-64"
                };
            case "auto-services":
                return {
                    logo: "/images/455AutoServiceLogo.png",
                    bg: "bg-slate-900",
                    width: "w-64"
                };
            case "nexx":
                return {
                    logo: "/images/nexxLogo.png",
                    bg: "bg-neutral-950",
                    width: "w-48"
                };
            default:
                return {
                    logo: "",
                    bg: "bg-black",
                    width: "w-64"
                };
        }
    };

    const config = getBrandConfig();

    return (
        <div className={`fixed inset-0 z-[60] flex items-center justify-center ${config.bg}`}>
            <div className={`relative ${config.width}`}>
                <img
                    src={config.logo}
                    alt={`${brand} loader`}
                    className="w-full h-auto object-contain grayscale opacity-30"
                />

                <motion.div
                    className="absolute inset-0 overflow-hidden"
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0 0 0)" }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                >
                    <img
                        src={config.logo}
                        alt={`${brand} reveal`}
                        className="w-full h-auto object-contain"
                    />
                </motion.div>
            </div>
        </div>
    );
}
