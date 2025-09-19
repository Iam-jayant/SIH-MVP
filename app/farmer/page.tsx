"use client"

import type React from "react"
import { BarChart3 } from "lucide-react" // Import BarChart3

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Leaf, MapPin, Package, Plus, CheckCircle, Sprout, TrendingUp, Award, Calendar } from "lucide-react"

export default function FarmerDashboard() {
  const [collections, setCollections] = useState([
    {
      id: "ASH001",
      herb: "Ashwagandha",
      quantity: "50 kg",
      location: "Rajasthan, India",
      date: "2024-01-15",
      status: "Verified",
      blockchainHash: "0x1a2b3c4d...",
      image: "/placeholder.svg?height=60&width=60&text=Ashwagandha",
    },
    {
      id: "TUL002",
      herb: "Tulsi",
      quantity: "25 kg",
      location: "Kerala, India",
      date: "2024-01-10",
      status: "Pending",
      blockchainHash: "0x5e6f7g8h...",
      image: "/placeholder.svg?height=60&width=60&text=Tulsi",
    },
  ])

  const [newCollection, setNewCollection] = useState({
    herb: "",
    quantity: "",
    location: "",
    notes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const id = `${newCollection.herb.substring(0, 3).toUpperCase()}${String(collections.length + 1).padStart(3, "0")}`
    const collection = {
      id,
      herb: newCollection.herb,
      quantity: newCollection.quantity,
      location: newCollection.location,
      date: new Date().toISOString().split("T")[0],
      status: "Pending",
      blockchainHash: `0x${Math.random().toString(16).substring(2, 10)}...`,
      image: `/placeholder.svg?height=60&width=60&text=${newCollection.herb}`,
    }
    setCollections([collection, ...collections])
    setNewCollection({ herb: "", quantity: "", location: "", notes: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50/30 to-amber-50/20">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild className="hover:bg-emerald-100">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Sprout className="h-8 w-8 text-emerald-600" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-emerald-800">Farmer Dashboard</h1>
                  <p className="text-sm text-emerald-600">Herb Collection & Tracking</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="font-semibold text-emerald-800">Ramesh Kumar</p>
                <p className="text-sm text-emerald-600">Farmer ID: F001</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                <Sprout className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-all duration-300 border-emerald-200">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-emerald-700">Total Collections</CardTitle>
                <Package className="h-5 w-5 text-emerald-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-800">{collections.length}</div>
              <p className="text-sm text-emerald-600 mt-1">+2 this week</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-amber-200">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-amber-700">This Month</CardTitle>
                <Calendar className="h-5 w-5 text-amber-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-800">8</div>
              <p className="text-sm text-amber-600 mt-1">Collections</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-green-200">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-green-700">Verified Batches</CardTitle>
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-800">15</div>
              <p className="text-sm text-green-600 mt-1">95% success rate</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-blue-200">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-blue-700">Revenue (₹)</CardTitle>
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-800">₹45,000</div>
              <p className="text-sm text-blue-600 mt-1">+12% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="collections" className="space-y-6">
          <TabsList className="bg-white border border-emerald-200">
            <TabsTrigger
              value="collections"
              className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800"
            >
              My Collections
            </TabsTrigger>
            <TabsTrigger
              value="new"
              className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800"
            >
              New Collection
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800"
            >
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="collections">
            <Card className="border-emerald-200">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                <CardTitle className="text-emerald-800">Recent Collections</CardTitle>
                <CardDescription className="text-emerald-600">
                  Track your herb collection records with blockchain verification
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {collections.map((collection) => (
                    <div
                      key={collection.id}
                      className="flex items-center justify-between p-6 border border-emerald-100 rounded-xl hover:shadow-md transition-all duration-300 bg-gradient-to-r from-white to-emerald-50/30"
                    >
                      <div className="flex items-center gap-6">
                        <div className="relative">
                          <img
                            src={collection.image || "/placeholder.svg"}
                            alt={collection.herb}
                            className="w-16 h-16 rounded-full object-cover border-2 border-emerald-200"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                            <Leaf className="h-3 w-3 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-emerald-800">{collection.herb}</h3>
                          <div className="flex items-center gap-4 mt-1">
                            <p className="text-emerald-600 font-medium">{collection.quantity}</p>
                            <div className="flex items-center gap-1 text-emerald-600">
                              <MapPin className="h-4 w-4" />
                              <span className="text-sm">{collection.location}</span>
                            </div>
                          </div>
                          <p className="text-sm text-emerald-500 mt-1">
                            Batch ID: <span className="font-mono font-semibold">{collection.id}</span> •{" "}
                            {collection.date}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={collection.status === "Verified" ? "default" : "secondary"}
                          className={
                            collection.status === "Verified"
                              ? "bg-green-100 text-green-800 border-green-200"
                              : "bg-amber-100 text-amber-800 border-amber-200"
                          }
                        >
                          {collection.status === "Verified" && <CheckCircle className="h-3 w-3 mr-1" />}
                          {collection.status}
                        </Badge>
                        <p className="text-xs text-emerald-500 mt-2 font-mono">{collection.blockchainHash}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="new">
            <Card className="border-emerald-200">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                <CardTitle className="text-emerald-800 flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Record New Collection
                </CardTitle>
                <CardDescription className="text-emerald-600">
                  Add a new herb collection to the blockchain network
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="herb" className="text-emerald-700 font-medium">
                        Herb Type
                      </Label>
                      <Select
                        value={newCollection.herb}
                        onValueChange={(value) => setNewCollection({ ...newCollection, herb: value })}
                      >
                        <SelectTrigger className="border-emerald-200 focus:border-emerald-400">
                          <SelectValue placeholder="Select herb type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Ashwagandha">🌿 Ashwagandha</SelectItem>
                          <SelectItem value="Tulsi">🍃 Tulsi</SelectItem>
                          <SelectItem value="Brahmi">🌱 Brahmi</SelectItem>
                          <SelectItem value="Neem">🌳 Neem</SelectItem>
                          <SelectItem value="Turmeric">🟡 Turmeric</SelectItem>
                          <SelectItem value="Ginger">🫚 Ginger</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quantity" className="text-emerald-700 font-medium">
                        Quantity (kg)
                      </Label>
                      <Input
                        id="quantity"
                        type="number"
                        placeholder="Enter quantity"
                        className="border-emerald-200 focus:border-emerald-400"
                        value={newCollection.quantity}
                        onChange={(e) => setNewCollection({ ...newCollection, quantity: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-emerald-700 font-medium">
                      Collection Location
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="location"
                        placeholder="Enter GPS coordinates or location"
                        className="border-emerald-200 focus:border-emerald-400"
                        value={newCollection.location}
                        onChange={(e) => setNewCollection({ ...newCollection, location: e.target.value })}
                        required
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="border-emerald-200 hover:bg-emerald-50 bg-transparent"
                      >
                        <MapPin className="h-4 w-4 text-emerald-600" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-emerald-700 font-medium">
                      Additional Notes
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="Harvesting conditions, quality notes, organic certification, etc."
                      className="border-emerald-200 focus:border-emerald-400"
                      value={newCollection.notes}
                      onChange={(e) => setNewCollection({ ...newCollection, notes: e.target.value })}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3">
                    <Plus className="h-4 w-4 mr-2" />
                    Record Collection on Blockchain
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-emerald-200">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                  <CardTitle className="text-emerald-800 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Collection Trends
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-emerald-700 font-medium">Ashwagandha</span>
                        <span className="font-bold text-emerald-800">45%</span>
                      </div>
                      <div className="w-full bg-emerald-100 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full transition-all duration-500"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-green-700 font-medium">Tulsi</span>
                        <span className="font-bold text-green-800">30%</span>
                      </div>
                      <div className="w-full bg-green-100 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-amber-700 font-medium">Others</span>
                        <span className="font-bold text-amber-800">25%</span>
                      </div>
                      <div className="w-full bg-amber-100 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-amber-500 to-amber-600 h-3 rounded-full transition-all duration-500"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                  <CardTitle className="text-emerald-800 flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Quality Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <div>
                        <p className="font-semibold text-green-800">Verification Rate</p>
                        <p className="text-2xl font-bold text-green-700">95%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Award className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-semibold text-blue-800">Quality Score</p>
                        <p className="text-2xl font-bold text-blue-700">4.8/5</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                      <Leaf className="h-6 w-6 text-emerald-600" />
                      <div>
                        <p className="font-semibold text-emerald-800">Sustainability Rating</p>
                        <p className="text-2xl font-bold text-emerald-700">A+</p>
                      </div>
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
