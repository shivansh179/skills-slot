"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Calendar, MessageSquare, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function BottomNav() {
    const pathname = usePathname()

    const links = [
        { href: "/client/home", label: "Home", icon: Home },
        { href: "/client/bookings", label: "Bookings", icon: Calendar },
        { href: "/client/messages", label: "Messages", icon: MessageSquare },
        { href: "/client/profile", label: "Profile", icon: User },
    ]

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/80 backdrop-blur-lg pb-6 pt-3 px-6">
            <div className="flex items-center justify-between">
                {links.map((link) => {
                    const Icon = link.icon
                    const isActive = pathname.startsWith(link.href)
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "flex flex-col items-center gap-1 transition-colors",
                                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <Icon className={cn("h-6 w-6", isActive && "fill-current")} />
                            <span className="text-[10px] font-medium">{link.label}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}