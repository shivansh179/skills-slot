import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode
    iconRight?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, icon, iconRight, ...props }, ref) => {
        return (
            <div className="relative w-full">
                {icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                        {icon}
                    </div>
                )}
                <input
                    type={type}
                    className={cn(
                        "flex h-14 w-full rounded-xl border border-input bg-secondary/50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
                        icon && "pl-12",
                        iconRight && "pr-12",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {iconRight && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                        {iconRight}
                    </div>
                )}
            </div>
        )
    }
)
Input.displayName = "Input"

export { Input }