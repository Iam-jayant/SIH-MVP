"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, FileText, TrendingUp } from "lucide-react"

export default function RegulatorDashboard() {
  const [alerts] = useState([
    {
      id: "ALT001",
      type: "Quality Concern",
      severity: "High",
      message: "Batch MFG002 shows elevated pesticide residue levels",
      timestamp: "2024-01-19 14:30",
      status: "Under Investigation",
    },
    {
      id: "ALT002",
      type: "Compliance",
      severity: "Medium",
      message: "Farmer F003 missing geo-location data for last 3 collections",
      timestamp: "2024-01-18 09:15",
      status: "Pending Action",
    },
    {
      id: "ALT003",
      type: "Sustainability",
      severity: "Low",
      message: "Over-harvesting detected in Region R001",
      timestamp: "2024-01-17 16:45",
      status: "Monitoring",
    },
  ])

  const [complianceData] = useState([
    {
      entity: "Ramesh Kumar (F001)",
      type: "Farmer",
      score: 95,
      status: "Compliant",
      lastAudit: "2024-01-10",
    },
    {
      entity: "AyurVeda Pharmaceuticals",
      type: "Manufacturer",
      score: 98,
      status: "Compliant",
      lastAudit: "2024-01-15",
    },
    {
      entity: "Priya Sharma (F002)",
      type: "Farmer",
      score: 87,
      status: "Warning",
      lastAudit: "2024-01-12",
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
                <Shield className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-bold">Regulator Dashboard</h1>
              </div>
            </div>
            <Badge variant="secondary">AYUSH Ministry - REG001</Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{alerts.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Registered Entities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">247</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Compliance Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">94%</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Inspections This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="alerts" className="space-y-6">
          <TabsList>
            <TabsTrigger value="alerts">Active Alerts</TabsTrigger>
            <TabsTrigger value="compliance">Compliance Monitoring</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain Audit</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="alerts">
            <Card>
              <CardHeader>
                <CardTitle>Active Alerts & Violations</CardTitle>
                <CardDescription>Monitor quality issues and compliance violations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.map((alert) => (
                    <div key={alert.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <AlertTriangle
                            className={`h-5 w-5 ${
                              alert.severity === "High"
                                ? "text-red-600"
                                : alert.severity === "Medium"
                                  ? "text-yellow-600"
                                  : "text-blue-600"
                            }`}
                          />
                          <div>
                            <h3 className="font-semibold">{alert.type}</h3>
                            <p className="text-sm text-muted-foreground">{alert.message}</p>
                          </div>
                        </div>
                        <Badge
                          variant={
                            alert.severity === "High"
                              ? "destructive"
                              : alert.severity === "Medium"
                                ? "secondary"
                                : "default"
                          }
                        >
                          {alert.severity}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{alert.timestamp}</span>
                        <Badge variant="outline">{alert.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Monitoring</CardTitle>
                <CardDescription>Track compliance scores and audit status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceData.map((entity, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">{entity.entity}</h3>
                          <p className="text-sm text-muted-foreground">{entity.type}</p>
                        </div>
                        <Badge variant={entity.status === "Compliant" ? "default" : "destructive"}>
                          {entity.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-sm">
                            <span className="text-muted-foreground">Score: </span>
                            <span
                              className={`font-semibold ${entity.score >= 90 ? "text-green-600" : entity.score >= 80 ? "text-yellow-600" : "text-red-600"}`}
                            >
                              {entity.score}%
                            </span>
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">Last Audit: </span>
                            <span>{entity.lastAudit}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blockchain">
            <Card>
              <CardHeader>
                <CardTitle>Blockchain Audit Trail</CardTitle>
                <CardDescription>Monitor blockchain integrity and transaction verification</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Total Transactions</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">1,247</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Verified Blocks</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-green-600">1,245</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Integrity Score</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-green-600">99.8%</div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-4">Recent Blockchain Activity</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Block #1236 - Manufacturing record verified</span>
                        <span className="text-xs text-muted-foreground ml-auto">2 hours ago</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Block #1235 - Quality test results recorded</span>
                        <span className="text-xs text-muted-foreground ml-auto">4 hours ago</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Block #1234 - Herb collection logged</span>
                        <span className="text-xs text-muted-foreground ml-auto">6 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Compliance Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium">Monthly Compliance Report</h4>
                          <p className="text-sm text-muted-foreground">January 2024</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium">Quality Audit Summary</h4>
                          <p className="text-sm text-muted-foreground">Q4 2023</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium">Blockchain Integrity Report</h4>
                          <p className="text-sm text-muted-foreground">January 2024</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Analytics Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Overall System Health</span>
                      <span className="font-bold text-green-600">Excellent</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Average Compliance Score</span>
                      <span className="font-bold">94%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Quality Issues Resolved</span>
                      <span className="font-bold text-green-600">98%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Blockchain Uptime</span>
                      <span className="font-bold text-green-600">99.9%</span>
                    </div>
                    <div className="pt-4">
                      <Button className="w-full">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Generate Full Report
                      </Button>
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
