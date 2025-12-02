import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

interface BookingItemProps {
    title: string;
    clientName: string;
    time: string;
    image: string;
}

export function BookingItem({ title, clientName, time, image }: BookingItemProps) {
    return (
        <div className="flex items-center justify-between rounded-xl bg-slate-900/50 p-4">
            <div className="flex items-center space-x-4">
                <Avatar>
                    <AvatarImage src={image} />
                    <AvatarFallback>{clientName[0]}</AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                    <p className="text-xs text-slate-400">{clientName}</p>
                </div>
            </div>
            <span className="text-xs font-medium text-slate-400">{time}</span>
        </div>
    );
}
