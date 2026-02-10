"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
    endValue: number;
    startValue?: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

export default function AnimatedCounter({
    endValue,
    startValue = 0,
    duration = 2000,
    suffix = "",
    className = "",
}: AnimatedCounterProps) {
    const [count, setCount] = useState(startValue);
    const countRef = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !hasAnimated.current) {
                    setIsVisible(true);
                    hasAnimated.current = true;
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            const easeOutCubic = (x: number): number => {
                return 1 - Math.pow(1 - x, 3);
            };

            const percentage = Math.min(progress / duration, 1);
            const ease = easeOutCubic(percentage);

            const currentCount = Math.floor(startValue + (endValue - startValue) * ease);
            setCount(currentCount);

            if (progress < duration) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(endValue);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isVisible, endValue, startValue, duration]);

    return (
        <span ref={countRef} className={className}>
            {count}
            {suffix}
        </span>
    );
}
