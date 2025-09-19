"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Factory, Package, CheckCircle, AlertTriangle } from "lucide-react"

export default function ManufacturerDashboard() {
  const [batches] = useState([
    {
      id: "MFG001",
      product: "Ashwagandha Capsules",
      herbBatch: "ASH001",
      quantity: "1000 units",
      status: "In Production",
      progress: 65,
      qualityScore: 4.8,
      expectedCompletion: "2024-01-25",
    },
    {
      id: "MFG002",
      product: "Tulsi Tea Blend",
      herbBatch: "TUL002",
      quantity: "500 units",
      status: "Quality Testing",
      progress: 85,
      qualityScore: 4.6,
      expectedCompletion: "2024-01-20",
    },
    {
      id: "MFG003",
      product: "Brahmi Powder",
      herbBatch: "BRA003",
      quantity: "750 units",
      status: "Completed",
      progress: 100,
      qualityScore: 4.9,
      expectedCompletion: "2024-01-15",
    },
  ])

  const [qualityTests] = useState([
    {
      id: "QT001",
      batch: "MFG001",
      test: "Heavy Metal Analysis",
      status: "Passed",
      result: "Within limits",
      date: "2024-01-18",
    },
    {
      id: "QT002",
      batch: "MFG001",
      test: "Microbial Testing",
      status: "Passed",
      result: "No contamination",
      date: "2024-01-17",
    },
    {
      id: "QT003",
      batch: "MFG002",
      test: "Pesticide Residue",
      status: "In Progress",
      result: "Pending",
      date: "2024-01-19",
    },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <Factory className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-bold">Manufacturer Portal</h1>
              </div>
            </div>
            <Badge variant="secondary">AyurVeda Pharmaceuticals - MFG001</Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Batches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{batches.filter((b) => b.status !== "Completed").length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Completed This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Quality Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">4.8/5</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Compliance Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">98%</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="production" className="space-y-6">
          <TabsList>
            <TabsTrigger value="production">Production Batches</TabsTrigger>
            <TabsTrigger value="quality">Quality Control</TabsTrigger>
            <TabsTrigger value="supply-chain">Supply Chain</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="production">
            <Card>
              <CardHeader>
                <CardTitle>Production Batches</CardTitle>
                <CardDescription>Monitor manufacturing progress and status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {batches.map((batch) => (
                    <div key={batch.id} className="border rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{batch.product}</h3>
                          <p className="text-sm text-muted-foreground">
                            Batch: {batch.id} • Herb Source: {batch.herbBatch} • {batch.quantity}
                          </p>
                        </div>
                        <Badge variant={batch.status === "Completed" ? "default" : "secondary"}>{batch.status}</Badge>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{batch.progress}%</span>
                        </div>
                        <Progress value={batch.progress} className="h-2" />
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Quality Score:</span>
                          <span className="ml-2 font-semibold">{batch.qualityScore}/5</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Expected Completion:</span>
                          <span className="ml-2 font-semibold">{batch.expectedCompletion}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>Blockchain Verified</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quality">
            <Card>
              <CardHeader>
                <CardTitle>Quality Control Tests</CardTitle>
                <CardDescription>Track quality assurance and testing results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {qualityTests.map((test) => (
                    <div key={test.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        {test.status === "Passed" ? (
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        ) : test.status === "In Progress" ? (
                          <AlertTriangle className="h-6 w-6 text-yellow-600" />
                        ) : (
                          <Package className="h-6 w-6 text-gray-400" />
                        )}
                        <div>
                          <h3 className="font-semibold">{test.test}</h3>
                          <p className="text-sm text-muted-foreground">
                            Batch: {test.batch} • {test.date}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            test.status === "Passed"
                              ? "default"
                              : test.status === "In Progress"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {test.status}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">{test.result}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="supply-chain">
            <Card>
              <CardHeader>
                <CardTitle>Supply Chain Tracking</CardTitle>
                <CardDescription>Monitor herb sources and supply chain integrity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="font-semibold mb-4">Current Supply Sources</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Ashwagandha</h4>
                        <p className="text-sm text-muted-foreground">Source: Ramesh Kumar (F001)</p>
                        <p className="text-sm text-muted-foreground">Location: Rajasthan, India</p>
                        <Badge variant="default" className="text-xs">
                          Verified
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Tulsi</h4>
                        <p className="text-sm text-muted-foreground">Source: Priya Sharma (F002)</p>
                        <p className="text-sm text-muted-foreground">Location: Kerala, India</p>
                        <Badge variant="secondary" className="text-xs">
                          Pending Verification
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <h3 className="font-semibold mb-4">Blockchain Trail</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                        <span className="text-sm">Herb Collection Verified - Block #1234</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                        <span className="text-sm">Quality Testing Completed - Block #1235</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
                        <span className="text-sm">Manufacturing In Progress - Block #1236</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Production Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Ashwagandha Products</span>
                      <span className="font-semibold">40%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-chart-1 h-2 rounded-full" style={{ width: "40%" }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span>Tulsi Products</span>
                      <span className="font-semibold">35%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-chart-2 h-2 rounded-full" style={{ width: "35%" }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span>Other Products</span>
                      <span className="font-semibold">25%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-chart-3 h-2 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quality Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Overall Quality Score</span>
                      <span className="font-bold text-green-600">4.8/5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Test Pass Rate</span>
                      <span className="font-bold text-green-600">98%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Compliance Score</span>
                      <span className="font-bold text-green-600">96%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Customer Satisfaction</span>
                      <span className="font-bold text-green-600">4.7/5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
