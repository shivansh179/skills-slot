"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, MoreVertical, Send, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { Input } from "@/components/ui/Input"
import { cn } from "@/lib/utils"

export default function ChatDetail() {
    const router = useRouter()

    return (
        <div className="flex h-screen flex-col bg-background">
            <div className="flex items-center justify-between border-b border-border p-4">
                <div className="flex items-center gap-3">
                    <button onClick={() => router.back()}><ChevronLeft className="h-6 w-6" /></button>
                    <Avatar>
                        <AvatarImage src="/assets/avatars/jane.png" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="text-sm font-bold">Jane Doe</h3>
                        <span className="text-xs text-green-500">Online</span>
                    </div>
                </div>
                <button><MoreVertical className="h-5 w-5 text-muted-foreground" /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                <div className="flex justify-center"><span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">Today</span></div>

                {/* Received */}
                <div className="flex gap-3 max-w-[85%]">
                    <Avatar className="h-8 w-8 mt-1">
                        <AvatarImage src="/assets/avatars/jane.png" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="rounded-2xl rounded-tl-none bg-secondary p-3 text-sm">
                        Hi there! I saw you were looking for help with a cloud migration project.
                    </div>
                </div>

                {/* Sent */}
                <div className="flex flex-col items-end self-end max-w-[85%]">
                    <div className="rounded-2xl rounded-tr-none bg-primary p-3 text-sm text-white">
                        Yes, exactly! We're planning to move our main database to AWS. Are you available this week?
                    </div>
                    <span className="mt-1 text-[10px] text-muted-foreground">10:46 AM</span>
                </div>
            </div>

            <div className="border-t border-border p-4 bg-background">
                <div className="flex items-center gap-3">
                    <button className="text-muted-foreground hover:text-white"><Plus className="h-6 w-6" /></button>
                    <div className="flex-1">
                        <input className="w-full bg-secondary/50 rounded-full px-4 py-3 text-sm focus:outline-none" placeholder="Type a message..." />
                    </div>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90">
                        <Send className="h-4 w-4 ml-0.5" />
                    </button>
                </div>
            </div>
        </div>
    )
}