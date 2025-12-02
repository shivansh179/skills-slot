import * as React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface TalentCardProps {
    name: string;
    role: string;
    rating: number;
    rate: string;
    image: string;
}

export function TalentCard({ name, role, rating, rate, image }: TalentCardProps) {
    return (
        <Card className="min-w-[200px] overflow-hidden border-slate-800 bg-slate-900/50 p-4">
            <div className="mb-4 flex justify-center">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-slate-700">
                    <Image src={image} alt={name} fill className="object-cover" />
                </div>
            </div>
            <div className="mb-4 text-center">
                <h3 className="text-base font-semibold text-white">{name}</h3>
                <p className="text-xs text-slate-400">{role}</p>
                <div className="mt-2 flex items-center justify-center space-x-2 text-xs">
                    <div className="flex items-center text-yellow-500">
                        <Star className="mr-1 h-3 w-3 fill-current" />
                        <span>{rating}</span>
                    </div>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-300">{rate}/hr</span>
                </div>
            </div>
            <Button size="sm" fullWidth className="h-8 text-xs">
                Book
            </Button>
        </Card>
    );
}
