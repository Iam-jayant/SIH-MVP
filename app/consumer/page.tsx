"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Search, QrCode, MapPin, Calendar, User, CheckCircle, Leaf } from "lucide-react"

export default function ConsumerPortal() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResult, setSearchResult] = useState<any>(null)

  const handleSearch = () => {
    // Simulate QR code lookup
    if (searchQuery === "ASH001-MFG001" || searchQuery.toLowerCase().includes("ashwagandha")) {
      setSearchResult({
        productName: "Ashwagandha Capsules",
        batchId: "MFG001",
        herbBatch: "ASH001",
        manufacturer: "AyurVeda Pharmaceuticals",
        farmer: "Ramesh Kumar",
        farmerId: "F001",
        collectionDate: "2024-01-15",
        location: "Rajasthan, India",
        coordinates: "26.9124° N, 75.7873° E",
        qualityScore: 4.8,
        certifications: ["Organic", "AYUSH Approved", "GMP Certified"],
        journey: [
          { stage: "Collection", date: "2024-01-15", location: "Rajasthan Farm", status: "Verified" },
          { stage: "Quality Testing", date: "2024-01-17", location: "Testing Lab", status: "Passed" },
          { stage: "Manufacturing", date: "2024-01-20", location: "Production Facility", status: "Completed" },
          { stage: "Packaging", date: "2024-01-22", location: "Packaging Unit", status: "Completed" },
        ],
        blockchainHash: "0x1a2b3c4d5e6f7g8h9i0j",
        sustainabilityScore: "A+",
        testResults: {
          heavyMetals: "Within limits",
          pesticides: "Not detected",
          microbial: "Safe",
          potency: "95% active compounds",
        },
      })
    } else {
      setSearchResult(null)
    }
  }

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
                <QrCode className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-bold">Consumer Portal</h1>
              </div>
            </div>
            <Badge variant="secondary">Verify Authenticity</Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Verify Your Ayurvedic Product</CardTitle>
            <CardDescription>Scan the QR code or enter the batch ID to trace your product's journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter QR code or batch ID (try: ASH001-MFG001)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              <Button onClick={handleSearch}>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            <div className="text-center mt-4">
              <Button variant="outline" className="gap-2 bg-transparent">
                <QrCode className="h-4 w-4" />
                Scan QR Code
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        {searchResult && (
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="journey">Journey</TabsTrigger>
              <TabsTrigger value="quality">Quality</TabsTrigger>
              <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <CardTitle className="text-green-600">Verified Authentic</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg">{searchResult.productName}</h3>
                      <p className="text-muted-foreground">Batch: {searchResult.batchId}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Manufacturer: {searchResult.manufacturer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Leaf className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          Farmer: {searchResult.farmer} ({searchResult.farmerId})
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{searchResult.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Collected: {searchResult.collectionDate}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {searchResult.certifications.map((cert: string, index: number) => (
                        <Badge key={index} variant="secondary">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quality & Safety</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Quality Score</span>
                      <span className="font-bold text-green-600">{searchResult.qualityScore}/5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Sustainability Rating</span>
                      <Badge variant="default">{searchResult.sustainabilityScore}</Badge>
                    </div>
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold mb-2">Test Results</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Heavy Metals:</span>
                          <span className="text-green-600">{searchResult.testResults.heavyMetals}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pesticides:</span>
                          <span className="text-green-600">{searchResult.testResults.pesticides}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Microbial:</span>
                          <span className="text-green-600">{searchResult.testResults.microbial}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Potency:</span>
                          <span className="text-green-600">{searchResult.testResults.potency}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="journey">
              <Card>
                <CardHeader>
                  <CardTitle>Product Journey</CardTitle>
                  <CardDescription>Complete traceability from farm to your hands</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {searchResult.journey.map((step: any, index: number) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-4 h-4 rounded-full ${step.status === "Completed" || step.status === "Verified" || step.status === "Passed" ? "bg-green-600" : "bg-gray-300"}`}
                          ></div>
                          {index < searchResult.journey.length - 1 && (
                            <div className="w-0.5 h-8 bg-gray-300 mt-2"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold">{step.stage}</h3>
                            <Badge
                              variant={
                                step.status === "Completed" || step.status === "Verified" || step.status === "Passed"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {step.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{step.location}</p>
                          <p className="text-xs text-muted-foreground">{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Blockchain Verification</h4>
                    <p className="text-sm text-muted-foreground">Hash: {searchResult.blockchainHash}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      This record is permanently stored on the blockchain and cannot be tampered with.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="quality">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Laboratory Test Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(searchResult.testResults).map(([test, result]) => (
                        <div key={test} className="flex items-center justify-between p-3 border rounded">
                          <span className="font-medium capitalize">{test.replace(/([A-Z])/g, " $1")}</span>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-green-600">{result as string}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quality Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {searchResult.certifications.map((cert: string, index: number) => (
                        <div key={index} className="flex items-center gap-3 p-3 border rounded">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="font-medium">{cert}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-green-800">All Quality Standards Met</span>
                      </div>
                      <p className="text-sm text-green-700 mt-1">
                        This product has passed all required quality and safety tests.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sustainability">
              <Card>
                <CardHeader>
                  <CardTitle>Sustainability & Ethics</CardTitle>
                  <CardDescription>Environmental and social impact information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Environmental Impact</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Carbon Footprint</span>
                          <Badge variant="default">Low</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Water Usage</span>
                          <Badge variant="default">Sustainable</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Soil Health</span>
                          <Badge variant="default">Excellent</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Biodiversity Impact</span>
                          <Badge variant="default">Positive</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold">Ethical Sourcing</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Fair Trade</span>
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="flex justify-between">
                          <span>Farmer Welfare</span>
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="flex justify-between">
                          <span>Community Support</span>
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="flex justify-between">
                          <span>Traditional Practices</span>
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">
                      Sustainability Score: {searchResult.sustainabilityScore}
                    </h4>
                    <p className="text-sm text-green-700">
                      This product meets the highest standards for environmental sustainability and ethical sourcing
                      practices.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}

        {/* Demo Instructions */}
        {!searchResult && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Try the Demo</CardTitle>
              <CardDescription>Experience the traceability system with sample data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Sample QR Codes to Try:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <code className="bg-muted px-2 py-1 rounded">ASH001-MFG001</code> - Ashwagandha Capsules
                    </li>
                    <li>
                      • <code className="bg-muted px-2 py-1 rounded">ashwagandha</code> - Search by herb name
                    </li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">What You'll See:</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Complete product journey from farm to shelf</li>
                    <li>• Quality test results and certifications</li>
                    <li>• Farmer and manufacturer information</li>
                    <li>• Sustainability and ethics data</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
