"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, Calendar, Clock, Hourglass, Hash, CreditCard, MessageSquare, XCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"

export default function BookingDetailPage({ params }: { params: { id: string } }) {
    const router = useRouter()

    // In a real app, fetch data using params.id

    return (
        <div className="flex min-h-screen flex-col bg-background pb-8">
            {/* Header */}
            <div className="flex items-center justify-between p-6">
                <button onClick={() => router.back()} className="rounded-full bg-secondary/50 p-2 text-muted-foreground hover:text-foreground">
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <h1 className="text-lg font-bold">Booking Details</h1>
                <div className="w-10" /> {/* Spacer for centering */}
            </div>

            {/* Profile Section */}
            <div className="flex flex-col items-center pb-8 pt-2">
                <div className="mb-4 rounded-full border-4 border-secondary p-1">
                    <Avatar className="h-24 w-24">
                        <AvatarImage src="/assets/avatars/jane.png" />
                        <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                </div>
                <h2 className="text-xl font-bold">Jane Doe</h2>
                <p className="mb-4 text-sm text-muted-foreground">Senior UX Designer</p>
                <Badge className="bg-green-500/20 px-4 py-1.5 text-sm font-medium text-green-500 hover:bg-green-500/30">
                    Confirmed
                </Badge>
            </div>

            {/* Details List */}
            <div className="flex-1 px-6">
                <div className="space-y-6 rounded-3xl bg-secondary/20 p-6">

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/50 text-muted-foreground">
                                <Calendar className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Date</p>
                                <p className="font-medium">Mon, 28 Oct 2024</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-px w-full bg-border/50" />

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/50 text-muted-foreground">
                                <Clock className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Time</p>
                                <p className="font-medium">10:00 AM - 12:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-px w-full bg-border/50" />

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/50 text-muted-foreground">
                                <Hourglass className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Duration</p>
                                <p className="font-medium">2 Hours</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-px w-full bg-border/50" />

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/50 text-muted-foreground">
                                <Hash className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Booking ID</p>
                                <p className="font-medium">#SS-84621</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-px w-full bg-border/50" />

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/50 text-muted-foreground">
                                <CreditCard className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Total Cost</p>
                                <p className="font-medium">$150.00</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-3 px-6">
                <Button
                    size="lg"
                    fullWidth
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => router.push(`/client/messages/1`)} // Mock link to chat
                >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Message
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    fullWidth
                    className="border-red-500/20 bg-red-500/10 text-red-500 hover:bg-red-500/20 hover:text-red-500"
                >
                    <XCircle className="mr-2 h-5 w-5" />
                    Cancel Booking
                </Button>
            </div>
        </div>
    )
}