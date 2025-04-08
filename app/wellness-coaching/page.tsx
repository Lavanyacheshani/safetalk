"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Heart, Brain, Users, ArrowRight, ThumbsUp, Send, Bot, Sparkles } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

export default function WellnessCoachingPage() {
  const [activeTab, setActiveTab] = useState("relationship")
  const [showChat, setShowChat] = useState(false)
  const [message, setMessage] = useState("")
  const [chatMessages, setChatMessages] = useState([
    {
      role: "coach",
      content: "Hello! I'm your AI Relationship & Sexual Wellness Coach. How can I help you today?",
    },
  ])
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = () => {
    if (!message.trim()) return

    // Add user message
    setChatMessages([...chatMessages, { role: "user", content: message }])
    setMessage("")

    // Show typing indicator
    setIsTyping(true)

    // Simulate AI response after a short delay
    setTimeout(() => {
      setIsTyping(false)
      let response
      if (activeTab === "relationship") {
        response =
          "Communication is indeed the foundation of any healthy relationship. It sounds like you're experiencing some challenges with expressing your needs. Would you like some specific communication exercises that can help you and your partner better understand each other's needs?"
      } else if (activeTab === "intimacy") {
        response =
          "It's completely normal to experience changes in desire levels. Many factors can influence this, including stress, health issues, or relationship dynamics. Let's explore some strategies that might help you reconnect with your partner in a way that feels comfortable for both of you."
      } else {
        response =
          "Self-confidence plays a significant role in our overall wellbeing. I can suggest some evidence-based exercises to help build your confidence and develop a healthier relationship with yourself. Would you like to start with some daily affirmation practices or body-positive exercises?"
      }

      setChatMessages((prev) => [...prev, { role: "coach", content: response }])
    }, 1500)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-12">
      <div className="container mx-auto px-4">
        {!showChat ? (
          <>
            <div className="max-w-3xl mx-auto text-center mb-10">
              <div className="inline-flex items-center justify-center p-2 bg-emerald-100 rounded-full mb-4">
                <Bot className="h-8 w-8 text-emerald-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                AI Relationship & Sexual Wellness Coach
              </h1>
              <p className="text-lg text-gray-600">
                Receive personalized guidance for intimacy issues, relationship dynamics, and sexual wellbeing through
                our AI-powered coaching system.
              </p>
            </div>

            <Tabs
              defaultValue="relationship"
              value={activeTab}
              onValueChange={setActiveTab}
              className="max-w-4xl mx-auto"
            >
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="relationship" className="text-base py-3">
                  <Heart className="h-4 w-4 mr-2" />
                  Relationship
                </TabsTrigger>
                <TabsTrigger value="intimacy" className="text-base py-3">
                  <Users className="h-4 w-4 mr-2" />
                  Intimacy
                </TabsTrigger>
                <TabsTrigger value="self" className="text-base py-3">
                  <Brain className="h-4 w-4 mr-2" />
                  Self-Image
                </TabsTrigger>
              </TabsList>

              <TabsContent value="relationship" className="mt-0">
                <CoachingSection
                  title="Relationship Dynamics"
                  description="Improve communication, resolve conflicts, and build a stronger connection with your partner."
                  topics={[
                    "Communication Barriers",
                    "Conflict Resolution",
                    "Trust Building",
                    "Emotional Intimacy",
                    "Relationship Transitions",
                    "Long-Distance Relationships",
                  ]}
                  benefits={[
                    "Learn effective communication techniques",
                    "Develop healthy conflict resolution skills",
                    "Build deeper emotional connections",
                    "Understand relationship patterns",
                    "Navigate relationship changes successfully",
                  ]}
                  icon={<Heart className="h-16 w-16 text-pink-500" />}
                  color="pink"
                  setShowChat={setShowChat}
                />
              </TabsContent>

              <TabsContent value="intimacy" className="mt-0">
                <CoachingSection
                  title="Intimacy & Sexual Wellness"
                  description="Address sexual concerns, enhance intimacy, and develop a fulfilling physical relationship."
                  topics={[
                    "Desire Discrepancy",
                    "Physical Intimacy",
                    "Sexual Communication",
                    "Reconnecting Physically",
                    "Body Confidence",
                    "Intimacy After Changes",
                  ]}
                  benefits={[
                    "Improve communication about physical needs",
                    "Develop strategies for desire differences",
                    "Enhance physical and emotional connection",
                    "Build confidence in intimate settings",
                    "Navigate changes in physical relationships",
                  ]}
                  icon={<Users className="h-16 w-16 text-purple-500" />}
                  color="purple"
                  setShowChat={setShowChat}
                />
              </TabsContent>

              <TabsContent value="self" className="mt-0">
                <CoachingSection
                  title="Self-Image & Confidence"
                  description="Develop a healthier relationship with yourself, build confidence, and improve self-image."
                  topics={[
                    "Body Positivity",
                    "Self-Confidence",
                    "Personal Boundaries",
                    "Self-Care Practices",
                    "Identity & Expression",
                    "Overcoming Shame",
                  ]}
                  benefits={[
                    "Develop a healthier relationship with your body",
                    "Build confidence in intimate settings",
                    "Establish and maintain personal boundaries",
                    "Create effective self-care routines",
                    "Address and overcome feelings of shame",
                  ]}
                  icon={<Brain className="h-16 w-16 text-blue-500" />}
                  color="blue"
                  setShowChat={setShowChat}
                />
              </TabsContent>
            </Tabs>

            <div className="max-w-4xl mx-auto mt-16">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center">
                    <Bot className="h-6 w-6 mr-2" />
                    How Our AI Coaching Works
                  </CardTitle>
                  <CardDescription className="text-emerald-50">
                    Our evidence-based approach combines AI technology with established therapeutic techniques
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageSquare className="h-8 w-8 text-emerald-600" />
                      </div>
                      <h3 className="font-medium mb-2">Personalized Guidance</h3>
                      <p className="text-sm text-gray-600">
                        Our AI adapts to your specific situation and provides tailored advice based on your needs.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ThumbsUp className="h-8 w-8 text-emerald-600" />
                      </div>
                      <h3 className="font-medium mb-2">Evidence-Based Techniques</h3>
                      <p className="text-sm text-gray-600">
                        All coaching is grounded in established therapeutic approaches and relationship research.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-emerald-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium mb-2">Complete Privacy</h3>
                      <p className="text-sm text-gray-600">
                        Your conversations are encrypted and never stored, ensuring total confidentiality.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        ) : (
          <div className="max-w-4xl mx-auto">
            <Card className="h-[80vh] flex flex-col shadow-xl border-none overflow-hidden">
              <CardHeader className="border-b bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="relative">
                      <Avatar className="h-12 w-12 mr-3 bg-white">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="AI Coach" />
                        <AvatarFallback className="text-emerald-600 bg-white">
                          <Bot className="h-6 w-6" />
                        </AvatarFallback>
                      </Avatar>
                      <span className="absolute bottom-0 right-2 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {activeTab === "relationship" && "Relationship Coach"}
                        {activeTab === "intimacy" && "Intimacy Coach"}
                        {activeTab === "self" && "Self-Image Coach"}
                      </CardTitle>
                      <CardDescription className="text-emerald-50">
                        AI-powered guidance with complete privacy
                      </CardDescription>
                    </div>
                  </div>
                  <Button variant="secondary" size="sm" onClick={() => setShowChat(false)}>
                    Back to Topics
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="flex-grow overflow-auto py-6 bg-gradient-to-b from-gray-50 to-white">
                <div className="space-y-4">
                  {chatMessages.map((msg, index) => (
                    <motion.div
                      key={index}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {msg.role === "coach" && (
                        <Avatar className="h-8 w-8 mr-2 mt-1">
                          <AvatarFallback className="bg-emerald-100 text-emerald-600">
                            <Bot className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`max-w-[80%] rounded-2xl p-4 ${
                          msg.role === "user"
                            ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
                            : "bg-white border border-gray-200 text-gray-800 shadow-sm"
                        }`}
                      >
                        {msg.content}
                      </div>
                      {msg.role === "user" && (
                        <Avatar className="h-8 w-8 ml-2 mt-1">
                          <AvatarFallback className="bg-gray-200">U</AvatarFallback>
                        </Avatar>
                      )}
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div className="flex justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <Avatar className="h-8 w-8 mr-2 mt-1">
                        <AvatarFallback className="bg-emerald-100 text-emerald-600">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                        <div className="flex space-x-1">
                          <div
                            className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          ></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="border-t p-4 bg-white">
                <div className="flex w-full items-center space-x-2">
                  <Textarea
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-grow rounded-xl border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                  <Button
                    size="icon"
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-full h-10 w-10"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

function CoachingSection({ title, description, topics, benefits, icon, color, setShowChat }) {
  const colorClasses = {
    pink: {
      light: "bg-pink-50",
      medium: "bg-pink-100",
      border: "border-pink-200",
      text: "text-pink-800",
      button: "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600",
    },
    purple: {
      light: "bg-purple-50",
      medium: "bg-purple-100",
      border: "border-purple-200",
      text: "text-purple-800",
      button: "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600",
    },
    blue: {
      light: "bg-blue-50",
      medium: "bg-blue-100",
      border: "border-blue-200",
      text: "text-blue-800",
      button: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
    },
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <div className={`p-6 rounded-lg shadow-md ${colorClasses[color].light} ${colorClasses[color].border} mb-6`}>
          <div className="flex items-center mb-4">
            {icon}
            <h2 className={`text-2xl font-bold ml-4 ${colorClasses[color].text}`}>{title}</h2>
          </div>
          <p className="text-gray-700 mb-6">{description}</p>
          <Button
            className={`w-full shadow-md ${colorClasses[color].button} text-white`}
            onClick={() => setShowChat(true)}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Start Coaching Session
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <Card className="shadow-md border-none">
          <CardHeader className={`${colorClasses[color].medium} rounded-t-lg`}>
            <CardTitle>Benefits</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${color === "pink" ? "text-pink-500" : color === "purple" ? "text-purple-500" : "text-blue-500"} mr-2 mt-0.5`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className="shadow-md border-none">
          <CardHeader className={`${colorClasses[color].medium} rounded-t-lg`}>
            <CardTitle>Popular Topics</CardTitle>
            <CardDescription>Select a topic to begin a focused coaching session</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 gap-3">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border cursor-pointer hover:${colorClasses[color].light} hover:${colorClasses[color].border} transition-colors shadow-sm`}
                  onClick={() => setShowChat(true)}
                >
                  <div className="font-medium mb-1">{topic}</div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Bot className="h-3 w-3 mr-1" />
                    Tap to explore
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200 shadow-sm">
          <h3 className="font-medium mb-2 flex items-center text-amber-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-amber-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Important Note
          </h3>
          <p className="text-sm text-amber-700">
            While our AI coach provides evidence-based guidance, it is not a replacement for professional therapy. For
            serious concerns, please consult with a licensed therapist or healthcare provider.
          </p>
        </div>
      </div>
    </div>
  )
}
