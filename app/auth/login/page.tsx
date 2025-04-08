"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Lock, Shield, Eye, EyeOff, Mail, User, KeyRound, Fingerprint } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [code, setCode] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [anonymousId, setAnonymousId] = useState("")
  const [codeSent, setCodeSent] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // Use Next.js router for navigation instead of window.location
      window.location.href = "/dashboard"
    }, 1500)
  }

  const handleRequestCode = () => {
    if (!anonymousId) return

    setIsLoading(true)

    // Simulate code sending process
    setTimeout(() => {
      setIsLoading(false)
      setCodeSent(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-full mb-4">
            <Shield className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Safetalk</h1>
          <p className="mt-2 text-gray-600">Sign in to your secure, anonymous account</p>
        </div>

        <Card className="border-purple-200 shadow-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
            <div className="flex items-center mb-2">
              <Lock className="h-5 w-5 text-purple-200 mr-2" />
              <CardTitle>Secure Login</CardTitle>
            </div>
            <CardDescription className="text-purple-100">
              Your privacy is protected with end-to-end encryption
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs defaultValue="password" className="w-full">
              <TabsList className="grid grid-cols-2 mb-6 bg-purple-100 p-1">
                <TabsTrigger
                  value="password"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Standard
                </TabsTrigger>
                <TabsTrigger
                  value="anonymous"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  <Fingerprint className="h-4 w-4 mr-2" />
                  Anonymous
                </TabsTrigger>
              </TabsList>

              <TabsContent value="password">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center text-gray-700">
                      <User className="h-4 w-4 mr-2" />
                      Email or Username
                    </Label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                        placeholder="Enter your email or username"
                        required
                      />
                      <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="flex items-center text-gray-700">
                        <KeyRound className="h-4 w-4 mr-2" />
                        Password
                      </Label>
                      <Link
                        href="/auth/reset-password"
                        className="text-xs text-purple-600 hover:text-purple-800 font-medium"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                        placeholder="Enter your password"
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
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Checkbox
                        id="remember-me"
                        checked={rememberMe}
                        onCheckedChange={setRememberMe}
                        className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                      />
                      <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                        Remember me
                      </label>
                    </div>
                    <div className="text-xs text-gray-500 flex items-center">
                      <Lock className="h-3 w-3 mr-1" />
                      Secure connection
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
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
                        Signing in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="anonymous">
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 border border-purple-100 rounded-md">
                    <div className="flex items-start">
                      <Shield className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-purple-800 mb-1">Anonymous Access</h3>
                        <p className="text-sm text-purple-700">
                          This method allows you to access your account without revealing your identity. A one-time code
                          will be sent to your anonymous contact method.
                        </p>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="anonymous-id" className="flex items-center text-gray-700">
                        <Fingerprint className="h-4 w-4 mr-2" />
                        Anonymous ID
                      </Label>
                      <div className="relative">
                        <Input
                          id="anonymous-id"
                          type="text"
                          placeholder="Enter your anonymous ID"
                          value={anonymousId}
                          onChange={(e) => setAnonymousId(e.target.value)}
                          className="pl-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                          required
                        />
                        <User className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      </div>
                    </div>

                    <Button
                      type="button"
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
                      onClick={handleRequestCode}
                      disabled={isLoading || !anonymousId}
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
                          Sending code...
                        </>
                      ) : (
                        "Request Access Code"
                      )}
                    </Button>

                    {codeSent && (
                      <>
                        <div className="pt-4 border-t border-gray-200">
                          <div className="flex items-center justify-between mb-2">
                            <Label htmlFor="access-code" className="flex items-center text-gray-700">
                              <KeyRound className="h-4 w-4 mr-2" />
                              Access Code
                            </Label>
                            <span className="text-xs text-purple-600">Code sent!</span>
                          </div>
                          <div className="relative">
                            <Input
                              id="access-code"
                              type="text"
                              placeholder="Enter the code sent to your device"
                              value={code}
                              onChange={(e) => setCode(e.target.value)}
                              className="pl-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                            />
                            <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                          </div>

                          <div className="mt-2">
                            <div className="flex justify-between text-xs text-gray-500 mb-1">
                              <span>Code expires in:</span>
                              <span>4:59</span>
                            </div>
                            <Progress value={60} className="h-1" indicatorClassName="bg-purple-600" />
                          </div>
                        </div>

                        <Button type="submit" className="w-full" variant="outline" disabled={!code}>
                          Verify & Sign In
                        </Button>
                      </>
                    )}
                  </form>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 bg-gray-50 border-t border-purple-100">
            <div className="text-center text-sm text-gray-500">
              <div className="flex items-center justify-center">
                <Lock className="h-4 w-4 mr-1" />
                <span>Your connection is secure and encrypted</span>
              </div>
            </div>
            <div className="text-center">
              <span className="text-sm text-gray-600">Don't have an account? </span>
              <Link href="/auth/signup" className="text-sm font-medium text-purple-600 hover:text-purple-800">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>

        <div className="text-center text-xs text-gray-500 space-y-1">
          <p>
            By signing in, you agree to our{" "}
            <a href="#" className="text-purple-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-purple-600 hover:underline">
              Privacy Policy
            </a>
          </p>
          <p>© {new Date().getFullYear()} Safetalk. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
