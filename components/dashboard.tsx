"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, Zap, CreditCard, Search, Clock, CheckCircle } from "lucide-react"
import AnimatedBackground from "./animated-background"

export function Dashboard() {
  const [question, setQuestion] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [hasGenerated, setHasGenerated] = useState(false)
  const [credits] = useState(25)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setUploadedFiles((prev) => [...prev, ...files])
  }

  const handleGenerateReport = async () => {
    if (!question.trim()) return

    setIsGenerating(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsGenerating(false)
    setHasGenerated(true)
  }

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <AnimatedBackground hue={280} speed={0.2} intensity={0.3} />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Research Dashboard</h1>
            <p className="text-muted-foreground">Ask questions and get comprehensive research reports with citations</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Input Area */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Credits Today</span>
                  </div>
                  <span className="text-sm font-bold text-primary">{credits}/50</span>
                </div>
                <div className="w-full bg-muted/50 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(credits / 50) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Input */}
              <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="w-5 h-5" />
                    Research Question
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="What would you like to research? e.g., 'What are the latest developments in renewable energy storage?'"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="min-h-[120px] resize-none bg-background/50 border-border/50"
                  />

                  {/* File Upload */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-foreground">Upload Supporting Files (Optional)</label>
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.doc,.docx,.txt"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2 bg-background border-border hover:bg-primary/10 hover:border-primary/50 text-foreground"
                        >
                          <Upload className="w-4 h-4" />
                          Upload Files
                        </Button>
                      </label>
                    </div>

                    {uploadedFiles.length > 0 && (
                      <div className="space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-secondary/50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-foreground">{file.name}</span>
                              <Badge variant="secondary" className="text-xs">
                                {(file.size / 1024).toFixed(1)} KB
                              </Badge>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                              className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                            >
                              ×
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <Button
                    onClick={handleGenerateReport}
                    disabled={!question.trim() || isGenerating}
                    className="w-full gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    size="lg"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Generating Report...
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4" />
                        Generate Report
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Generated Report Section */}
              <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Generated Report
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {!hasGenerated ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        Generated report will appear here after you submit a question
                      </p>
                    </div>
                  ) : (
                    <Tabs defaultValue="report" className="w-full">
                      <TabsList className="grid w-full grid-cols-3 bg-muted/50">
                        <TabsTrigger value="report">Report</TabsTrigger>
                        <TabsTrigger value="keypoints">Key Points</TabsTrigger>
                        <TabsTrigger value="sources">Sources</TabsTrigger>
                      </TabsList>

                      <TabsContent value="report" className="mt-6">
                        <div className="prose prose-sm max-w-none">
                          <h3 className="text-lg font-semibold text-foreground mb-4">Research Report: {question}</h3>
                          <div className="space-y-4 text-foreground">
                            <p>
                              Based on the analysis of uploaded documents and live data sources, here are the key
                              findings regarding your research question.
                            </p>
                            <p>
                              This comprehensive report synthesizes information from multiple sources to provide you
                              with actionable insights and evidence-based conclusions.
                            </p>
                            <p>All findings are properly cited and verified for academic integrity and reliability.</p>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="keypoints" className="mt-6">
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                            <div>
                              <h4 className="font-medium text-foreground">Key Finding 1</h4>
                              <p className="text-sm text-muted-foreground">
                                Important insight extracted from your research sources
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                            <div>
                              <h4 className="font-medium text-foreground">Key Finding 2</h4>
                              <p className="text-sm text-muted-foreground">
                                Another significant discovery from the analysis
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                            <div>
                              <h4 className="font-medium text-foreground">Key Finding 3</h4>
                              <p className="text-sm text-muted-foreground">
                                Additional important information for your research
                              </p>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="sources" className="mt-6">
                        <div className="space-y-4">
                          <div className="p-4 border border-border rounded-lg">
                            <h4 className="font-medium text-foreground mb-2">Source 1</h4>
                            <p className="text-sm text-muted-foreground mb-2">Academic paper from uploaded documents</p>
                            <Badge variant="outline">PDF Document</Badge>
                          </div>
                          <div className="p-4 border border-border rounded-lg">
                            <h4 className="font-medium text-foreground mb-2">Source 2</h4>
                            <p className="text-sm text-muted-foreground mb-2">Live data from recent news articles</p>
                            <Badge variant="outline">Live Source</Badge>
                          </div>
                          <div className="p-4 border border-border rounded-lg">
                            <h4 className="font-medium text-foreground mb-2">Source 3</h4>
                            <p className="text-sm text-muted-foreground mb-2">Research database entry</p>
                            <Badge variant="outline">Database</Badge>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Usage Stats */}
              <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="w-5 h-5" />
                    Today's Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Reports Generated</span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      3
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Files Processed</span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      7
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Sources Analyzed</span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      15
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Tips */}
              <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium text-foreground mb-1">💡 Better Questions</p>
                    <p className="text-muted-foreground">Be specific and include context for more accurate results</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-foreground mb-1">📄 File Formats</p>
                    <p className="text-muted-foreground">Supports PDF, DOC, DOCX, and TXT files</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-foreground mb-1">🔄 Live Updates</p>
                    <p className="text-muted-foreground">Reports include the latest information available</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
