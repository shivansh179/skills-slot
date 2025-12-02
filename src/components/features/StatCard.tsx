import * as React from "react";
import { Card } from "@/components/ui/Card";

interface StatCardProps {
    label: string;
    value: string;
    trend?: string;
    subValue?: string;
}

export function StatCard({ label, value, trend, subValue }: StatCardProps) {
    return (
        <Card className="flex flex-col justify-between border-slate-800 bg-slate-900/50 p-4">
            <p className="text-xs text-slate-400">{label}</p>
            <div className="mt-2">
                <h3 className="text-2xl font-bold text-white">{value}</h3>
                {trend && <p className="text-xs font-medium text-green-500">{trend}</p>}
                {subValue && <p className="text-xs text-slate-500">{subValue}</p>}
            </div>
        </Card>
    );
}
