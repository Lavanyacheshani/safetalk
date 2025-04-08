import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  FileText,
  Calendar,
  Activity,
  BarChart3,
  Lock,
  CheckCircle2,
  ArrowRight,
  Clock,
  Bell,
  Stethoscope,
  Pill,
  Heart,
} from "lucide-react"

export default function HealthManagementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Health Management</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Take control of your sexual health with our comprehensive management tools and secure record keeping.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="records" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-12">
              <TabsTrigger value="records">Health Records</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
              <TabsTrigger value="medications">Medications</TabsTrigger>
              <TabsTrigger value="analytics">Health Analytics</TabsTrigger>
            </TabsList>

            {/* Health Records Tab */}
            <TabsContent value="records">
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">Your Health Records</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Securely store, manage, and share your health information with our blockchain-protected health
                    passport.
                  </p>
                </div>

                {/* Blockchain Health Passport */}
                <div className="max-w-4xl mx-auto">
                  <Card className="mb-12">
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <div className="p-2 bg-purple-100 rounded-full mr-4">
                          <Lock className="h-8 w-8 text-purple-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">Blockchain Health Passport</CardTitle>
                          <CardDescription>
                            Your secure, private, and verifiable sexual health record that you control
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-lg mb-4">How It Works</h4>
                          <div className="space-y-4">
                            <div className="flex">
                              <div className="flex-shrink-0 mr-3">
                                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-medium">
                                  1
                                </div>
                              </div>
                              <div>
                                <h5 className="font-medium">Secure Storage</h5>
                                <p className="text-sm text-gray-600">
                                  Your health records are encrypted and stored on a private blockchain, ensuring they
                                  cannot be altered or accessed without your permission.
                                </p>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="flex-shrink-0 mr-3">
                                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-medium">
                                  2
                                </div>
                              </div>
                              <div>
                                <h5 className="font-medium">Controlled Sharing</h5>
                                <p className="text-sm text-gray-600">
                                  Generate temporary QR codes or access links that allow others to verify your health
                                  status without revealing your identity.
                                </p>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="flex-shrink-0 mr-3">
                                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-medium">
                                  3
                                </div>
                              </div>
                              <div>
                                <h5 className="font-medium">Verification</h5>
                                <p className="text-sm text-gray-600">
                                  Healthcare providers can verify the authenticity of your records without accessing
                                  your personal information.
                                </p>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="flex-shrink-0 mr-3">
                                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-medium">
                                  4
                                </div>
                              </div>
                              <div>
                                <h5 className="font-medium">Access Control</h5>
                                <p className="text-sm text-gray-600">
                                  Monitor who has accessed your information and revoke access at any time.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-4">Key Benefits</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Share your status without revealing your identity</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Immutable record that cannot be tampered with</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Granular control over what information is shared</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Temporary access codes with automatic expiration</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Complete audit trail of all access to your records</span>
                            </li>
                          </ul>
                          <div className="mt-6">
                            <Link href="/health-passport">
                              <Button className="bg-purple-600 hover:bg-purple-700">
                                Explore Health Passport
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Health Records Management */}
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold mb-8 text-gray-800">Health Records Management</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Test Results</CardTitle>
                        <CardDescription>Securely store and manage your test results</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Import results directly from partner labs</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Encrypted storage of all test data</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Automated reminders for regular testing</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Historical tracking of results over time</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Vaccination Records</CardTitle>
                        <CardDescription>Track your vaccination history</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Store HPV and Hepatitis vaccination records</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Receive reminders for booster shots</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Verify vaccination status securely</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Share vaccination records with healthcare providers</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Current Health Status */}
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold mb-8 text-gray-800">Current Health Status</h3>
                  <Card>
                    <CardHeader>
                      <CardTitle>Health Status Summary</CardTitle>
                      <CardDescription>Overview of your current sexual health status</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="p-4 bg-purple-50 border border-purple-100 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-3">Test Status Summary</h4>
                          <div className="grid md:grid-cols-2 gap-4">
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
                                className="flex justify-between items-center p-2 bg-white rounded-md shadow-sm"
                              >
                                <div>
                                  <span className="font-medium">{item.test}</span>
                                  <div className="text-xs text-gray-500">Last updated: {item.date}</div>
                                </div>
                                <div
                                  className={`px-2 
                                <div className={\`px-2 py-1 text-xs font-medium rounded-full ${
                                  item.status === "Negative"
                                    ? "bg-green-100 text-green-800"
                                    : item.status === "Immune"
                                      ? "bg-blue-100 text-blue-800"
                                      : item.status === "Complete"
                                        ? "bg-purple-100 text-purple-800"
                                        : ""
                                }`}
                                >
                                  {item.status}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                          <h4 className="font-medium mb-3">Recommended Actions</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Calendar className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <div>
                                <span className="font-medium">Next recommended testing: </span>
                                <span className="text-gray-700">July 10, 2023</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <Activity className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <div>
                                <span className="font-medium">Health check-up: </span>
                                <span className="text-gray-700">Due in 2 months</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <FileText className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <div>
                                <span className="font-medium">Records to update: </span>
                                <span className="text-gray-700">None at this time</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-purple-600 hover:bg-purple-700">Generate Health Report</Button>
                    </CardFooter>
                  </Card>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Access Your Health Records
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Appointments Tab */}
            <TabsContent value="appointments">
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">Appointment Management</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Schedule, manage, and attend virtual consultations with healthcare providers while maintaining your
                    privacy.
                  </p>
                </div>

                {/* Telehealth Appointments */}
                <div className="max-w-4xl mx-auto">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <div className="p-2 bg-purple-100 rounded-full mr-4">
                          <Calendar className="h-8 w-8 text-purple-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">Telehealth Appointments</CardTitle>
                          <CardDescription>Schedule, manage, and attend virtual consultations</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-4">Features</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Easy scheduling with available providers</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Appointment reminders and notifications</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Secure video and messaging platform</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Post-appointment summaries and follow-ups</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-4">Benefits</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Access care from anywhere, anytime</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">No need to travel to a physical location</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Complete privacy and discretion</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Seamless integration with your health records</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6">
                        <Link href="/telehealth">
                          <Button className="bg-purple-600 hover:bg-purple-700">
                            Schedule an Appointment
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Upcoming Appointments */}
                <div className="max-w-4xl mx-auto mt-12">
                  <h3 className="text-2xl font-bold mb-8 text-gray-800">Manage Your Appointments</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Upcoming Appointments</CardTitle>
                        <CardDescription>View and manage your scheduled consultations</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start p-3 bg-gray-50 rounded-md">
                            <div className="bg-purple-100 p-2 rounded-full mr-3">
                              <Stethoscope className="h-5 w-5 text-purple-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">Telehealth Consultation</h4>
                              <p className="text-sm text-gray-500">Tomorrow, 2:00 PM</p>
                              <div className="flex mt-2">
                                <Button variant="outline" size="sm" className="text-xs h-7 mr-2">
                                  Reschedule
                                </Button>
                                <Button size="sm" className="text-xs h-7 bg-purple-600 hover:bg-purple-700">
                                  Join
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start p-3 bg-gray-50 rounded-md">
                            <div className="bg-blue-100 p-2 rounded-full mr-3">
                              <Heart className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">Wellness Coaching Session</h4>
                              <p className="text-sm text-gray-500">Friday, 11:00 AM</p>
                              <div className="flex mt-2">
                                <Button variant="outline" size="sm" className="text-xs h-7 mr-2">
                                  Reschedule
                                </Button>
                                <Button size="sm" className="text-xs h-7 bg-purple-600 hover:bg-purple-700">
                                  Prepare
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Appointment Settings</CardTitle>
                        <CardDescription>Customize your appointment preferences</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Bell className="h-5 w-5 text-purple-600 mr-2" />
                              <span>Appointment Reminders</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <select className="rounded-md border-gray-300 text-sm">
                                <option>30 minutes before</option>
                                <option>1 hour before</option>
                                <option>1 day before</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Clock className="h-5 w-5 text-purple-600 mr-2" />
                              <span>Preferred Time Slots</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <select className="rounded-md border-gray-300 text-sm">
                                <option>Morning</option>
                                <option>Afternoon</option>
                                <option>Evening</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Shield className="h-5 w-5 text-purple-600 mr-2" />
                              <span>Privacy Level</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <select className="rounded-md border-gray-300 text-sm">
                                <option>Maximum Privacy</option>
                                <option>Standard</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <Button className="w-full bg-purple-600 hover:bg-purple-700">Save Preferences</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    View All Appointments
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Medications Tab */}
            <TabsContent value="medications">
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">Medication Management</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Track your medications, receive reminders, and monitor your treatment progress securely.
                  </p>
                </div>

                {/* Medication Tracking */}
                <div className="max-w-4xl mx-auto">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <div className="p-2 bg-purple-100 rounded-full mr-4">
                          <Pill className="h-8 w-8 text-purple-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">Medication Tracking</CardTitle>
                          <CardDescription>Monitor your treatments and medications</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-4">Features</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Secure storage of prescription information</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Medication reminders and adherence tracking</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Side effect monitoring and reporting</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Treatment effectiveness tracking</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-4">Current Medications</h4>
                          <div className="space-y-3">
                            <div className="p-3 bg-gray-50 rounded-md">
                              <div className="flex justify-between">
                                <h5 className="font-medium">Medication A</h5>
                                <span className="text-sm text-purple-600">Active</span>
                              </div>
                              <p className="text-sm text-gray-500">2 tablets daily - Morning & Evening</p>
                              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                                <div className="h-2 bg-purple-500 rounded-full" style={{ width: "75%" }}></div>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">75% complete - 7 days remaining</p>
                            </div>
                            <div className="p-3 bg-gray-50 rounded-md">
                              <div className="flex justify-between">
                                <h5 className="font-medium">Medication B</h5>
                                <span className="text-sm text-purple-600">Active</span>
                              </div>
                              <p className="text-sm text-gray-500">1 tablet daily - Morning</p>
                              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                                <div className="h-2 bg-purple-500 rounded-full" style={{ width: "30%" }}></div>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">30% complete - 14 days remaining</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <Button className="bg-purple-600 hover:bg-purple-700">Add New Medication</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Medication History */}
                <div className="max-w-4xl mx-auto mt-12">
                  <h3 className="text-2xl font-bold mb-8 text-gray-800">Medication History</h3>
                  <Card>
                    <CardHeader>
                      <CardTitle>Treatment History</CardTitle>
                      <CardDescription>Review your past medications and treatments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="border-b pb-4">
                          <h4 className="font-medium mb-2">February 2023</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <div>
                                <h5 className="font-medium">Medication C</h5>
                                <p className="text-sm text-gray-500">7-day course - Completed</p>
                              </div>
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="border-b pb-4">
                          <h4 className="font-medium mb-2">December 2022</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <div>
                                <h5 className="font-medium">Medication D</h5>
                                <p className="text-sm text-gray-500">10-day course - Completed</p>
                              </div>
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            </div>
                            <div className="flex justify-between items-center">
                              <div>
                                <h5 className="font-medium">Medication E</h5>
                                <p className="text-sm text-gray-500">30-day course - Completed</p>
                              </div>
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Manage Your Medications
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Health Analytics Tab */}
            <TabsContent value="analytics">
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">Health Analytics</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Gain valuable insights from your health data while maintaining complete privacy and control.
                  </p>
                </div>

                {/* Personal Health Insights */}
                <div className="max-w-4xl mx-auto">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <div className="p-2 bg-purple-100 rounded-full mr-4">
                          <BarChart3 className="h-8 w-8 text-purple-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">Personal Health Insights</CardTitle>
                          <CardDescription>Gain valuable insights from your health data</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-6">
                        Our secure analytics tools help you understand patterns and trends in your sexual health,
                        providing personalized recommendations while maintaining complete privacy.
                      </p>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-4">Available Analytics</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Testing frequency and recommendations</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Treatment effectiveness tracking</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Symptom pattern recognition</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Wellness coaching progress</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-4">Privacy Protection</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">All analytics performed locally on your device</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">No raw data ever leaves your control</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Opt-in anonymous aggregate research</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Complete control over what data is analyzed</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Health Trends */}
                <div className="max-w-4xl mx-auto mt-12">
                  <h3 className="text-2xl font-bold mb-8 text-gray-800">Your Health Trends</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Testing Schedule</CardTitle>
                        <CardDescription>Track your testing history and upcoming recommendations</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Testing Status</span>
                              <span className="text-sm text-purple-600">Up to date</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full">
                              <div className="h-2 bg-purple-500 rounded-full" style={{ width: "100%" }}></div>
                            </div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-md">
                            <h5 className="font-medium mb-2">Recent Tests</h5>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Comprehensive STI Panel</span>
                                <span>April 10, 2023</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span>HIV Test</span>
                                <span>April 10, 2023</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-3 bg-purple-50 border border-purple-100 rounded-md">
                            <h5 className="font-medium mb-2 text-purple-800">Next Recommended Tests</h5>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Comprehensive STI Panel</span>
                                <span>July 10, 2023</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Wellness Progress</CardTitle>
                        <CardDescription>Track your wellness journey and achievements</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Wellness Plan</span>
                              <span className="text-sm text-purple-600">In progress</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full">
                              <div className="h-2 bg-purple-500 rounded-full" style={{ width: "60%" }}></div>
                            </div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-md">
                            <h5 className="font-medium mb-2">Recent Achievements</h5>
                            <ul className="space-y-1 text-sm">
                              <li className="flex items-center">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                Completed quarterly testing
                              </li>
                              <li className="flex items-center">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                Attended 3 coaching sessions
                              </li>
                              <li className="flex items-center">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                Maintained medication adherence for 30 days
                              </li>
                            </ul>
                          </div>
                          <div className="p-3 bg-purple-50 border border-purple-100 rounded-md">
                            <h5 className="font-medium mb-2 text-purple-800">Personalized Insights</h5>
                            <p className="text-sm text-purple-700">
                              Based on your progress, we recommend scheduling a follow-up wellness coaching session to
                              discuss your relationship goals.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    View Detailed Analytics
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Take Control of Your Sexual Health</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Join thousands who have found support, guidance, and peace of mind through Safetalk's confidential platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-700">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
