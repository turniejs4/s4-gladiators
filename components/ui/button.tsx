import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => (
  <button ref={ref} className={cn("inline-flex items-center justify-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-zinc-200", className)} {...props} />
))
Button.displayName = "Button"

export { Button }
