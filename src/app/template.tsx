"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLoader, { Brand } from "@/components/BrandLoader";
import { motion, AnimatePresence } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Determine brand synchronously from pathname to set initial state correctly
    const getBrand = (path: string): Brand | null => {
        if (path.startsWith("/shaft")) return "shaft";
        if (path.startsWith("/auto-services")) return "auto-services";
        if (path.startsWith("/nexx")) return "nexx";
        return null;
    };

    const targetBrand = getBrand(pathname);

    // If we are on a brand page, start in loading state.
    // Since Template remounts on navigation, this effectively resets state on new route.
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
                        initial={{ opacity: 1 }} // Start fully visible
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60]" // Ensure high z-index
                    >
                        <BrandLoader brand={currentBrand} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Only show children when not loading? Or show them underneath? 
                User said "cover the page completely... til animation end". 
                Usually it's better to render children underneath so they are ready when loader fades. 
                But if "page shows then loader appears", it means loader renders late.
                Initializing state to true should fix this. 
            */}
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
