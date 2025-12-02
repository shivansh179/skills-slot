"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight, CreditCard, Wallet, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { cn } from "@/lib/utils"

const STEPS = {
    DATE: 0,
    SUMMARY: 1,
    SUCCESS: 2,
}

export default function BookingPage() {
    const router = useRouter()
    const [step, setStep] = React.useState(STEPS.DATE)
    const [selectedDate, setSelectedDate] = React.useState<number | null>(25)
    const [selectedTime, setSelectedTime] = React.useState("10:00 AM")
    const [paymentMethod, setPaymentMethod] = React.useState("card")

    const dates = Array.from({ length: 31 }, (_, i) => i + 1)
    const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"]

    const handleNext = () => {
        if (step === STEPS.DATE) setStep(STEPS.SUMMARY)
        else if (step === STEPS.SUMMARY) setStep(STEPS.SUCCESS)
        else router.push("/client/home")
    }

    if (step === STEPS.SUCCESS) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                    <CheckCircle2 className="h-12 w-12" />
                </div>
                <h1 className="mb-2 text-2xl font-bold">Booking Confirmed</h1>
                <p className="mb-8 text-muted-foreground">
                    Your session with Jane Doe is scheduled. A calendar invite has been sent to your email.
                </p>

                <div className="mb-8 w-full rounded-2xl bg-secondary/30 p-4 text-left">
                    <div className="flex items-center gap-3 mb-4">
                        <Avatar>
                            <AvatarImage src="/assets/avatars/jane.png" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="font-semibold">Jane Doe</div>
                            <div className="text-xs text-muted-foreground">UX Designer</div>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-muted-foreground">Reference</span><span>SKL-8XV2K9</span></div>
                        <div className="flex justify-between"><span className="text-muted-foreground">Date</span><span>Mon, Dec 25 at 2:00 PM</span></div>
                    </div>
                </div>

                <Button size="lg" fullWidth onClick={() => router.push("/client/bookings")}>
                    Go to My Bookings
                </Button>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background pb-24">
            <div className="flex items-center p-6">
                <button onClick={() => step === 0 ? router.back() : setStep(prev => prev - 1)} className="p-2 -ml-2">
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <h1 className="ml-2 text-lg font-bold">
                    {step === STEPS.DATE ? "Select Date & Time" : "Summary & Payment"}
                </h1>
            </div>

            {step === STEPS.DATE && (
                <div className="px-6">
                    <div className="mb-6 flex items-center justify-between">
                        <button><ChevronLeft className="h-5 w-5 text-muted-foreground" /></button>
                        <span className="font-semibold">October 2024</span>
                        <button><ChevronRight className="h-5 w-5 text-muted-foreground" /></button>
                    </div>

                    <div className="mb-8 grid grid-cols-7 gap-y-4 text-center text-sm">
                        {["S", "M", "T", "W", "T", "F", "S"].map(d => <span key={d} className="text-muted-foreground">{d}</span>)}
                        {dates.map(d => (
                            <button
                                key={d}
                                onClick={() => setSelectedDate(d)}
                                className={cn(
                                    "mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm",
                                    selectedDate === d ? "bg-primary text-white" : "hover:bg-secondary"
                                )}
                            >
                                {d}
                            </button>
                        ))}
                    </div>

                    <h2 className="mb-4 text-lg font-bold">Available Slots</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map(time => (
                            <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={cn(
                                    "rounded-xl border border-border py-3 text-sm font-medium transition-all",
                                    selectedTime === time ? "border-primary bg-primary/10 text-primary" : "hover:border-primary/50"
                                )}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {step === STEPS.SUMMARY && (
                <div className="px-6">
                    <div className="mb-6 rounded-2xl bg-secondary/30 p-4">
                        <div className="flex items-center gap-4 border-b border-border pb-4">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src="/assets/avatars/jane.png" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-bold">Jane Doe</h3>
                                <p className="text-sm text-muted-foreground">Senior UX Designer</p>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Date & Time</span>
                                <span>Mon, Oct 28, 2:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Rate</span>
                                <span>$75/hr</span>
                            </div>
                            <div className="flex justify-between font-bold text-white">
                                <span>Total Cost</span>
                                <span>$150</span>
                            </div>
                        </div>
                    </div>

                    <h3 className="mb-4 text-lg font-bold">Select Payment Method</h3>
                    <div className="space-y-3">
                        <div
                            onClick={() => setPaymentMethod('card')}
                            className={cn("flex items-center justify-between rounded-xl border p-4 cursor-pointer", paymentMethod === 'card' ? "border-primary bg-primary/10" : "border-border bg-secondary/30")}
                        >
                            <div className="flex items-center gap-3">
                                <CreditCard className="h-5 w-5" />
                                <span className="font-medium">Credit/Debit Card</span>
                            </div>
                            <div className={cn("h-5 w-5 rounded-full border-2", paymentMethod === 'card' ? "border-primary bg-primary" : "border-muted-foreground")} />
                        </div>
                        <div
                            onClick={() => setPaymentMethod('wallet')}
                            className={cn("flex items-center justify-between rounded-xl border p-4 cursor-pointer", paymentMethod === 'wallet' ? "border-primary bg-primary/10" : "border-border bg-secondary/30")}
                        >
                            <div className="flex items-center gap-3">
                                <Wallet className="h-5 w-5" />
                                <span className="font-medium">Digital Wallet</span>
                            </div>
                            <div className={cn("h-5 w-5 rounded-full border-2", paymentMethod === 'wallet' ? "border-primary bg-primary" : "border-muted-foreground")} />
                        </div>
                    </div>
                </div>
            )}

            <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-background p-6">
                <Button size="lg" fullWidth onClick={handleNext}>
                    {step === STEPS.SUMMARY ? "Confirm & Pay $150" : "Next"}
                </Button>
            </div>
        </div>
    )
}