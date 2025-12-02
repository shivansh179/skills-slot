"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Briefcase, User, Check, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export default function RoleSelectionPage() {
    const [selectedRole, setSelectedRole] = React.useState<"client" | "talent" | null>("client");
    const router = useRouter();

    const handleContinue = () => {
        if (selectedRole) {
            router.push("/login");
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-[#0F172A] p-6 text-white">
            {/* Header */}
            <div className="mb-8 flex items-center">
                <button onClick={() => router.back()} className="p-2 text-slate-400 hover:text-white">
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <h1 className="ml-4 text-xl font-semibold">Choose Your Role</h1>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col">
                <h2 className="mb-2 text-3xl font-bold">
                    How will you be using SkillSlot?
                </h2>
                <p className="mb-8 text-slate-400">
                    Select how you'd like to get started.
                </p>

                <div className="space-y-4">
                    {/* Client Option */}
                    <div
                        onClick={() => setSelectedRole("client")}
                        className={cn(
                            "relative flex cursor-pointer items-center rounded-2xl border p-4 transition-all",
                            selectedRole === "client"
                                ? "border-primary bg-slate-800/50 ring-1 ring-primary"
                                : "border-slate-700 bg-slate-800/30 hover:bg-slate-800/50"
                        )}
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                            <Briefcase className="h-6 w-6" />
                        </div>
                        <div className="ml-4 flex-1">
                            <h3 className="text-lg font-semibold">Client</h3>
                            <p className="text-sm text-slate-400">I want to hire talent.</p>
                        </div>
                        {selectedRole === "client" && (
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                                <Check className="h-4 w-4 text-white" />
                            </div>
                        )}
                    </div>

                    {/* Talent Option */}
                    <div
                        onClick={() => setSelectedRole("talent")}
                        className={cn(
                            "relative flex cursor-pointer items-center rounded-2xl border p-4 transition-all",
                            selectedRole === "talent"
                                ? "border-primary bg-slate-800/50 ring-1 ring-primary"
                                : "border-slate-700 bg-slate-800/30 hover:bg-slate-800/50"
                        )}
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-700 text-slate-300">
                            <User className="h-6 w-6" />
                        </div>
                        <div className="ml-4 flex-1">
                            <h3 className="text-lg font-semibold">Talent</h3>
                            <p className="text-sm text-slate-400">I want to offer my skills.</p>
                        </div>
                        {selectedRole === "talent" && (
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                                <Check className="h-4 w-4 text-white" />
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-auto pt-8">
                    <Button
                        onClick={handleContinue}
                        size="lg"
                        fullWidth
                        disabled={!selectedRole}
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    );
}
