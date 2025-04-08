"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Progress } from "@/components/ui/progress"
import {
  CalendarIcon,
  MessageSquare,
  FileText,
  Shield,
  Bell,
  Settings,
  ChevronRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  Lock,
} from "lucide-react"

export default function DashboardPage() {
  const [date, setDate] = useState(new Date())

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600">Welcome back to your secure health portal</p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <Button variant="outline" size="sm" className="mr-2">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card className="mb-6">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3 bg-emerald-100">
                    <AvatarFallback className="text-emerald-600">A</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Anonymous User</CardTitle>
                    <CardDescription>ID: #7854321</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-500">Account Status</span>
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                    Verified
                  </Badge>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-500">Privacy Level</span>
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                    Maximum
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Lock className="h-4 w-4 mr-2" />
                  Manage Privacy
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Access</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav>
                  <Link
                    href="/symptom-analyzer"
                    className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 border-b"
                  >
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 mr-3 text-emerald-600" />
                      <span>Symptom Analyzer</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </Link>
                  <Link
                    href="/telehealth"
                    className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 border-b"
                  >
                    <div className="flex items-center">
                      <CalendarIcon className="h-5 w-5 mr-3 text-emerald-600" />
                      <span>Book Consultation</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </Link>
                  <Link
                    href="/wellness-coaching"
                    className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 border-b"
                  >
                    <div className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-3 text-emerald-600" />
                      <span>Wellness Coach</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </Link>
                  <Link
                    href="/health-passport"
                    className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 border-b"
                  >
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3 text-emerald-600" />
                      <span>Health Passport</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </Link>
                  <Link href="/community" className="flex items-center justify-between px-6 py-3 hover:bg-gray-50">
                    <div className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-3 text-emerald-600" />
                      <span>Community</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </Link>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <Tabs defaultValue="overview">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                <TabsTrigger value="records">Health Records</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-0">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <CalendarIcon className="h-5 w-5 mr-2 text-emerald-600" />
                        Upcoming Appointments
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start p-3 bg-gray-50 rounded-md">
                          <div className="bg-emerald-100 p-2 rounded-full mr-3">
                            <Clock className="h-5 w-5 text-emerald-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Telehealth Consultation</h4>
                            <p className="text-sm text-gray-500">Tomorrow, 2:00 PM</p>
                            <div className="flex mt-2">
                              <Button variant="outline" size="sm" className="text-xs h-7 mr-2">
                                Reschedule
                              </Button>
                              <Button size="sm" className="text-xs h-7 bg-emerald-600 hover:bg-emerald-700">
                                Join
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start p-3 bg-gray-50 rounded-md">
                          <div className="bg-blue-100 p-2 rounded-full mr-3">
                            <MessageSquare className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Wellness Coaching Session</h4>
                            <p className="text-sm text-gray-500">Friday, 11:00 AM</p>
                            <div className="flex mt-2">
                              <Button variant="outline" size="sm" className="text-xs h-7 mr-2">
                                Reschedule
                              </Button>
                              <Button size="sm" className="text-xs h-7 bg-emerald-600 hover:bg-emerald-700">
                                Prepare
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Appointments
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-emerald-600" />
                        Health Status
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Testing Status</span>
                            <span className="text-sm text-emerald-600">Up to date</span>
                          </div>
                          <Progress value={100} className="h-2 bg-gray-100" indicatorClassName="bg-emerald-500" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Wellness Plan</span>
                            <span className="text-sm text-amber-600">In progress</span>
                          </div>
                          <Progress value={60} className="h-2 bg-gray-100" indicatorClassName="bg-amber-500" />
                        </div>
                        <div className="p-3 bg-gray-50 rounded-md">
                          <h4 className="font-medium flex items-center">
                            <CheckCircle2 className="h-4 w-4 mr-2 text-emerald-600" />
                            Recent Achievements
                          </h4>
                          <ul className="mt-2 space-y-1 text-sm">
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                              Completed quarterly testing
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                              Attended 3 coaching sessions
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Health Passport
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-emerald-600" />
                      Wellness Insights
                    </CardTitle>
                    <CardDescription>Personalized insights based on your health data and activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-md">
                        <h4 className="font-medium mb-2">Testing Reminder</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Based on your activity, we recommend scheduling your next routine screening in approximately 2
                          months.
                        </p>
                        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                          Schedule Test
                        </Button>
                      </div>
                      <div className="p-4 border rounded-md">
                        <h4 className="font-medium mb-2">Resource Recommendation</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Based on your recent wellness coaching sessions, you might find our guide on "Communication
                          Strategies" helpful.
                        </p>
                        <Button size="sm" variant="outline">
                          View Resource
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          icon: <Shield className="h-4 w-4 text-emerald-600" />,
                          text: "Completed symptom analysis",
                          time: "Yesterday",
                        },
                        {
                          icon: <MessageSquare className="h-4 w-4 text-blue-600" />,
                          text: "Wellness coaching session",
                          time: "3 days ago",
                        },
                        {
                          icon: <FileText className="h-4 w-4 text-purple-600" />,
                          text: "Updated health passport",
                          time: "1 week ago",
                        },
                        {
                          icon: <MessageSquare className="h-4 w-4 text-amber-600" />,
                          text: "Posted in community forum",
                          time: "2 weeks ago",
                        },
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                          <div className="flex items-center">
                            <div className="p-1 rounded-full bg-gray-100 mr-3">{activity.icon}</div>
                            <span>{activity.text}</span>
                          </div>
                          <span className="text-sm text-gray-500">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Activity
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="appointments" className="mt-0">
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <CardTitle>Your Appointments</CardTitle>
                      <div className="mt-4 md:mt-0">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Book New Appointment</Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-medium mb-4">Upcoming Appointments</h3>
                        <div className="space-y-4">
                          <AppointmentCard
                            type="Telehealth Consultation"
                            provider="Dr. Anonymous"
                            date="May 15, 2023"
                            time="2:00 PM"
                            status="confirmed"
                          />
                          <AppointmentCard
                            type="Wellness Coaching"
                            provider="Relationship Coach"
                            date="May 19, 2023"
                            time="11:00 AM"
                            status="confirmed"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-4">Calendar</h3>
                        <Calendar mode="single" selected={date} onSelect={setDate} className="border rounded-md p-3" />
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="font-medium mb-4">Past Appointments</h3>
                      <div className="space-y-4">
                        <AppointmentCard
                          type="Telehealth Consultation"
                          provider="Dr. Anonymous"
                          date="April 28, 2023"
                          time="3:30 PM"
                          status="completed"
                        />
                        <AppointmentCard
                          type="Wellness Coaching"
                          provider="Intimacy Coach"
                          date="April 15, 2023"
                          time="10:00 AM"
                          status="completed"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="records" className="mt-0">
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle>Health Records</CardTitle>
                        <CardDescription>Your secure, blockchain-protected health information</CardDescription>
                      </div>
                      <div className="mt-4 md:mt-0 flex">
                        <Button variant="outline" className="mr-2">
                          <FileText className="h-4 w-4 mr-2" />
                          Upload Record
                        </Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                          <Lock className="h-4 w-4 mr-2" />
                          Manage Access
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                      <div className="flex items-center text-blue-800 mb-2">
                        <Shield className="h-5 w-5 mr-2" />
                        <span className="font-medium">Your Data is Secure</span>
                      </div>
                      <p className="text-sm text-blue-700">
                        All health records are encrypted and stored on a private blockchain. Only you control who can
                        access this information, and all access is logged and requires your explicit permission.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-4">Test Results</h3>
                        <div className="space-y-3">
                          <HealthRecordCard
                            title="Comprehensive STI Panel"
                            date="April 10, 2023"
                            provider="LabCorp"
                            status="verified"
                          />
                          <HealthRecordCard
                            title="HIV Test"
                            date="April 10, 2023"
                            provider="LabCorp"
                            status="verified"
                          />
                          <HealthRecordCard
                            title="Comprehensive STI Panel"
                            date="January 5, 2023"
                            provider="Quest Diagnostics"
                            status="verified"
                          />
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-4">Vaccination Records</h3>
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
                        <h3 className="font-medium mb-4">Treatment Records</h3>
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

              <TabsContent value="activity" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Activity Log</CardTitle>
                    <CardDescription>Track your interactions and progress on Safetalk</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {[
                        {
                          date: "May 2023",
                          activities: [
                            {
                              icon: <Shield className="h-4 w-4 text-emerald-600" />,
                              text: "Completed symptom analysis",
                              time: "May 10, 2023",
                              detail: "Analyzed symptoms related to urinary discomfort",
                            },
                            {
                              icon: <MessageSquare className="h-4 w-4 text-blue-600" />,
                              text: "Wellness coaching session",
                              time: "May 5, 2023",
                              detail: "Relationship dynamics coaching session",
                            },
                            {
                              icon: <CalendarIcon className="h-4 w-4 text-purple-600" />,
                              text: "Scheduled telehealth appointment",
                              time: "May 3, 2023",
                              detail: "Appointment with Dr. Anonymous for May 15",
                            },
                          ],
                        },
                        {
                          date: "April 2023",
                          activities: [
                            {
                              icon: <FileText className="h-4 w-4 text-emerald-600" />,
                              text: "Updated health passport",
                              time: "April 28, 2023",
                              detail: "Added new test results to health passport",
                            },
                            {
                              icon: <MessageSquare className="h-4 w-4 text-amber-600" />,
                              text: "Posted in community forum",
                              time: "April 20, 2023",
                              detail: "Asked question in Relationships forum",
                            },
                            {
                              icon: <Shield className="h-4 w-4 text-blue-600" />,
                              text: "Completed quarterly testing",
                              time: "April 10, 2023",
                              detail: "Comprehensive STI panel at LabCorp",
                            },
                            {
                              icon: <MessageSquare className="h-4 w-4 text-purple-600" />,
                              text: "Wellness coaching session",
                              time: "April 5, 2023",
                              detail: "Intimacy coaching session",
                            },
                          ],
                        },
                      ].map((month, index) => (
                        <div key={index}>
                          <h3 className="font-medium mb-4 text-gray-500">{month.date}</h3>
                          <div className="space-y-4">
                            {month.activities.map((activity, actIndex) => (
                              <div key={actIndex} className="flex items-start p-3 bg-gray-50 rounded-md">
                                <div className="p-2 rounded-full bg-gray-100 mr-3">{activity.icon}</div>
                                <div>
                                  <div className="flex items-center">
                                    <h4 className="font-medium">{activity.text}</h4>
                                    <span className="text-xs text-gray-500 ml-2">({activity.time})</span>
                                  </div>
                                  <p className="text-sm text-gray-600 mt-1">{activity.detail}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Load More Activity
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

function AppointmentCard({ type, provider, date, time, status }) {
  return (
    <div className="border rounded-md p-4">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium">{type}</h4>
          <p className="text-sm text-gray-600">With: {provider}</p>
          <div className="flex items-center mt-2">
            <CalendarIcon className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{date}</span>
            <Clock className="h-4 w-4 text-gray-500 ml-3 mr-1" />
            <span className="text-sm text-gray-600">{time}</span>
          </div>
        </div>
        <Badge
          variant="outline"
          className={`
            ${status === "confirmed" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : ""}
            ${status === "completed" ? "bg-gray-50 text-gray-700 border-gray-200" : ""}
            ${status === "cancelled" ? "bg-red-50 text-red-700 border-red-200" : ""}
          `}
        >
          {status === "confirmed" && "Confirmed"}
          {status === "completed" && "Completed"}
          {status === "cancelled" && "Cancelled"}
        </Badge>
      </div>
      {status === "confirmed" && (
        <div className="flex mt-4">
          <Button variant="outline" size="sm" className="mr-2">
            Reschedule
          </Button>
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
            {type.includes("Telehealth") ? "Join Call" : "Start Session"}
          </Button>
        </div>
      )}
      {status === "completed" && (
        <div className="flex mt-4">
          <Button variant="outline" size="sm" className="mr-2">
            View Summary
          </Button>
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
            Book Follow-up
          </Button>
        </div>
      )}
    </div>
  )
}

function HealthRecordCard({ title, date, provider, status }) {
  return (
    <div className="border rounded-md p-4 flex justify-between items-center">
      <div>
        <h4 className="font-medium">{title}</h4>
        <div className="flex items-center mt-1">
          <CalendarIcon className="h-3 w-3 text-gray-500 mr-1" />
          <span className="text-xs text-gray-600">{date}</span>
          <span className="text-xs text-gray-500 mx-2">•</span>
          <span className="text-xs text-gray-600">{provider}</span>
        </div>
      </div>
      <div className="flex items-center">
        {status === "verified" && (
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 mr-3">
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
        <Button variant="ghost" size="sm">
          View
        </Button>
      </div>
    </div>
  )
}
