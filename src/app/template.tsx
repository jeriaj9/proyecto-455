"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLoader from "@/components/BrandLoader";
import { motion, AnimatePresence } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);
    const [currentBrand, setCurrentBrand] = useState<"shaft" | "auto-services" | "offroad" | null>(null);

    useEffect(() => {
        let brand: "shaft" | "auto-services" | "offroad" | null = null;
        if (pathname.startsWith("/shaft")) brand = "shaft";
        else if (pathname.startsWith("/auto-services")) brand = "auto-services";
        else if (pathname.startsWith("/offroad")) brand = "offroad";

        if (brand) {
            setCurrentBrand(brand);
            setLoading(true);
            const timer = setTimeout(() => setLoading(false), 800); // 800ms loader
            return () => clearTimeout(timer);
        } else {
            setLoading(false);
        }
    }, [pathname]);

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && currentBrand && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 pointer-events-none"
                    >
                        <BrandLoader brand={currentBrand} />
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        </>
    );
}
