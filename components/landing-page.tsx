"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, Zap, Shield, Clock, Users, ArrowRight, CheckCircle } from "lucide-react"
import DecryptedText from "./decrypted-text"
import { WavyBackground } from "./wavy-background"

interface LandingPageProps {
  onGetStarted: () => void
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <WavyBackground intensity={0.8} className="opacity-40" />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <DecryptedText
              text="Smart Research Assistant"
              className="gradient-text dark:gradient-text-light"
              animateOn="view"
              sequential={true}
              speed={30}
            />
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Transform hours of research into minutes. Get structured, evidence-based reports with citations from
            uploaded files and live data sources.
          </p>
          <Button
            size="lg"
            onClick={onGetStarted}
            className="text-lg px-8 py-6 gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-32 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Powerful Research Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to conduct thorough, reliable research in one place
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-border/50 hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Multi-Source Search</h3>
              <p className="text-muted-foreground">
                Search across uploaded files and live data sources simultaneously for comprehensive insights.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Structured Reports</h3>
              <p className="text-muted-foreground">
                Get organized, professional reports with key takeaways, sources, and proper citations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Live Data Updates</h3>
              <p className="text-muted-foreground">
                Stay current with fresh information from news, blogs, and other live sources.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Reliable Citations</h3>
              <p className="text-muted-foreground">
                Every insight comes with proper citations and source verification for trustworthy research.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Time Efficient</h3>
              <p className="text-muted-foreground">
                Transform hours of manual research into minutes with AI-powered analysis and summarization.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Perfect for students, teachers, and startup teams working on research projects together.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-card/60 backdrop-blur-sm py-20 relative z-10 border-y border-border/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Why Choose Smart Research Assistant?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">No More Fragmented Research</h3>
                  <p className="text-muted-foreground">
                    Stop juggling multiple tools. Get everything you need in one comprehensive platform.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Trustworthy Results</h3>
                  <p className="text-muted-foreground">
                    Every report includes proper citations and source verification for academic integrity.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Always Up-to-Date</h3>
                  <p className="text-muted-foreground">
                    Live data integration ensures your research includes the latest information available.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Scalable Solution</h3>
                  <p className="text-muted-foreground">
                    From individual assignments to large research projects, scales with your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Transform Your Research?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of students, teachers, and professionals who trust Smart Research Assistant for their
            research needs.
          </p>
          <Button
            size="lg"
            onClick={onGetStarted}
            className="text-lg px-8 py-6 gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg"
          >
            Start Researching Now
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
