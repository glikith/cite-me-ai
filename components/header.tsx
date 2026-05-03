"use client"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, BarChart3, CreditCard, Settings, Moon, Sun } from "lucide-react"

interface HeaderProps {
  activeTab: string
  onTabChange: (tab: string) => void
  isDark: boolean
  onThemeToggle: () => void
}

export function Header({ activeTab, onTabChange, isDark, onThemeToggle }: HeaderProps) {
  return (
    <header className="border-b border-border/30 bg-background/95 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo and Title */}
        <div
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => onTabChange("landing")}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
            <Search className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Smart Research Assistant</h1>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1">
          <Button
            variant={activeTab === "dashboard" ? "default" : "ghost"}
            size="sm"
            onClick={() => onTabChange("dashboard")}
            className={`gap-2 ${
              activeTab === "dashboard"
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                : "hover:bg-primary/10 text-foreground"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Dashboard
          </Button>
          <Button
            variant={activeTab === "credits" ? "default" : "ghost"}
            size="sm"
            onClick={() => onTabChange("credits")}
            className={`gap-2 ${
              activeTab === "credits"
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                : "hover:bg-primary/10 text-foreground"
            }`}
          >
            <CreditCard className="w-4 h-4" />
            Credits
          </Button>
          <Button
            variant={activeTab === "settings" ? "default" : "ghost"}
            size="sm"
            onClick={() => onTabChange("settings")}
            className={`gap-2 ${
              activeTab === "settings"
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                : "hover:bg-primary/10 text-foreground"
            }`}
          >
            <Settings className="w-4 h-4" />
            Settings
          </Button>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onThemeToggle}
            className="w-9 h-9 p-0 hover:bg-primary/10 text-foreground"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          <Avatar className="w-8 h-8 ring-2 ring-primary/20">
            <AvatarImage src="/user-profile-illustration.png" />
            <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-primary">RA</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
