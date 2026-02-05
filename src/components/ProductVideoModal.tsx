"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductVideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
}

export default function ProductVideoModal({ isOpen, onClose, videoUrl }: ProductVideoModalProps) {
    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const getEmbedUrl = (url: string) => {
        try {
            // Handle various YouTube URL formats
            // https://www.youtube.com/watch?v=VIDEO_ID
            // https://youtu.be/VIDEO_ID
            // https://www.youtube.com/embed/VIDEO_ID

            let videoId = "";
            const urlObj = new URL(url);

            if (urlObj.hostname.includes("youtube.com")) {
                if (urlObj.pathname === "/watch") {
                    videoId = urlObj.searchParams.get("v") || "";
                } else if (urlObj.pathname.startsWith("/embed/")) {
                    videoId = urlObj.pathname.split("/embed/")[1];
                }
            } else if (urlObj.hostname === "youtu.be") {
                videoId = urlObj.pathname.slice(1);
            }

            if (!videoId) return url; // Fallback if parsing fails

            return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        } catch (e) {
            return url;
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 text-white">
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black rounded-full transition-colors text-white"
                        >
                            <X size={24} />
                        </button>

                        <div className="aspect-video w-full bg-black">
                            <iframe
                                src={getEmbedUrl(videoUrl)}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
