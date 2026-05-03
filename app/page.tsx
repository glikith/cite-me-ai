"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { LandingPage } from "@/components/landing-page"
import { Dashboard } from "@/components/dashboard"
import { Settings } from "@/components/settings"
import AnimatedBackground from "@/components/animated-background"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Zap, TrendingUp } from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("landing")
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const handleThemeToggle = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const handleGetStarted = () => {
    setActiveTab("dashboard")
  }

  const renderContent = () => {
    switch (activeTab) {
      case "landing":
        return <LandingPage onGetStarted={handleGetStarted} />
      case "dashboard":
        return <Dashboard />
      case "credits":
        return (
          <div className="min-h-screen bg-background relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <AnimatedBackground hue={280} speed={0.15} intensity={0.3} />
            </div>

            <div className="container mx-auto px-4 py-8 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-foreground mb-4">Credits Management</h1>
                  <p className="text-muted-foreground mb-8">Manage your research credits and billing preferences</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <CreditCard className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Current Credits</h3>
                      <p className="text-3xl font-bold text-primary mb-1">25</p>
                      <p className="text-sm text-muted-foreground">out of 50 daily</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Reports Today</h3>
                      <p className="text-3xl font-bold text-primary mb-1">3</p>
                      <p className="text-sm text-muted-foreground">generated successfully</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">This Month</h3>
                      <p className="text-3xl font-bold text-primary mb-1">47</p>
                      <p className="text-sm text-muted-foreground">total reports</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                  <CardContent className="p-12 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CreditCard className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Advanced Credit Management</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Detailed billing, usage analytics, and subscription management features coming soon
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-primary">In Development</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )
      case "settings":
        return <Settings isDark={isDark} onThemeToggle={handleThemeToggle} />
      default:
        return <LandingPage onGetStarted={handleGetStarted} />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header activeTab={activeTab} onTabChange={setActiveTab} isDark={isDark} onThemeToggle={handleThemeToggle} />
      {renderContent()}
    </div>
  )
}
