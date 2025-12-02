"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/Input"
import { BottomNav } from "@/components/layout/BottomNav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import Link from "next/link"

const chats = [
    { id: 1, name: "Jane Doe", msg: "Sounds good, I can start...", time: "10:45 AM", unread: 2, online: true, img: "/assets/avatars/jane.png" },
    { id: 2, name: "Alex Ray", msg: "Project is confirmed...", time: "Yesterday", unread: 0, online: false, img: "/assets/avatars/alex.png" },
    { id: 3, name: "Maria Garcia", msg: "Thanks for the help!", time: "3d ago", unread: 0, online: false, img: "/assets/avatars/maria.png" },
]

export default function MessagesPage() {
    return (
        <div className="min-h-screen bg-background pb-24">
            <div className="p-6 pb-2">
                <h1 className="mb-6 text-2xl font-bold">Messages</h1>
                <Input placeholder="Search messages..." icon={<Search className="h-5 w-5" />} className="bg-secondary/50" />
            </div>

            <div className="mt-4">
                {chats.map((chat) => (
                    <Link href={`/client/messages/${chat.id}`} key={chat.id} className="flex items-center gap-4 px-6 py-4 hover:bg-secondary/30 transition-colors">
                        <div className="relative">
                            <Avatar className="h-14 w-14 border border-border">
                                <AvatarImage src={chat.img} />
                                <AvatarFallback>{chat.name[0]}</AvatarFallback>
                            </Avatar>
                            {chat.online && <div className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-background bg-green-500" />}
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <div className="flex justify-between">
                                <h3 className="font-semibold">{chat.name}</h3>
                                <span className="text-xs text-muted-foreground">{chat.time}</span>
                            </div>
                            <p className={chat.unread ? "font-medium text-white truncate" : "text-muted-foreground truncate"}>
                                {chat.msg}
                            </p>
                        </div>
                        {chat.unread > 0 && (
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                                {chat.unread}
                            </div>
                        )}
                    </Link>
                ))}
            </div>
            <BottomNav />
        </div>
    )
}