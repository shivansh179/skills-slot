"use client"

import * as React from "react"
import Link from "next/link"
import { Calendar, Clock, ChevronRight, MoreVertical } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { Badge } from "@/components/ui/Badge"
import { BottomNav } from "@/components/layout/BottomNav"
import { cn } from "@/lib/utils"

// Mock Data
const bookings = [
    {
        id: "SKL-8XV2K9",
        talent: "Jane Doe",
        role: "Senior UX Designer",
        date: "Mon, Oct 28",
        time: "2:00 PM",
        status: "Confirmed",
        img: "/assets/avatars/jane.png",
    },
    {
        id: "SKL-992M21",
        talent: "John Smith",
        role: "DevOps Engineer",
        date: "Wed, Oct 30",
        time: "10:00 AM",
        status: "Pending",
        img: "/assets/avatars/john.png",
    },
    {
        id: "SKL-OLD123",
        talent: "Sarah Jenkins",
        role: "iOS Developer",
        date: "Oct 15",
        time: "4:00 PM",
        status: "Completed",
        img: "/assets/avatars/brenda.png",
    }
]

export default function BookingsListPage() {
    const [activeTab, setActiveTab] = React.useState("Upcoming")

    return (
        <div className="min-h-screen bg-background pb-24">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-background/80 p-6 backdrop-blur-md">
                <h1 className="text-2xl font-bold">My Bookings</h1>
            </div>

            {/* Tabs */}
            <div className="px-6 mb-6">
                <div className="flex rounded-xl bg-secondary/50 p-1">
                    {["Upcoming", "Completed", "Cancelled"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "flex-1 rounded-lg py-2 text-sm font-medium transition-all",
                                activeTab === tab
                                    ? "bg-background text-foreground shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* List */}
            <div className="px-6 space-y-4">
                {bookings.map((booking) => (
                    <Link
                        href={`/client/bookings/${booking.id}`}
                        key={booking.id}
                        className="block rounded-2xl border border-border bg-card p-4 transition-all hover:bg-secondary/30"
                    >
                        <div className="mb-4 flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-12 w-12 border border-border">
                                    <AvatarImage src={booking.img} />
                                    <AvatarFallback>{booking.talent[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="font-bold">{booking.talent}</h3>
                                    <p className="text-xs text-muted-foreground">{booking.role}</p>
                                </div>
                            </div>
                            <Badge
                                variant={booking.status === "Confirmed" ? "default" : "secondary"}
                                className={cn(
                                    booking.status === "Confirmed" ? "bg-green-500/20 text-green-500 hover:bg-green-500/30" :
                                        booking.status === "Pending" ? "bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" : ""
                                )}
                            >
                                {booking.status}
                            </Badge>
                        </div>

                        <div className="flex items-center justify-between rounded-xl bg-secondary/30 p-3">
                            <div className="flex items-center gap-2 text-sm">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>{booking.date}</span>
                            </div>
                            <div className="h-4 w-px bg-border" />
                            <div className="flex items-center gap-2 text-sm">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span>{booking.time}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <BottomNav />
        </div>
    )
}