"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "首页", href: "/" },
  {
    name: "AI基础知识",
    href: "/knowledge",
    children: [
      { name: "AI大模型", href: "/models", description: "了解主流AI大模型" },
      { name: "编程工具", href: "/programming-tools", description: "AI编程辅助工具" },
      { name: "AI工具", href: "/ai-tools", description: "各类实用AI工具" },
    ],
  },
  { name: "学习路径", href: "/learning-path" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">AI入门学习</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "flex items-center gap-1 px-4",
                        pathname.startsWith("/models") ||
                          pathname.startsWith("/programming-tools") ||
                          pathname.startsWith("/ai-tools")
                          ? "text-primary"
                          : ""
                      )}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-56">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link href={child.href} className="flex flex-col items-start gap-1 p-3">
                          <span className="font-medium">{child.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {child.description}
                          </span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  key={item.name}
                  variant="ghost"
                  asChild
                  className={cn(
                    "px-4",
                    pathname === item.href ? "text-primary" : ""
                  )}
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Button asChild>
              <Link href="/models">开始学习</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.name} className="space-y-1">
                    <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                      {item.name}
                    </div>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-6 py-2 text-sm hover:bg-muted rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 text-sm font-medium rounded-md",
                      pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="px-3 pt-4">
                <Button asChild className="w-full">
                  <Link href="/models">开始学习</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
