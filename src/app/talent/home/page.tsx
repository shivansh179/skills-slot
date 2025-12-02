"use client";

import * as React from "react";
import { Menu, Bell, Plus, Calendar } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { StatCard } from "@/components/features/StatCard";
import { BookingItem } from "@/components/features/BookingItem";
import { BottomNav } from "@/components/layout/BottomNav";

export default function TalentHomePage() {
    return (
        <div className="min-h-screen bg-[#0F172A] pb-24 text-white">
            {/* Header */}
            <div className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-3">
                    <Menu className="h-6 w-6 text-slate-400" />
                    <span className="text-lg font-bold">Good Morning, Alex</span>
                </div>
                <div className="flex items-center space-x-3">
                    <Bell className="h-6 w-6 text-slate-400" />
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="/assets/avatars/alex.png" />
                        <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 px-6 mb-8">
                <StatCard
                    label="Earnings (This Week)"
                    value="$1,250"
                    trend="+5.2%"
                />
                <StatCard
                    label="Upcoming Sessions"
                    value="8"
                />
                <div className="col-span-2">
                    <StatCard
                        label="Profile Views"
                        value="142"
                    />
                </div>
            </div>

            {/* Today's Bookings */}
            <div className="px-6 mb-8">
                <h2 className="mb-4 text-lg font-bold">Today's Bookings</h2>
                <div className="space-y-3">
                    <BookingItem
                        title="React Native Debugging"
                        clientName="Jane Doe"
                        time="2:00 PM"
                        image="/assets/avatars/brenda.png" // Using Brenda as client for demo
                    />
                    <BookingItem
                        title="API Integration Support"
                        clientName="John Smith"
                        time="4:30 PM"
                        image="/assets/avatars/alex.png" // Reuse
                    />
                </div>
            </div>

            {/* Your Skills */}
            <div className="px-6 mb-8">
                <h2 className="mb-4 text-lg font-bold">Your Skills</h2>
                <div className="flex flex-wrap gap-2">
                    <Badge className="bg-slate-800 px-3 py-1 text-sm hover:bg-slate-700">Python</Badge>
                    <Badge className="bg-slate-800 px-3 py-1 text-sm hover:bg-slate-700">AWS</Badge>
                    <Badge className="bg-slate-800 px-3 py-1 text-sm hover:bg-slate-700">UI/UX Design</Badge>
                    <Badge className="bg-slate-800 px-3 py-1 text-sm hover:bg-slate-700">React</Badge>
                    <Button variant="outline" size="sm" className="h-7 rounded-full border-slate-700 bg-transparent text-xs text-slate-400 hover:text-white">
                        <Plus className="mr-1 h-3 w-3" /> Add Skill
                    </Button>
                </div>
            </div>

            {/* Boost Profile Card */}
            <div className="px-6">
                <div className="relative overflow-hidden rounded-2xl  from-purple-600 to-blue-600 p-6">
                    <h3 className="mb-2 text-lg font-bold">Boost your profile</h3>
                    <p className="mb-4 text-sm text-white/80">
                        Get more bookings by completing your profile or adding certifications.
                    </p>
                    <div className="flex items-center justify-between">
                        <Button className="bg-white text-blue-600 hover:bg-white/90">
                            Get Started
                        </Button>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                            <Calendar className="h-5 w-5 text-white" />
                        </div>
                    </div>
                </div>
            </div>

            <BottomNav />
        </div>
    );
}
