import * as React from "react"
import { cn } from "@/lib/utils"

export function Tabs({ children, ...props }) {
  const [value, setValue] = React.useState(props.defaultValue)
  return <div>{React.Children.map(children, (child: any) => {
    if (child.type === TabsList) return React.cloneElement(child, { value, setValue })
    if (child.type === TabsContent) return child.props.value === value ? child : null
    return child
  })}</div>
}

export function TabsList({ children, value, setValue }) {
  return <div className="flex space-x-2">{React.Children.map(children, (child: any) =>
    React.cloneElement(child, { isActive: child.props.value === value, onClick: () => setValue(child.props.value) })
  )}</div>
}

export function TabsTrigger({ value, isActive, onClick, children }) {
  return <button onClick={onClick} className={cn("px-3 py-1 text-sm font-medium rounded", isActive ? "bg-white text-black" : "bg-zinc-800 text-white")}>{children}</button>
}

export function TabsContent({ children }) {
  return <div className="mt-4">{children}</div>
}
