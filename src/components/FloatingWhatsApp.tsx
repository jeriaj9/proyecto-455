"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/18298851616"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle size={32} fill="white" className="text-white" />
        </a>
    );
}
