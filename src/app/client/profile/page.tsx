"use client"

import { ChevronRight, User, CreditCard, Bell, Globe, Moon, HelpCircle, Shield, FileText, LogOut } from "lucide-react"
import { BottomNav } from "@/components/layout/BottomNav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { Switch } from "@/components/ui/Switch" // Need to create simple switch

function ProfileItem({ icon: Icon, label, value, hasSwitch }: any) {
    return (
        <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/50 text-muted-foreground">
                    <Icon className="h-5 w-5" />
                </div>
                <span className="font-medium">{label}</span>
            </div>
            {hasSwitch ? (
                <div className="h-6 w-11 rounded-full bg-primary p-1 cursor-pointer"><div className="h-4 w-4 rounded-full bg-white shadow-sm ml-auto" /></div>
            ) : (
                <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-sm">{value}</span>
                    <ChevronRight className="h-5 w-5" />
                </div>
            )}
        </div>
    )
}

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-background pb-24">
            <div className="flex flex-col items-center pt-10 pb-8">
                <div className="relative mb-4">
                    <Avatar className="h-24 w-24 border-4 border-secondary">
                        <AvatarImage src="/assets/avatars/alex.png" />
                        <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-0 right-0 rounded-full bg-primary p-1.5 border-4 border-background">
                        <User className="h-4 w-4 text-white" />
                    </div>
                </div>
                <h1 className="text-xl font-bold">Ritik!</h1>
                <p className="text-muted-foreground">alex.chen@email.com</p>
            </div>

            <div className="px-6 space-y-8">
                <section>
                    <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Account</h2>
                    <div className="divide-y divide-border rounded-2xl border border-border bg-secondary/20 px-4">
                        <ProfileItem icon={User} label="Edit Profile" />
                        <ProfileItem icon={CreditCard} label="Payment Methods" />
                    </div>
                </section>

                <section>
                    <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Settings</h2>
                    <div className="divide-y divide-border rounded-2xl border border-border bg-secondary/20 px-4">
                        <ProfileItem icon={Bell} label="Notifications" hasSwitch />
                        <ProfileItem icon={Globe} label="Language" value="English" />
                        <ProfileItem icon={Moon} label="Dark Mode" hasSwitch />
                    </div>
                </section>

                <section>
                    <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Support</h2>
                    <div className="divide-y divide-border rounded-2xl border border-border bg-secondary/20 px-4">
                        <ProfileItem icon={HelpCircle} label="Help & Support" />
                        <ProfileItem icon={Shield} label="Privacy Policy" />
                    </div>
                </section>

                <button className="flex w-fit p-3 items-center justify-center gap-2 rounded-xl border border-destructive/50 py-3 text-destructive hover:bg-destructive/10">
                    <LogOut className="h-5 w-5" />
                    Sign Out
                </button>
            </div>
            <BottomNav />
        </div>
    )
}