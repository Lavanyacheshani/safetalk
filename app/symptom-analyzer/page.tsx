"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Shield, AlertCircle } from "lucide-react"

export default function SymptomAnalyzerPage() {
  const [step, setStep] = useState(1)
  const [symptoms, setSymptoms] = useState("")
  const [duration, setDuration] = useState("")
  const [gender, setGender] = useState("")
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowResults(true)
  }

  const resetForm = () => {
    setStep(1)
    setSymptoms("")
    setDuration("")
    setGender("")
    setShowResults(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {!showResults ? (
          <>
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">AI Symptom Analyzer</h1>
              <p className="text-lg text-gray-600">
                Describe your symptoms confidentially and receive instant, AI-powered guidance based on medical
                knowledge.
              </p>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Shield className="h-5 w-5 text-purple-500 mr-2" />
                  <CardTitle>Confidential Symptom Assessment</CardTitle>
                </div>
                <CardDescription>
                  Your information is encrypted and never stored. This is not a replacement for professional medical
                  advice.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Step {step} of 3</span>
                    <span className="text-sm text-gray-500">{Math.round((step / 3) * 100)}% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${(step / 3) * 100}%` }}></div>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="symptoms" className="text-base">
                          Describe your symptoms in detail
                        </Label>
                        <Textarea
                          id="symptoms"
                          placeholder="What symptoms are you experiencing? Be as specific as possible."
                          className="mt-2 h-32"
                          value={symptoms}
                          onChange={(e) => setSymptoms(e.target.value)}
                          required
                        />
                      </div>
                      <Button
                        type="button"
                        className="w-full bg-purple-600 hover:bg-purple-700"
                        onClick={() => setStep(2)}
                        disabled={!symptoms.trim()}
                      >
                        Continue
                      </Button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="duration" className="text-base">
                          How long have you been experiencing these symptoms?
                        </Label>
                        <RadioGroup value={duration} onValueChange={setDuration} className="mt-2" required>
                          {["Less than a week", "1-2 weeks", "2-4 weeks", "More than a month"].map((option) => (
                            <div key={option} className="flex items-center space-x-2 py-2">
                              <RadioGroupItem value={option} id={option.replace(/\s+/g, "-").toLowerCase()} />
                              <Label htmlFor={option.replace(/\s+/g, "-").toLowerCase()}>{option}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                      <div className="flex gap-3">
                        <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                          Back
                        </Button>
                        <Button
                          type="button"
                          className="flex-1 bg-purple-600 hover:bg-purple-700"
                          onClick={() => setStep(3)}
                          disabled={!duration}
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="gender" className="text-base">
                          What is your biological sex?
                        </Label>
                        <RadioGroup value={gender} onValueChange={setGender} className="mt-2" required>
                          {["Male", "Female", "Intersex", "Prefer not to say"].map((option) => (
                            <div key={option} className="flex items-center space-x-2 py-2">
                              <RadioGroupItem value={option} id={option.replace(/\s+/g, "-").toLowerCase()} />
                              <Label htmlFor={option.replace(/\s+/g, "-").toLowerCase()}>{option}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                      <div className="flex gap-3">
                        <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1">
                          Back
                        </Button>
                        <Button type="submit" className="flex-1 bg-purple-600 hover:bg-purple-700" disabled={!gender}>
                          Get Analysis
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
              <CardFooter className="flex justify-center border-t pt-6">
                <p className="text-sm text-gray-500 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Your data is encrypted and never stored
                </p>
              </CardFooter>
            </Card>
          </>
        ) : (
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Symptom Analysis Results</CardTitle>
                <CardDescription>
                  Based on the information you provided, our AI has generated the following analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-2 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Important Disclaimer
                  </h3>
                  <p className="text-amber-700 text-sm">
                    This analysis is not a medical diagnosis. It is generated by an AI system based on the information
                    you provided and should not replace professional medical advice. Please consult with a healthcare
                    provider for proper diagnosis and treatment.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Possible Conditions</h3>
                  <p className="text-gray-700 mb-4">
                    Based on your symptoms, duration, and other factors, the following conditions may be relevant:
                  </p>
                  <ul className="space-y-3">
                    <li className="p-3 bg-gray-50 rounded-md">
                      <span className="font-medium">Common Urinary Tract Infection</span>
                      <p className="text-sm text-gray-600 mt-1">
                        UTIs are common infections that can cause discomfort and urgency. They are typically treatable
                        with antibiotics.
                      </p>
                    </li>
                    <li className="p-3 bg-gray-50 rounded-md">
                      <span className="font-medium">Possible Yeast Infection</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Yeast infections can cause itching, burning, and discharge. They are typically treatable with
                        antifungal medications.
                      </p>
                    </li>
                    <li className="p-3 bg-gray-50 rounded-md">
                      <span className="font-medium">Consider STI Screening</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Some symptoms overlap with common STIs. Testing is recommended for accurate diagnosis.
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Recommended Next Steps</h3>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li className="text-gray-700">Schedule a telehealth consultation with a healthcare provider</li>
                    <li className="text-gray-700">Consider STI testing for a definitive diagnosis</li>
                    <li className="text-gray-700">Maintain good hygiene and stay hydrated</li>
                    <li className="text-gray-700">Avoid self-medication until you receive professional advice</li>
                  </ol>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline" onClick={resetForm}>
                  Start New Analysis
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700">Book Telehealth Consultation</Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
