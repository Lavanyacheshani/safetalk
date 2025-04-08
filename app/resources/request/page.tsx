"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, MessageSquare, CheckCircle2, Lock, AlertCircle } from "lucide-react"

export default function RequestResourcePage() {
  const [resourceType, setResourceType] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would submit the form data to the backend
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Request a Resource</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Help us expand our library by suggesting resources that would be valuable for your sexual health journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {!submitted ? (
              <>
                <Card className="mb-8">
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-purple-100 rounded-full mr-3">
                        <FileText className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle>Resource Request Form</CardTitle>
                        <CardDescription>Tell us what resources would be most helpful for you</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="resource-type" className="text-base font-medium">
                            Resource Type
                          </Label>
                          <RadioGroup
                            value={resourceType}
                            onValueChange={setResourceType}
                            className="grid grid-cols-2 gap-4 mt-2"
                          >
                            <div
                              className={`border rounded-lg p-4 cursor-pointer ${resourceType === "guide" ? "border-purple-500 bg-purple-50" : ""}`}
                            >
                              <RadioGroupItem value="guide" id="guide" className="sr-only" />
                              <Label htmlFor="guide" className="flex items-start cursor-pointer">
                                <div className="flex-1">
                                  <div className="font-medium mb-1 flex items-center">
                                    <FileText className="h-4 w-4 mr-2 text-purple-600" />
                                    Educational Guide
                                  </div>
                                  <p className="text-sm text-gray-600">
                                    Comprehensive information on specific sexual health topics
                                  </p>
                                </div>
                              </Label>
                            </div>

                            <div
                              className={`border rounded-lg p-4 cursor-pointer ${resourceType === "tool" ? "border-purple-500 bg-purple-50" : ""}`}
                            >
                              <RadioGroupItem value="tool" id="tool" className="sr-only" />
                              <Label htmlFor="tool" className="flex items-start cursor-pointer">
                                <div className="flex-1">
                                  <div className="font-medium mb-1 flex items-center">
                                    <MessageSquare className="h-4 w-4 mr-2 text-purple-600" />
                                    Interactive Tool
                                  </div>
                                  <p className="text-sm text-gray-600">
                                    Tools for decision-making, communication, or health tracking
                                  </p>
                                </div>
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div>
                          <Label htmlFor="topic" className="text-base font-medium">
                            Topic Area
                          </Label>
                          <Select required>
                            <SelectTrigger id="topic" className="mt-2">
                              <SelectValue placeholder="Select a topic area" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="sti">STI Prevention & Treatment</SelectItem>
                              <SelectItem value="testing">Testing & Screening</SelectItem>
                              <SelectItem value="relationships">Relationships & Communication</SelectItem>
                              <SelectItem value="mental">Mental Health & Sexual Wellbeing</SelectItem>
                              <SelectItem value="lgbtq">LGBTQ+ Sexual Health</SelectItem>
                              <SelectItem value="reproductive">Reproductive Health</SelectItem>
                              <SelectItem value="other">Other (please specify)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="title" className="text-base font-medium">
                            Suggested Title
                          </Label>
                          <Input
                            id="title"
                            placeholder="E.g., 'Guide to Discussing STI Status with New Partners'"
                            className="mt-2"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="description" className="text-base font-medium">
                            Description of Needed Resource
                          </Label>
                          <Textarea
                            id="description"
                            placeholder="Please describe what information or tools you're looking for and how it would help you."
                            className="mt-2 min-h-[120px]"
                            required
                          />
                        </div>

                        <div>
                          <Label className="text-base font-medium">Format Preferences (Optional)</Label>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="format-pdf" />
                              <label htmlFor="format-pdf" className="text-sm">
                                PDF Guide
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="format-interactive" />
                              <label htmlFor="format-interactive" className="text-sm">
                                Interactive Tool
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="format-video" />
                              <label htmlFor="format-video" className="text-sm">
                                Video Content
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="format-infographic" />
                              <label htmlFor="format-infographic" className="text-sm">
                                Infographic
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-purple-50 border border-purple-100 rounded-md">
                          <div className="flex items-center text-purple-800 mb-2">
                            <Lock className="h-5 w-5 mr-2" />
                            <span className="font-medium">Privacy Notice</span>
                          </div>
                          <p className="text-sm text-purple-700">
                            Your request is anonymous. We don't collect any personally identifiable information with
                            your submission. Your feedback helps us create resources that benefit the entire community.
                          </p>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox id="anonymous-data" defaultChecked />
                          <div className="grid gap-1.5 leading-none">
                            <label htmlFor="anonymous-data" className="text-sm font-medium leading-none">
                              Allow anonymous data collection
                            </label>
                            <p className="text-xs text-gray-500">
                              We may use anonymized information about resource requests to improve our platform.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8">
                        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                          Submit Resource Request
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recently Created Resources</CardTitle>
                    <CardDescription>Resources we've developed based on community requests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-md">
                        <div className="flex items-start">
                          <div className="p-2 bg-green-100 rounded-full mr-3">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">How to Navigate Dating After an STI Diagnosis</h3>
                            <p className="text-sm text-gray-600 mt-1">
                              Requested 3 months ago • Added to library 2 weeks ago
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-md">
                        <div className="flex items-start">
                          <div className="p-2 bg-green-100 rounded-full mr-3">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">Sexual Health for Transgender Individuals</h3>
                            <p className="text-sm text-gray-600 mt-1">
                              Requested 5 months ago • Added to library 1 month ago
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-md">
                        <div className="flex items-start">
                          <div className="p-2 bg-amber-100 rounded-full mr-3">
                            <AlertCircle className="h-4 w-4 text-amber-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">Interactive Medication Reminder Tool</h3>
                            <p className="text-sm text-gray-600 mt-1">Requested 2 months ago • In development</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <div className="p-2 bg-green-100 rounded-full mr-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Request Submitted Successfully</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Thank You for Your Request</h3>
                    <p className="text-gray-600 mb-6">
                      Your input helps us create resources that address the real needs of our community.
                    </p>
                    <div className="space-y-4 max-w-md mx-auto text-left p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium">What happens next?</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">1.</span>
                          <span>Our team reviews all resource requests to identify common needs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">2.</span>
                          <span>We work with healthcare professionals to develop accurate, helpful content</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">3.</span>
                          <span>New resources are added to our library and announced on the platform</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button
                    onClick={() => (window.location.href = "/resources")}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    Return to Resources
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-center text-gray-800">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">How do you decide which resources to create?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We prioritize resources based on community demand, healthcare provider input, and emerging needs in
                  sexual health. We look for patterns in requests to identify the most needed topics and formats. Our
                  goal is to create resources that will benefit the largest number of users while also addressing
                  specific needs of underserved communities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">How long does it take to develop a new resource?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Development time varies based on the complexity of the topic and the format. Simple guides may be
                  developed within 2-4 weeks, while more complex interactive tools or comprehensive resources can take
                  1-3 months. All resources undergo thorough review by healthcare professionals to ensure accuracy
                  before publication.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Can I contribute to resource development?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes! If you have expertise in sexual health, education, or related fields, we welcome contributions.
                  We also occasionally invite community members to participate in focus groups or review panels for new
                  resources. If you're interested in contributing, please indicate this in your resource request or
                  contact our team directly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Is my request truly anonymous?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes. We do not collect any personally identifiable information with resource requests. We may collect
                  anonymous metadata such as general topic areas of interest to help us understand community needs, but
                  this cannot be traced back to individual users. All data is encrypted and stored securely in
                  accordance with our privacy policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
