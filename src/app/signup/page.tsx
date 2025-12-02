"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, ChevronLeft, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

export default function SignupPage() {
    const [role, setRole] = React.useState<"client" | "talent">("client");
    const [showPassword, setShowPassword] = React.useState(false);
    const router = useRouter();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/client/home");
    };

    return (
        <div className="flex min-h-screen flex-col bg-[#0F172A] p-6 text-white">
            <div className="mb-6 flex items-center">
                <button onClick={() => router.back()} className="p-2 text-slate-400 hover:text-white">
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <h1 className="ml-4 text-xl font-semibold">Create Account</h1>
            </div>

            <form onSubmit={handleSignup} className="flex flex-1 flex-col space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Full Name</label>
                    <Input
                        type="text"
                        placeholder="Enter your full name"
                        icon={<User className="h-5 w-5" />}
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email</label>
                    <Input
                        type="email"
                        placeholder="Enter your email address"
                        icon={<Mail className="h-5 w-5" />}
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Password</label>
                    <div className="relative">
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            icon={<Lock className="h-5 w-5" />}
                            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                        >
                            {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                            ) : (
                                <Eye className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Confirm Password</label>
                    <div className="relative">
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Re-enter your password"
                            icon={<Lock className="h-5 w-5" />}
                            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                        >
                            {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                            ) : (
                                <Eye className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>

                <div className="pt-4">
                    <p className="mb-3 text-center text-sm font-medium text-slate-300">
                        How will you use SkillSlot?
                    </p>
                    <div className="grid grid-cols-2 gap-4 rounded-xl bg-slate-800/50 p-1">
                        <button
                            type="button"
                            onClick={() => setRole("client")}
                            className={cn(
                                "rounded-lg py-2.5 text-sm font-medium transition-all",
                                role === "client"
                                    ? "bg-slate-700 text-white shadow-sm"
                                    : "text-slate-400 hover:text-slate-200"
                            )}
                        >
                            I'm a Client
                        </button>
                        <button
                            type="button"
                            onClick={() => setRole("talent")}
                            className={cn(
                                "rounded-lg py-2.5 text-sm font-medium transition-all",
                                role === "talent"
                                    ? "bg-slate-700 text-white shadow-sm"
                                    : "text-slate-400 hover:text-slate-200"
                            )}
                        >
                            I'm a Talent
                        </button>
                    </div>
                </div>

                <div className="mt-auto pt-8">
                    <Button type="submit" size="lg" fullWidth>
                        Sign Up
                    </Button>
                    <p className="mt-4 text-center text-sm text-slate-400">
                        Already have an account?{" "}
                        <Link href="/login" className="font-semibold text-blue-500 hover:text-blue-400">
                            Log In
                        </Link>
                    </p>
                    <p className="mt-6 text-center text-xs text-slate-500">
                        By signing up, you agree to our{" "}
                        <a href="#" className="underline hover:text-slate-400">Terms of Service & Privacy Policy</a>.
                    </p>
                </div>
            </form>
        </div>
    );
}
