"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Lock, CalendarIcon, Clock, Video, MessageSquare } from "lucide-react"

export default function TelehealthPage() {
  const [date, setDate] = useState(null)
  const [consultationType, setConsultationType] = useState("video")
  const [specialty, setSpecialty] = useState("")
  const [timeSlot, setTimeSlot] = useState("")
  const [step, setStep] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep(step + 1)
  }

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Anonymous Telehealth Consultations</h1>
          <p className="text-lg text-gray-600">
            Connect with certified healthcare providers through our secure, end-to-end encrypted platform.
          </p>
        </div>

        {step === 1 && (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Lock className="h-5 w-5 text-emerald-500 mr-2" />
                <CardTitle>Book a Confidential Consultation</CardTitle>
              </div>
              <CardDescription>Your identity is protected. All consultations are end-to-end encrypted.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <Label className="text-base mb-2 block">Select a medical specialty</Label>
                    <Select value={specialty} onValueChange={setSpecialty} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Sexual Health</SelectItem>
                        <SelectItem value="std">STD Testing & Treatment</SelectItem>
                        <SelectItem value="gynecology">Gynecology</SelectItem>
                        <SelectItem value="urology">Urology</SelectItem>
                        <SelectItem value="therapy">Sexual Therapy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base mb-2 block">Consultation type</Label>
                    <RadioGroup
                      value={consultationType}
                      onValueChange={setConsultationType}
                      className="grid grid-cols-2 gap-4"
                    >
                      <div
                        className={`border rounded-lg p-4 flex flex-col items-center ${consultationType === "video" ? "border-emerald-500 bg-emerald-50" : "border-gray-200"}`}
                      >
                        <RadioGroupItem value="video" id="video" className="sr-only" />
                        <Label htmlFor="video" className="cursor-pointer flex flex-col items-center">
                          <Video className="h-8 w-8 mb-2 text-emerald-600" />
                          <span className="font-medium">Video Call</span>
                          <span className="text-sm text-gray-500 mt-1">Face-to-face consultation</span>
                        </Label>
                      </div>
                      <div
                        className={`border rounded-lg p-4 flex flex-col items-center ${consultationType === "chat" ? "border-emerald-500 bg-emerald-50" : "border-gray-200"}`}
                      >
                        <RadioGroupItem value="chat" id="chat" className="sr-only" />
                        <Label htmlFor="chat" className="cursor-pointer flex flex-col items-center">
                          <MessageSquare className="h-8 w-8 mb-2 text-emerald-600" />
                          <span className="font-medium">Text Chat</span>
                          <span className="text-sm text-gray-500 mt-1">Text-based consultation</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base mb-2 block">Select a date</Label>
                    <div className="border rounded-lg p-4">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="mx-auto"
                        disabled={(date) => {
                          // Disable dates in the past and more than 30 days in the future
                          const today = new Date()
                          today.setHours(0, 0, 0, 0)
                          const thirtyDaysFromNow = new Date()
                          thirtyDaysFromNow.setDate(today.getDate() + 30)
                          return date < today || date > thirtyDaysFromNow
                        }}
                      />
                    </div>
                  </div>

                  {date && (
                    <div>
                      <Label className="text-base mb-2 block">Select a time slot</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((slot) => (
                          <div
                            key={slot}
                            className={`border rounded-md p-2 text-center cursor-pointer transition-colors ${
                              timeSlot === slot ? "bg-emerald-100 border-emerald-500" : "hover:bg-gray-50"
                            }`}
                            onClick={() => setTimeSlot(slot)}
                          >
                            {slot}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700"
                  disabled={!specialty || !date || !timeSlot}
                >
                  Continue
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-6">
              <p className="text-sm text-gray-500 flex items-center">
                <Lock className="h-4 w-4 mr-2" />
                Your consultation is completely anonymous and secure
              </p>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Confirm Your Appointment</CardTitle>
              <CardDescription>Please review your appointment details before confirming</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center text-gray-500 mb-1">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span className="text-sm">Date</span>
                    </div>
                    <div className="font-medium">
                      {date ? date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : ""}
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center text-gray-500 mb-1">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">Time</span>
                    </div>
                    <div className="font-medium">{timeSlot}</div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center text-gray-500 mb-1">
                    <span className="text-sm">Consultation Details</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Specialty:</span>
                      <span className="font-medium">
                        {specialty === "general" && "General Sexual Health"}
                        {specialty === "std" && "STD Testing & Treatment"}
                        {specialty === "gynecology" && "Gynecology"}
                        {specialty === "urology" && "Urology"}
                        {specialty === "therapy" && "Sexual Therapy"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Type:</span>
                      <span className="font-medium">{consultationType === "video" ? "Video Call" : "Text Chat"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">30 minutes</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 bg-gray-50">
                  <h3 className="font-medium mb-2">What to expect</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• You'll receive a secure link to join your consultation</li>
                    <li>• Your identity will remain anonymous throughout</li>
                    <li>• The provider can send prescriptions if needed</li>
                    <li>• You can access a recording of your session for 30 days</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                Back
              </Button>
              <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" onClick={() => setStep(3)}>
                Confirm Appointment
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 3 && (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-emerald-600">Appointment Confirmed!</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Your appointment has been scheduled</h3>
                <p className="text-gray-600">
                  {date ? date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : ""} at{" "}
                  {timeSlot}
                </p>
              </div>

              <div className="border rounded-lg p-4 bg-gray-50 mb-6">
                <h3 className="font-medium mb-2">Next steps</h3>
                <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
                  <li>Check your email for a secure link to join your consultation</li>
                  <li>Complete a brief pre-consultation questionnaire</li>
                  <li>Join your consultation 5 minutes before the scheduled time</li>
                  <li>Ensure you have a stable internet connection and privacy</li>
                </ol>
              </div>

              <div className="border rounded-lg p-4 bg-emerald-50 border-emerald-100">
                <div className="flex items-center mb-2">
                  <Lock className="h-5 w-5 text-emerald-600 mr-2" />
                  <h3 className="font-medium text-emerald-800">Privacy Reminder</h3>
                </div>
                <p className="text-sm text-emerald-700">
                  Your consultation is completely anonymous and secure. All communications are end-to-end encrypted, and
                  no personally identifiable information is stored.
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <Button
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={() => (window.location.href = "/dashboard")}
              >
                Go to Dashboard
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}
