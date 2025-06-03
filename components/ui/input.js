import * as React from "react"
import { cn } from "../../lib/utils"

export const Input = React.forwardRef(({ className, type, ...props }, ref) => (
  <input type={type} className={cn("flex h-9 w-full rounded-md border bg-white px-3 py-1 text-sm text-black shadow-sm", className)} ref={ref} {...props} />
))
Input.displayName = "Input"
