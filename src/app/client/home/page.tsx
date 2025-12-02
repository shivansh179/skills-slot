"use client"

import * as React from "react"
import { Search, Bell, Bug, PenTool, FileCode, Lightbulb, Star } from "lucide-react"
import { Input } from "@/components/ui/Input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { Badge } from "@/components/ui/Badge"
import { BottomNav } from "@/components/layout/BottomNav"
import { useRouter } from "next/navigation"
import { QuickTask } from "@/components/features/QuickTask"

function TalentCard({ name, role, rating, rate, img }: any) {
    const router = useRouter()
    return (
        <div onClick={() => router.push('/client/talent/1')} className="min-w-[200px] cursor-pointer snap-start rounded-2xl border border-border bg-secondary/30 p-4 transition-all hover:border-primary/50">
            <div className="mb-3 flex justify-center">
                <Avatar className="h-16 w-16">
                    <AvatarImage src={img} />
                    <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>
            </div>
            <div className="text-center">
                <h3 className="font-semibold">{name}</h3>
                <p className="text-xs text-muted-foreground">{role}</p>
                <div className="mt-2 flex items-center justify-center gap-2 text-xs">
                    <span className="flex items-center text-yellow-500"><Star className="mr-1 h-3 w-3 fill-current" /> {rating}</span>
                    <span className="text-muted-foreground">•</span>
                    <span>{rate}/hr</span>
                </div>
            </div>
            <button className="mt-4 w-full rounded-lg bg-primary py-2 text-xs font-semibold text-white">View Profile</button>
        </div>
    )
}

export default function ClientHome() {
    return (
        <div className="min-h-screen bg-background pb-24">
            <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src="/assets/avatars/alex.png" />
                        <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Welcome back,</span>
                        <span className="font-bold">Ritik!</span>
                    </div>
                </div>
                <button className="relative rounded-full bg-secondary/50 p-2 text-muted-foreground hover:text-foreground">
                    <Bell className="h-6 w-6" />
                    <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-background" />
                </button>
            </div>

            <div className="px-6 pb-6">
                <Input placeholder="Search skills, e.g., React..." icon={<Search className="h-5 w-5" />} />
            </div>

            <div className="hide-scrollbar flex gap-2 overflow-x-auto px-6 pb-8">
                {["All", "Developers", "Designers", "Marketers", "Consultants"].map((cat, i) => (
                    <Badge key={cat} variant={i === 0 ? "default" : "secondary"} className="cursor-pointer px-4 py-2 text-sm">{cat}</Badge>
                ))}
            </div>

            <section className="mb-8 px-6">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-bold">Top Rated Talent</h2>
                    <button className="text-sm text-primary">See All</button>
                </div>
                <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-4">
                    <TalentCard name="Alex Doe" role="React Native" rating={4.9} rate="$95" img="/assets/avatars/alex.png" />
                    <TalentCard name="Brenda Smith" role="UI/UX Designer" rating={4.8} rate="$80" img="/assets/avatars/brenda.png" />
                    <TalentCard name="John Lee" role="Backend Dev" rating={4.7} rate="$110" img="/assets/avatars/john.png" />
                </div>
            </section>

            <section className="px-6">
                <h2 className="mb-4 text-lg font-bold">Quick Tasks</h2>
                <div className="grid grid-cols-2 gap-4">
                    <QuickTask title="Fix a small bug" price="$50" icon={Bug} themeColor="blue" />
                    <QuickTask title="Design a logo" price="$150" icon={PenTool} themeColor="purple" />
                    <QuickTask title="Code review" price="$80" icon={FileCode} themeColor="emerald" />
                    <QuickTask title="Consultation" price="$100" icon={Lightbulb} themeColor="amber" />
                </div>
            </section>
            <BottomNav />
        </div>
    )
}