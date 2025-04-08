"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Shield, Lock, Eye, EyeOff, User, Mail, KeyRound, Fingerprint, ChevronLeft, ChevronRight } from "lucide-react"

export default function SignupPage() {
  const [accountType, setAccountType] = useState("anonymous")
  const [step, setStep] = useState(1)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Password strength calculation
  const calculatePasswordStrength = (password) => {
    if (!password) return 0

    let strength = 0
    // Length check
    if (password.length >= 8) strength += 25
    // Contains lowercase
    if (/[a-z]/.test(password)) strength += 25
    // Contains uppercase
    if (/[A-Z]/.test(password)) strength += 25
    // Contains number or special char
    if (/[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) strength += 25

    return strength
  }

  const passwordStrength = calculatePasswordStrength(password)

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return "No password"
    if (passwordStrength <= 25) return "Weak"
    if (passwordStrength <= 50) return "Fair"
    if (passwordStrength <= 75) return "Good"
    return "Strong"
  }

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 25) return "bg-red-500"
    if (passwordStrength <= 50) return "bg-yellow-500"
    if (passwordStrength <= 75) return "bg-blue-500"
    return "bg-green-500"
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (step < 3) {
      setStep(step + 1)
    } else {
      setIsLoading(true)

      // Simulate account creation
      setTimeout(() => {
        setIsLoading(false)
        // Use Next.js router for navigation instead of window.location
        window.location.href = "/dashboard"
      }, 1500)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4">
      <div className="max-w-md w-full mx-auto space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-full mb-4">
            <Shield className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Create Your Account</h1>
          <p className="mt-2 text-gray-600">Join Safetalk for confidential sexual health support</p>
        </div>

        <Card className="border-purple-200 shadow-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
            <div className="flex items-center mb-2">
              <Shield className="h-5 w-5 text-purple-200 mr-2" />
              <CardTitle>Secure Signup</CardTitle>
            </div>
            <CardDescription className="text-purple-100">
              Step {step} of 3: {step === 1 ? "Account Type" : step === 2 ? "Setup Details" : "Privacy Preferences"}
            </CardDescription>

            <div className="mt-4">
              <div className="flex justify-between mb-1 text-xs">
                <span>Progress</span>
                <span>{Math.round((step / 3) * 100)}%</span>
              </div>
              <Progress value={(step / 3) * 100} className="h-1" indicatorClassName="bg-purple-300" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 border border-purple-100 rounded-md mb-4">
                    <div className="flex items-start">
                      <Shield className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-purple-800 mb-1">Privacy Options</h3>
                        <p className="text-sm text-purple-700">
                          Safetalk offers different account types to match your privacy needs. All accounts provide
                          end-to-end encryption and secure data storage.
                        </p>
                      </div>
                    </div>
                  </div>

                  <RadioGroup value={accountType} onValueChange={setAccountType} className="space-y-3">
                    <div
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${accountType === "anonymous" ? "border-purple-500 bg-purple-50" : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"}`}
                    >
                      <RadioGroupItem value="anonymous" id="anonymous" className="sr-only" />
                      <Label htmlFor="anonymous" className="flex items-start cursor-pointer">
                        <div className="flex-1">
                          <div className="font-medium mb-1 flex items-center">
                            <Fingerprint className="h-4 w-4 mr-2 text-purple-600" />
                            Anonymous Account
                          </div>
                          <p className="text-sm text-gray-600">
                            Maximum privacy with no personally identifiable information. Access via secure tokens and
                            anonymous communication channels.
                          </p>

                          <div className="mt-2 flex items-center text-xs text-purple-700">
                            <Shield className="h-3 w-3 mr-1" />
                            <span>Highest privacy protection</span>
                          </div>
                        </div>
                      </Label>
                    </div>

                    <div
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${accountType === "standard" ? "border-purple-500 bg-purple-50" : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"}`}
                    >
                      <RadioGroupItem value="standard" id="standard" className="sr-only" />
                      <Label htmlFor="standard" className="flex items-start cursor-pointer">
                        <div className="flex-1">
                          <div className="font-medium mb-1 flex items-center">
                            <Mail className="h-4 w-4 mr-2 text-purple-600" />
                            Standard Account
                          </div>
                          <p className="text-sm text-gray-600">
                            Basic email verification with enhanced privacy controls. Your email is encrypted and never
                            shared with third parties.
                          </p>

                          <div className="mt-2 flex items-center text-xs text-purple-700">
                            <Lock className="h-3 w-3 mr-1" />
                            <span>Strong privacy protection</span>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  {accountType === "anonymous" ? (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="anonymous-username" className="flex items-center text-gray-700">
                          <User className="h-4 w-4 mr-2" />
                          Anonymous Username
                        </Label>
                        <div className="relative">
                          <Input
                            id="anonymous-username"
                            type="text"
                            placeholder="Choose a username that doesn't identify you"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="pl-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                            required
                          />
                          <User className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Choose a username that doesn't reveal your real identity.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="recovery-method" className="flex items-center text-gray-700">
                          <Shield className="h-4 w-4 mr-2" />
                          Anonymous Recovery Method
                        </Label>
                        <RadioGroup defaultValue="app" className="space-y-2 border rounded-md p-3 border-purple-100">
                          <div className="flex items-center space-x-2 p-2 rounded hover:bg-purple-50">
                            <RadioGroupItem value="app" id="recovery-app" className="text-purple-600" />
                            <Label htmlFor="recovery-app" className="cursor-pointer text-sm">
                              Authentication App
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 p-2 rounded hover:bg-purple-50">
                            <RadioGroupItem value="device" id="recovery-device" className="text-purple-600" />
                            <Label htmlFor="recovery-device" className="cursor-pointer text-sm">
                              Device Token
                            </Label>
                          </div>
                        </RadioGroup>
                        <p className="text-xs text-gray-500 mt-1">
                          This will be used to recover your account if needed.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="anonymous-password" className="flex items-center text-gray-700">
                          <KeyRound className="h-4 w-4 mr-2" />
                          Secure Passphrase
                        </Label>
                        <div className="relative">
                          <Input
                            id="anonymous-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong passphrase"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 pr-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                            required
                          />
                          <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>

                        <div className="mt-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Password strength: {getPasswordStrengthText()}</span>
                          </div>
                          <Progress
                            value={passwordStrength}
                            className="h-1"
                            indicatorClassName={getPasswordStrengthColor()}
                          />
                        </div>

                        <p className="text-xs text-gray-500 mt-2">
                          Use a unique passphrase you can remember. This cannot be recovered if lost.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center text-gray-700">
                          <Mail className="h-4 w-4 mr-2" />
                          Email Address
                        </Label>
                        <div className="relative">
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your email will be encrypted"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                            required
                          />
                          <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Your email is stored encrypted and only used for account recovery.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="username" className="flex items-center text-gray-700">
                          <User className="h-4 w-4 mr-2" />
                          Username
                        </Label>
                        <div className="relative">
                          <Input
                            id="username"
                            type="text"
                            placeholder="Choose a username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="pl-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                            required
                          />
                          <User className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="flex items-center text-gray-700">
                          <KeyRound className="h-4 w-4 mr-2" />
                          Password
                        </Label>
                        <div className="relative">
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 pr-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                            required
                          />
                          <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>

                        <div className="mt-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Password strength: {getPasswordStrengthText()}</span>
                          </div>
                          <Progress
                            value={passwordStrength}
                            className="h-1"
                            indicatorClassName={getPasswordStrengthColor()}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 border border-purple-100 rounded-md mb-4">
                    <div className="flex items-start">
                      <Lock className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-purple-800 mb-1">Privacy Preferences</h3>
                        <p className="text-sm text-purple-700">
                          Customize how your data is handled. All options can be changed later in your privacy settings.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-2 p-3 border border-purple-100 rounded-md hover:bg-purple-50 transition-colors">
                      <Checkbox
                        id="data-retention"
                        defaultChecked
                        className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 mt-1"
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="data-retention" className="text-sm font-medium leading-none cursor-pointer">
                          Minimal Data Retention
                        </Label>
                        <p className="text-xs text-gray-500">
                          Automatically delete your data after consultations and interactions to minimize stored
                          information.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 p-3 border border-purple-100 rounded-md hover:bg-purple-50 transition-colors">
                      <Checkbox
                        id="anonymous-analytics"
                        className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 mt-1"
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="anonymous-analytics"
                          className="text-sm font-medium leading-none cursor-pointer"
                        >
                          Anonymous Analytics
                        </Label>
                        <p className="text-xs text-gray-500">
                          Allow anonymous usage data to help improve the platform (no personal information).
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 p-3 border border-purple-100 rounded-md hover:bg-purple-50 transition-colors">
                      <Checkbox
                        id="blockchain-storage"
                        defaultChecked
                        className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 mt-1"
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="blockchain-storage" className="text-sm font-medium leading-none cursor-pointer">
                          Blockchain Health Passport
                        </Label>
                        <p className="text-xs text-gray-500">
                          Store your health records on a private blockchain for enhanced security and verification.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 p-3 border border-purple-100 rounded-md hover:bg-purple-50 transition-colors">
                      <Checkbox
                        id="communication-pref"
                        defaultChecked
                        className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 mt-1"
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="communication-pref" className="text-sm font-medium leading-none cursor-pointer">
                          Secure Communications Only
                        </Label>
                        <p className="text-xs text-gray-500">
                          Receive notifications only through end-to-end encrypted channels.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 p-3 border border-purple-100 rounded-md hover:bg-purple-50 transition-colors">
                      <Checkbox
                        id="terms-conditions"
                        required
                        className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 mt-1"
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="terms-conditions" className="text-sm font-medium leading-none cursor-pointer">
                          Terms and Conditions
                        </Label>
                        <p className="text-xs text-gray-500">
                          I agree to the{" "}
                          <a href="#" className="text-purple-600 hover:underline">
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a href="#" className="text-purple-600 hover:underline">
                            Privacy Policy
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-6">
                {step > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="border-purple-200 text-purple-700 hover:bg-purple-50"
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                ) : (
                  <div></div>
                )}

                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      {step < 3 ? "Continue" : "Create Account"}
                      {step < 3 && <ChevronRight className="h-4 w-4 ml-2" />}
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center bg-gray-50 border-t border-purple-100">
            <div className="text-center">
              <span className="text-sm text-gray-600">Already have an account? </span>
              <Link href="/auth/login" className="text-sm font-medium text-purple-600 hover:text-purple-800">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>

        <div className="text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Safetalk. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
