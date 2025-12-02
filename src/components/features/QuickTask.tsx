import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuickTaskProps {
    icon: LucideIcon
    title: string
    price: string
    themeColor: "blue" | "purple" | "emerald" | "amber"
}

export function QuickTask({ icon: Icon, title, price, themeColor }: QuickTaskProps) {
    const colorStyles = {
        blue: "bg-blue-500/20 text-blue-500",
        purple: "bg-purple-500/20 text-purple-500",
        emerald: "bg-emerald-500/20 text-emerald-500",
        amber: "bg-amber-500/20 text-amber-500",
    }

    return (
        <div className="flex cursor-pointer flex-col justify-between rounded-2xl border border-border bg-secondary/30 p-4 hover:bg-secondary/50 transition-colors">
            <div className={cn("mb-3 flex h-10 w-10 items-center justify-center rounded-full", colorStyles[themeColor])}>
                <Icon className="h-5 w-5" />
            </div>
            <div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="text-xs text-muted-foreground">from {price}</p>
            </div>
        </div>
    )
}
