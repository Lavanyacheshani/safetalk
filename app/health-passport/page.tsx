"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import {
  Shield,
  Lock,
  QrCode,
  Share2,
  Clock,
  CheckCircle2,
  Upload,
  Download,
  FileText,
  AlertCircle,
  Eye,
  EyeOff,
  Calendar,
  ChevronRight,
  Bell,
  Sparkles,
  BarChart3,
  RefreshCw,
} from "lucide-react"

export default function HealthPassportPage() {
  const [showQR, setShowQR] = useState(false)
  const [tempAccess, setTempAccess] = useState(false)
  const [accessDuration, setAccessDuration] = useState("24h")
  const [lastUpdated] = useState("May 10, 2023")
  const [nextTest] = useState("July 10, 2023")

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-4">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Blockchain Health Passport</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your secure, private, and verifiable sexual health record that you control. Share your status without
              revealing your identity.
            </p>
          </div>

          <Card className="mb-8 border-purple-200 shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Your Health Passport</h2>
                  <p className="text-purple-100">Last updated: {lastUpdated}</p>
                </div>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 border-none">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              </div>
            </div>
            <CardContent className="pt-6">
              <div className="p-4 bg-purple-50 border border-purple-100 rounded-lg mb-6">
                <div className="flex items-center text-purple-800 mb-2">
                  <Shield className="h-5 w-5 mr-2" />
                  <span className="font-medium">Blockchain Protected</span>
                </div>
                <p className="text-sm text-purple-700">
                  Your health passport is secured using blockchain technology. This ensures your records cannot be
                  altered and can be cryptographically verified without revealing your identity.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-4 flex items-center text-purple-800">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Test Status Summary
                  </h3>
                  <div className="space-y-3">
                    {[
                      { test: "HIV", status: "Negative", date: "April 10, 2023" },
                      { test: "Chlamydia", status: "Negative", date: "April 10, 2023" },
                      { test: "Gonorrhea", status: "Negative", date: "April 10, 2023" },
                      { test: "Syphilis", status: "Negative", date: "April 10, 2023" },
                      { test: "Hepatitis B", status: "Immune", date: "April 10, 2023" },
                      { test: "HPV Vaccination", status: "Complete", date: "March 15, 2023" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-white rounded-md shadow-sm border border-purple-100 hover:border-purple-300 transition-colors"
                      >
                        <div>
                          <span className="font-medium">{item.test}</span>
                          <div className="text-xs text-gray-500 mt-1">Last updated: {item.date}</div>
                        </div>
                        <Badge
                          variant="outline"
                          className={`${
                            item.status === "Negative"
                              ? "bg-green-50 text-green-700 border-green-200"
                              : item.status === "Immune"
                                ? "bg-blue-50 text-blue-700 border-blue-200"
                                : item.status === "Complete"
                                  ? "bg-purple-50 text-purple-700 border-purple-200"
                                  : ""
                          }`}
                        >
                          {item.status}
                        </Badge>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-purple-50 border border-purple-100 rounded-lg">
                    <h4 className="font-medium mb-3 text-purple-800 flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Testing Schedule
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Current Status</span>
                          <span className="text-sm text-green-600">Up to date</span>
                        </div>
                        <Progress value={100} className="h-2 bg-gray-100" indicatorClassName="bg-green-500" />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Next recommended test:</span>
                        <span className="font-medium text-purple-700">{nextTest}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-2 border-purple-200 text-purple-700 hover:bg-purple-50"
                      >
                        <Bell className="h-3 w-3 mr-2" />
                        Set Reminder
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  {showQR ? (
                    <div className="border rounded-lg p-6 text-center bg-white shadow-md border-purple-200">
                      <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-1 rounded-lg inline-block mb-4">
                        <div className="bg-white p-4 rounded-md">
                          <QrCode className="h-40 w-40 text-gray-800" />
                        </div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-md mb-4">
                        <h4 className="font-medium text-purple-800 mb-1">Temporary Access Code</h4>
                        <p className="text-sm text-purple-700">
                          This QR code provides temporary access to your verified health status without revealing your
                          identity. It will expire after the selected duration.
                        </p>
                      </div>
                      <div className="flex items-center justify-center text-sm text-purple-700 mb-4">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Expires in: </span>
                        <span className="font-medium ml-1">
                          {accessDuration === "1h" ? "1 hour" : accessDuration === "24h" ? "24 hours" : "7 days"}
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => setShowQR(false)}
                        className="w-full border-purple-200 text-purple-700 hover:bg-purple-50"
                      >
                        <EyeOff className="h-4 w-4 mr-2" />
                        Hide QR Code
                      </Button>
                    </div>
                  ) : (
                    <div className="border rounded-lg p-6 bg-white shadow-md border-purple-200">
                      <h3 className="font-medium mb-4 text-purple-800 flex items-center">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share Your Status
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Generate a temporary QR code that allows others to verify your health status without revealing
                        your personal information.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="temp-access" className="cursor-pointer flex items-center">
                            <Lock className="h-4 w-4 mr-2 text-purple-600" />
                            Enable temporary access
                          </Label>
                          <Switch
                            id="temp-access"
                            checked={tempAccess}
                            onCheckedChange={setTempAccess}
                            className="data-[state=checked]:bg-purple-600"
                          />
                        </div>

                        {tempAccess && (
                          <div>
                            <Label htmlFor="access-duration" className="block mb-2 text-sm text-gray-600">
                              Access Duration
                            </Label>
                            <div className="grid grid-cols-3 gap-2">
                              {["1h", "24h", "7d"].map((duration) => (
                                <div
                                  key={duration}
                                  className={`border rounded-md p-2 text-center cursor-pointer transition-colors ${
                                    accessDuration === duration
                                      ? "bg-purple-100 border-purple-500 text-purple-800"
                                      : "hover:bg-purple-50 border-gray-200"
                                  }`}
                                  onClick={() => setAccessDuration(duration)}
                                >
                                  {duration === "1h" && "1 Hour"}
                                  {duration === "24h" && "24 Hours"}
                                  {duration === "7d" && "7 Days"}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="p-3 bg-purple-50 rounded-md border border-purple-100">
                          <h4 className="font-medium text-sm text-purple-800 mb-1">Information to be shared:</h4>
                          <div className="space-y-1">
                            <div className="flex items-center">
                              <CheckCircle2 className="h-3 w-3 text-purple-600 mr-2" />
                              <span className="text-sm text-purple-700">STI Test Status</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle2 className="h-3 w-3 text-purple-600 mr-2" />
                              <span className="text-sm text-purple-700">Last Test Date</span>
                            </div>
                          </div>
                        </div>

                        <Button
                          className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white"
                          onClick={() => setShowQR(true)}
                          disabled={!tempAccess}
                        >
                          <QrCode className="h-4 w-4 mr-2" />
                          Generate QR Code
                        </Button>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 p-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg shadow-md">
                    <h4 className="font-medium mb-3 flex items-center">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Health Passport Benefits
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-purple-200 flex-shrink-0 mt-0.5" />
                        <span>Share your status without revealing your identity</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-purple-200 flex-shrink-0 mt-0.5" />
                        <span>Immutable record that cannot be tampered with</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-purple-200 flex-shrink-0 mt-0.5" />
                        <span>Complete control over what information is shared</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 border-t border-purple-100">
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <RefreshCw className="h-4 w-4 mr-1" />
                  <span>Last synced: Today at 9:45 AM</span>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Upload className="h-4 w-4 mr-2" />
                  Update Records
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Tabs defaultValue="records" className="mt-8">
            <TabsList className="grid grid-cols-3 mb-6 bg-purple-100 p-1">
              <TabsTrigger value="records" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Health Records
              </TabsTrigger>
              <TabsTrigger value="access" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Access Control
              </TabsTrigger>
              <TabsTrigger
                value="activity"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                Access Log
              </TabsTrigger>
            </TabsList>

            <TabsContent value="records" className="mt-0">
              <Card className="border-purple-200 shadow-md">
                <CardHeader className="border-b border-purple-100">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-purple-800">Your Health Records</CardTitle>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Upload className="h-4 w-4 mr-2" />
                      Add New Record
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-4 text-purple-800 flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        Test Results
                      </h3>
                      <div className="space-y-3">
                        <HealthRecordCard
                          title="Comprehensive STI Panel"
                          date="April 10, 2023"
                          provider="LabCorp"
                          status="verified"
                        />
                        <HealthRecordCard title="HIV Test" date="April 10, 2023" provider="LabCorp" status="verified" />
                        <HealthRecordCard
                          title="Comprehensive STI Panel"
                          date="January 5, 2023"
                          provider="Quest Diagnostics"
                          status="verified"
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-4 text-purple-800 flex items-center">
                        <Shield className="h-4 w-4 mr-2" />
                        Vaccination Records
                      </h3>
                      <div className="space-y-3">
                        <HealthRecordCard
                          title="HPV Vaccination (Final Dose)"
                          date="March 15, 2023"
                          provider="City Health Clinic"
                          status="verified"
                        />
                        <HealthRecordCard
                          title="Hepatitis B Vaccination"
                          date="November 20, 2022"
                          provider="University Health Services"
                          status="verified"
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-4 text-purple-800 flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        Treatment Records
                      </h3>
                      <div className="space-y-3">
                        <HealthRecordCard
                          title="Prescription Medication"
                          date="February 8, 2023"
                          provider="Telehealth Provider"
                          status="verified"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="access" className="mt-0">
              <Card className="border-purple-200 shadow-md">
                <CardHeader className="border-b border-purple-100">
                  <CardTitle className="text-purple-800">Access Control</CardTitle>
                  <CardDescription>Manage who can access your health information and for how long</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="p-4 bg-purple-50 border border-purple-100 rounded-lg mb-6">
                    <div className="flex items-center text-purple-800 mb-2">
                      <Lock className="h-5 w-5 mr-2" />
                      <span className="font-medium">Zero-Knowledge Proof Technology</span>
                    </div>
                    <p className="text-sm text-purple-700">
                      Our platform uses zero-knowledge proofs to allow you to share your health status without revealing
                      your identity or detailed test results. You control exactly what information is shared and with
                      whom.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-4 text-purple-800 flex items-center">
                        <Eye className="h-4 w-4 mr-2" />
                        Active Access Grants
                      </h3>
                      <div className="space-y-3">
                        <div className="border border-purple-200 rounded-md p-4 bg-white shadow-sm">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-purple-800">Temporary QR Code Access</h4>
                              <div className="text-sm text-gray-600 mt-1">
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1 text-gray-500" />
                                  <span>Expires in 23 hours</span>
                                </div>
                                <div className="flex items-center mt-1">
                                  <Shield className="h-4 w-4 mr-1 text-gray-500" />
                                  <span>Limited to: STI Test Status Only</span>
                                </div>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                              Revoke
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-4 text-purple-800 flex items-center">
                        <Share2 className="h-4 w-4 mr-2" />
                        Create New Access Grant
                      </h3>
                      <div className="space-y-4 border border-purple-200 rounded-md p-4 bg-white shadow-sm">
                        <div>
                          <Label htmlFor="access-type" className="block mb-2 text-sm text-gray-600">
                            Access Type
                          </Label>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="border rounded-md p-3 bg-purple-50 border-purple-200">
                              <div className="flex items-center">
                                <QrCode className="h-5 w-5 mr-2 text-purple-600" />
                                <span className="font-medium">QR Code Verification</span>
                              </div>
                              <p className="text-xs text-gray-600 mt-1">
                                Generate a QR code that can be scanned to verify your status
                              </p>
                            </div>
                            <div className="border rounded-md p-3">
                              <div className="flex items-center">
                                <Share2 className="h-5 w-5 mr-2 text-gray-600" />
                                <span className="font-medium">Direct Share</span>
                              </div>
                              <p className="text-xs text-gray-600 mt-1">
                                Share directly with a healthcare provider or partner
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="information-shared" className="block mb-2 text-sm text-gray-600">
                            Information to Share
                          </Label>
                          <div className="space-y-2">
                            {[
                              { id: "sti-status", label: "STI Test Status" },
                              { id: "vaccination", label: "Vaccination Records" },
                              { id: "treatment", label: "Treatment History" },
                            ].map((item) => (
                              <div key={item.id} className="flex items-center">
                                <input
                                  type="checkbox"
                                  id={item.id}
                                  className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                  defaultChecked={item.id === "sti-status"}
                                />
                                <label htmlFor={item.id} className="ml-2 text-sm text-gray-700">
                                  {item.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="access-duration" className="block mb-2 text-sm text-gray-600">
                            Access Duration
                          </Label>
                          <div className="grid grid-cols-4 gap-2">
                            {["1h", "24h", "7d", "30d"].map((duration) => (
                              <div
                                key={duration}
                                className="border rounded-md p-2 text-center cursor-pointer hover:bg-purple-50 border-gray-200"
                              >
                                {duration === "1h" && "1 Hour"}
                                {duration === "24h" && "24 Hours"}
                                {duration === "7d" && "7 Days"}
                                {duration === "30d" && "30 Days"}
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button className="bg-purple-600 hover:bg-purple-700">Create Access Grant</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="mt-0">
              <Card className="border-purple-200 shadow-md">
                <CardHeader className="border-b border-purple-100">
                  <CardTitle className="text-purple-800">Access Log</CardTitle>
                  <CardDescription>Track who has accessed your health information</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="border border-purple-200 rounded-md p-4 bg-white shadow-sm">
                      <h3 className="font-medium mb-4 text-purple-800">May 2023</h3>
                      <div className="space-y-3">
                        <AccessLogItem type="QR Code Scan" date="May 10, 2023" time="8:45 PM" info="STI Test Status" />
                        <AccessLogItem
                          type="Healthcare Provider Access"
                          date="May 5, 2023"
                          time="2:30 PM"
                          info="Full Health Record"
                          provider="Telehealth Doctor"
                        />
                      </div>
                    </div>

                    <div className="border border-purple-200 rounded-md p-4 bg-white shadow-sm">
                      <h3 className="font-medium mb-4 text-purple-800">April 2023</h3>
                      <div className="space-y-3">
                        <AccessLogItem
                          type="QR Code Scan"
                          date="April 28, 2023"
                          time="9:15 PM"
                          info="STI Test Status"
                        />
                        <AccessLogItem
                          type="QR Code Scan"
                          date="April 28, 2023"
                          time="9:10 PM"
                          info="STI Test Status"
                          failed={true}
                        />
                        <AccessLogItem
                          type="Healthcare Provider Access"
                          date="April 15, 2023"
                          time="10:30 AM"
                          info="Full Health Record"
                          provider="Lab Technician"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-purple-100 bg-gray-50">
                  <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">
                    <Download className="h-4 w-4 mr-2" />
                    Download Access Log
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          {/* New Feature: Health Insights */}
          <Card className="mt-8 border-purple-200 shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6">
              <div className="flex items-center">
                <Sparkles className="h-6 w-6 mr-2" />
                <h2 className="text-xl font-bold">Health Insights</h2>
              </div>
            </div>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-purple-50 border border-purple-100 rounded-lg">
                  <h3 className="font-medium mb-3 text-purple-800">Testing Recommendations</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Based on your activity profile and health history, we recommend:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mr-2 mt-0.5" />
                      <span className="text-sm">Comprehensive STI panel every 3 months</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mr-2 mt-0.5" />
                      <span className="text-sm">HIV testing every 3 months</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 mr-2 mt-0.5" />
                      <span className="text-sm">Annual physical examination</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">Schedule Next Test</Button>
                </div>

                <div className="p-4 bg-white border border-purple-100 rounded-lg shadow-sm">
                  <h3 className="font-medium mb-3 text-purple-800">Health Timeline</h3>
                  <div className="space-y-4">
                    <div className="relative pl-6 pb-4 border-l-2 border-purple-200">
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-600"></div>
                      <div>
                        <h4 className="text-sm font-medium">April 10, 2023</h4>
                        <p className="text-xs text-gray-600">Comprehensive STI Panel - All Clear</p>
                      </div>
                    </div>

                    <div className="relative pl-6 pb-4 border-l-2 border-purple-200">
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-400"></div>
                      <div>
                        <h4 className="text-sm font-medium">March 15, 2023</h4>
                        <p className="text-xs text-gray-600">HPV Vaccination (Final Dose)</p>
                      </div>
                    </div>

                    <div className="relative pl-6 pb-4 border-l-2 border-purple-200">
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-300"></div>
                      <div>
                        <h4 className="text-sm font-medium">January 5, 2023</h4>
                        <p className="text-xs text-gray-600">Comprehensive STI Panel - All Clear</p>
                      </div>
                    </div>

                    <div className="relative pl-6">
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-200"></div>
                      <div>
                        <h4 className="text-sm font-medium">November 20, 2022</h4>
                        <p className="text-xs text-gray-600">Hepatitis B Vaccination</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-purple-100 bg-gray-50">
              <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">
                <BarChart3 className="h-4 w-4 mr-2" />
                View Detailed Health Analytics
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

function HealthRecordCard({ title, date, provider, status }) {
  return (
    <div className="border border-purple-100 rounded-md p-4 flex justify-between items-center bg-white shadow-sm hover:border-purple-300 transition-colors">
      <div>
        <h4 className="font-medium text-gray-800">{title}</h4>
        <div className="flex items-center mt-1">
          <Clock className="h-3 w-3 text-gray-500 mr-1" />
          <span className="text-xs text-gray-600">{date}</span>
          <span className="text-xs text-gray-500 mx-2">•</span>
          <span className="text-xs text-gray-600">{provider}</span>
        </div>
      </div>
      <div className="flex items-center">
        {status === "verified" && (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 mr-3">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Verified
          </Badge>
        )}
        {status === "pending" && (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 mr-3">
            <AlertCircle className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        )}
        <div className="flex space-x-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-gray-500 hover:text-purple-700 hover:bg-purple-50"
          >
            <FileText className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-gray-500 hover:text-purple-700 hover:bg-purple-50"
          >
            <Download className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-gray-500 hover:text-purple-700 hover:bg-purple-50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

function AccessLogItem({ type, date, time, info, provider, failed = false }) {
  return (
    <div className={`flex items-start p-3 ${failed ? "bg-red-50" : "bg-gray-50"} rounded-md`}>
      <div className={`p-2 rounded-full mr-3 ${failed ? "bg-red-100" : "bg-purple-100"}`}>
        {failed ? <AlertCircle className="h-4 w-4 text-red-600" /> : <Eye className="h-4 w-4 text-purple-600" />}
      </div>
      <div>
        <div className="flex items-center">
          <h4 className="font-medium text-gray-800">{type}</h4>
          {failed && (
            <Badge variant="outline" className="ml-2 bg-red-50 text-red-700 border-red-200">
              Failed Attempt
            </Badge>
          )}
        </div>
        <div className="text-sm text-gray-600 mt-1">
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>
              {date} at {time}
            </span>
          </div>
          <div className="flex items-center mt-1">
            <Shield className="h-3 w-3 mr-1" />
            <span>Information accessed: {info}</span>
          </div>
          {provider && (
            <div className="flex items-center mt-1">
              <span>Provider: {provider}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
