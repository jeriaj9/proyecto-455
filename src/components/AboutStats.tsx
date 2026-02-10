"use client";

import AnimatedCounter from "./AnimatedCounter";

interface AboutStatsProps {
    yearsLabel: string;
    customersLabel: string;
}

export default function AboutStats({ yearsLabel, customersLabel }: AboutStatsProps) {
    return (
        <div className="flex gap-8 pt-4">
            <div>
                <div className="text-3xl font-black text-[#4E759C] flex items-center">
                    <AnimatedCounter endValue={3} duration={1500} suffix="+" />
                </div>
                <p className="text-sm font-bold uppercase text-slate-400">{yearsLabel}</p>
            </div>
            <div>
                <div className="text-3xl font-black text-[#4E759C] flex items-center">
                    <AnimatedCounter
                        startValue={200}
                        endValue={2500}
                        duration={2000}
                        suffix="+"
                    />
                </div>
                <p className="text-sm font-bold uppercase text-slate-400">{customersLabel}</p>
            </div>
        </div>
    );
}
