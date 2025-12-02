"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Heart, Star, MapPin, Briefcase } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export default function TalentDetailPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = React.useState("About");

    const tabs = ["About", "Skills", "Portfolio", "Reviews"];

    return (
        <div className="min-h-screen bg-[#0F172A] text-white">
            {/* Header */}
            <div className="flex items-center justify-between p-6">
                <button onClick={() => router.back()} className="p-2 text-slate-400 hover:text-white">
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <h1 className="text-lg font-bold">Talent Profile</h1>
                <button className="p-2 text-slate-400 hover:text-white">
                    <Heart className="h-6 w-6" />
                </button>
            </div>

            {/* Profile Info */}
            <div className="flex flex-col items-center px-6 pb-8">
                <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-slate-800">
                    <Avatar className="h-full w-full">
                        <AvatarImage src="/assets/avatars/brenda.png" />
                        <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                </div>
                <h2 className="mb-1 text-xl font-bold">Sarah Jenkins</h2>
                <p className="mb-6 text-sm text-slate-400">Senior iOS Developer</p>

                <div className="grid w-full grid-cols-3 gap-4">
                    <div className="flex flex-col items-center rounded-xl bg-slate-800/50 p-3">
                        <div className="mb-1 flex items-center text-yellow-500">
                            <Star className="mr-1 h-4 w-4 fill-current" />
                            <span className="font-bold">4.9</span>
                        </div>
                        <span className="text-xs text-slate-400">Rating</span>
                    </div>
                    <div className="flex flex-col items-center rounded-xl bg-slate-800/50 p-3">
                        <span className="mb-1 font-bold">128</span>
                        <span className="text-xs text-slate-400">Reviews</span>
                    </div>
                    <div className="flex flex-col items-center rounded-xl bg-slate-800/50 p-3">
                        <span className="mb-1 font-bold">$120/hr</span>
                        <span className="text-xs text-slate-400">Rate</span>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-slate-800 px-6">
                <div className="flex space-x-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "pb-3 text-sm font-medium transition-colors",
                                activeTab === tab
                                    ? "border-b-2 border-blue-500 text-blue-500"
                                    : "text-slate-400 hover:text-slate-200"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="p-6 pb-24">
                {activeTab === "About" && (
                    <div className="space-y-6">
                        <p className="text-sm leading-relaxed text-slate-300">
                            With over 8 years of experience in native iOS development, I specialize in building scalable and user-centric applications using Swift and SwiftUI. Passionate about clean code and creating delightful user experiences.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-400">
                                    <Briefcase className="h-4 w-4" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-slate-300">Experience</h3>
                                    <p className="text-sm font-bold text-white">8+ Years</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-400">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-slate-300">Location</h3>
                                    <p className="text-sm font-bold text-white">San Francisco, USA (PST)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* Other tabs would go here */}
            </div>

            {/* Bottom Action */}
            <div className="fixed bottom-0 left-0 right-0 border-t border-slate-800 bg-[#0F172A] p-6">
                <Button size="lg" fullWidth>
                    Book a Session
                </Button>
            </div>
        </div>
    );
}
