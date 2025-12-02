"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
    const [showPassword, setShowPassword] = React.useState(false);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock login - navigate to client home for demo
        router.push("/client/home");
    };

    return (
        <div className="flex min-h-screen flex-col bg-[#0F172A] p-6 text-white">
            <div className="mt-10 flex flex-1 flex-col items-center justify-center">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20">
                    <div className="h-8 w-8 rounded bg-blue-600" />
                </div>

                <h1 className="mb-2 text-3xl font-bold">Welcome Back</h1>
                <p className="mb-8 text-slate-400">Log in to your SkillSlot account</p>

                <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Email</label>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            icon={<Mail className="h-5 w-5" />}
                            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Password</label>
                        <div className="relative">
                            <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••••••"
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
                        {/* Error message example from screenshot */}
                        {/* <p className="text-xs text-red-500">Password is required</p> */}
                    </div>

                    <Button type="submit" size="lg" fullWidth className="mt-6 w-fit bg-blue-600 hover:bg-blue-500 text-white text-align-center">
                        Login
                    </Button>
                </form>

                <div className="my-8 flex w-full items-center justify-center">
                    <div className="h-px w-full bg-slate-800" />
                    <span className="absolute bg-[#0F172A] px-2 text-sm text-slate-500">
                        or
                    </span>
                </div>

                <Button variant="outline" fullWidth className="border-slate-700 bg-transparent hover:bg-slate-800 w-fit text-white">
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                        <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                        />
                        <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                        />
                    </svg>
                    Continue with Google
                </Button>

                <p className="mt-8 text-sm text-slate-400">
                    Don't have an account?{" "}
                    <Link href="/signup" className="font-semibold text-blue-500 hover:text-blue-400">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
