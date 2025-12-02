import * as React from "react";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";

interface QuickTaskCardProps {
    title: string;
    price: string;
    icon: LucideIcon;
    color: string;
}

export function QuickTaskCard({ title, price, icon: Icon, color }: QuickTaskCardProps) {
    return (
        <Card className="flex flex-col justify-between border-slate-800 bg-slate-900/50 p-4 hover:bg-slate-800/50 transition-colors cursor-pointer">
            <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full ${color} bg-opacity-20`}>
                <Icon className={`h-5 w-5 ${color.replace("bg-", "text-")}`} />
            </div>
            <div>
                <h3 className="mb-1 text-sm font-semibold text-white">{title}</h3>
                <p className="text-xs text-slate-400">from {price}</p>
            </div>
        </Card>
    );
}
