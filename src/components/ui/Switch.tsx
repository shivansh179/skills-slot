"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onCheckedChange?: (checked: boolean) => void
    checked?: boolean
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
    ({ className, checked, onCheckedChange, disabled, onClick, ...props }, ref) => {
        // Determine state handling (controlled vs uncontrolled)
        const isControlled = checked !== undefined
        const [internalChecked, setInternalChecked] = React.useState(false)

        // Sync internal state if controlled
        const isChecked = isControlled ? checked : internalChecked

        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (disabled) return

            const newValue = !isChecked

            if (!isControlled) {
                setInternalChecked(newValue)
            }

            onCheckedChange?.(newValue)
            onClick?.(e)
        }

        return (
            <button
                type="button"
                role="switch"
                aria-checked={isChecked}
                data-state={isChecked ? "checked" : "unchecked"}
                disabled={disabled}
                ref={ref}
                onClick={handleClick}
                className={cn(
                    "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
                    isChecked ? "bg-primary" : "bg-muted", // 'bg-muted' acts as the gray/unchecked state
                    className
                )}
                {...props}
            >
                <span
                    data-state={isChecked ? "checked" : "unchecked"}
                    className={cn(
                        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
                        isChecked ? "translate-x-5" : "translate-x-0"
                    )}
                />
            </button>
        )
    }
)
Switch.displayName = "Switch"

export { Switch }