"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const slides = [
    {
        id: 1,
        image: "/assets/onboarding/hire.png",
        title: "Hire Tech Talent On-Demand",
        description:
            "Instantly book skilled developers, designers, and other tech professionals by the hour for any task.",
        bgColor: "bg-[#1E293B]", // Dark Navy
    },
    {
        id: 2,
        image: "/assets/onboarding/time.png",
        title: "Pay Per Minute, Not Per Project",
        description:
            "Book an expert for the exact time you need and never overpay for unused hours.",
        bgColor: "bg-[#0F172A]", // Darker Navy
    },
    {
        id: 3,
        image: "/assets/onboarding/help.png",
        title: "Instant Help, When You Need It Most",
        description:
            "Get connected with a verified tech expert in minutes for urgent issues. Available 24/7, right from your phone.",
        bgColor: "bg-[#F8FAFC]", // Light/White
        textColor: "text-slate-900",
        isLight: true,
    },
];

export default function OnboardingPage() {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const router = useRouter();

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide((prev) => prev + 1);
        } else {
            router.push("/role-selection");
        }
    };

    const skip = () => {
        router.push("/role-selection");
    };

    const slide = slides[currentSlide];

    return (
        <div
            className={cn(
                "relative flex h-screen w-full flex-col overflow-hidden transition-colors duration-500",
                slide.bgColor
            )}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-6">
                {currentSlide > 0 ? (
                    <button
                        onClick={() => setCurrentSlide((prev) => prev - 1)}
                        className={cn(
                            "p-2 transition-colors",
                            slide.isLight ? "text-slate-900" : "text-white"
                        )}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                ) : (
                    <div className="w-10" /> // Spacer
                )}
                <button
                    onClick={skip}
                    className={cn(
                        "text-sm font-medium transition-colors",
                        slide.isLight ? "text-slate-600" : "text-slate-400"
                    )}
                >
                    Skip
                </button>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col items-center justify-center px-6 pb-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slide.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="relative mb-8 h-64 w-64 overflow-hidden rounded-full shadow-2xl sm:h-80 sm:w-80">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <h1
                            className={cn(
                                "mb-4 text-3xl font-bold leading-tight sm:text-4xl",
                                slide.isLight ? "text-slate-900" : "text-white"
                            )}
                        >
                            {slide.title}
                        </h1>
                        <p
                            className={cn(
                                "mb-8 max-w-xs text-base leading-relaxed sm:text-lg",
                                slide.isLight ? "text-slate-600" : "text-slate-400"
                            )}
                        >
                            {slide.description}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* Indicators */}
                <div className="mb-8 flex space-x-2">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={cn(
                                "h-2 rounded-full transition-all duration-300",
                                index === currentSlide ? "w-8 bg-primary" : "w-2",
                                index === currentSlide
                                    ? ""
                                    : slide.isLight
                                        ? "bg-slate-300"
                                        : "bg-slate-700"
                            )}
                        />
                    ))}
                </div>

                {/* Action Button */}
                <Button
                    onClick={nextSlide}
                    className="w-full max-w-xs bg-black text-white"
                    size="lg"
                    fullWidth
                >
                    {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
                </Button>
            </div>
        </div>
    );
}
