"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLoader, { Brand } from "@/components/BrandLoader";
import { motion, AnimatePresence } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const getBrand = (path: string): Brand | null => {
        if (path.startsWith("/shaft")) return "shaft";
        if (path.startsWith("/auto-services")) return "auto-services";
        if (path.startsWith("/nexx")) return "nexx";
        return null;
    };

    const targetBrand = getBrand(pathname);
    const [loading, setLoading] = useState(!!targetBrand);
    const [currentBrand, setCurrentBrand] = useState<Brand | null>(targetBrand);

    useEffect(() => {
        if (targetBrand) {
            setCurrentBrand(targetBrand);
            setLoading(true);
            const timer = setTimeout(() => setLoading(false), 2500);
            return () => clearTimeout(timer);
        } else {
            setLoading(false);
        }
    }, [pathname, targetBrand]);

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && currentBrand && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60]"
                    >
                        <BrandLoader brand={currentBrand} />
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: loading ? 2.5 : 0 }}
            >
                {children}
            </motion.div>
        </>
    );
}
