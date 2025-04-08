import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  MessageSquare,
  Stethoscope,
  Users,
  Lock,
  ArrowRight,
  CheckCircle2,
  Home,
  Info,
  Sparkles,
  Activity,
} from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How Safetalk Works</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our innovative platform combines AI technology, secure communication, and medical expertise to provide
            confidential sexual health support.
          </p>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="home" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-12">
              <TabsTrigger value="home" className="text-sm md:text-base">
                <Home className="h-4 w-4 mr-2 hidden md:inline" />
                Home
              </TabsTrigger>
              <TabsTrigger value="about" className="text-sm md:text-base">
                <Info className="h-4 w-4 mr-2 hidden md:inline" />
                About
              </TabsTrigger>
              <TabsTrigger value="features" className="text-sm md:text-base">
                <Sparkles className="h-4 w-4 mr-2 hidden md:inline" />
                Core Features
              </TabsTrigger>
              <TabsTrigger value="health" className="text-sm md:text-base">
                <Activity className="h-4 w-4 mr-2 hidden md:inline" />
                Health Management
              </TabsTrigger>
            </TabsList>

            {/* Home Tab Content */}
            <TabsContent value="home">
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Safetalk</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Your secure platform for confidential sexual health support, guidance, and community.
                  </p>
                </div>

                {/* User Journey */}
                <div>
                  <h3 className="text-2xl font-bold text-center mb-10 text-gray-800">Your Journey with Safetalk</h3>

                  <div className="relative">
                    {/* Vertical line connecting steps */}
                    <div className="absolute left-[39px] top-0 bottom-0 w-1 bg-purple-200 hidden md:block"></div>

                    {/* Steps */}
                    <div className="space-y-12">
                      <JourneyStep
                        number="1"
                        title="Create Your Secure Account"
                        description="Sign up anonymously with end-to-end encryption protecting your identity and data."
                        details={[
                          "No personally identifiable information required",
                          "Multiple authentication options for security",
                          "Customizable privacy settings",
                          "Blockchain-based data protection",
                        ]}
                      />

                      <JourneyStep
                        number="2"
                        title="Describe Your Concerns"
                        description="Use our AI symptom analyzer or connect directly with healthcare professionals."
                        details={[
                          "AI-powered symptom assessment",
                          "Anonymous consultations with certified providers",
                          "Secure messaging and video calls",
                          "Personalized recommendations",
                        ]}
                      />

                      <JourneyStep
                        number="3"
                        title="Receive Personalized Support"
                        description="Get tailored guidance, treatment options, and ongoing support for your journey."
                        details={[
                          "Evidence-based treatment recommendations",
                          "Wellness coaching for relationships and intimacy",
                          "Community support from others with similar experiences",
                          "Secure health passport for managing your records",
                        ]}
                      />

                      <JourneyStep
                        number="4"
                        title="Maintain Complete Privacy"
                        description="Your information remains secure and private, with you maintaining complete control over your data."
                        details={[
                          "End-to-end encryption for all communications",
                          "Zero-knowledge architecture prevents unauthorized access",
                          "Granular sharing controls for health information",
                          "Option to automatically delete data after consultations",
                        ]}
                      />
                    </div>
                  </div>
                </div>

                {/* Privacy & Security */}
                <div className="mt-20">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                      <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">
                        <Lock className="h-8 w-8 text-purple-600" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4 text-gray-800">Privacy & Security by Design</h2>
                      <p className="text-lg text-gray-600">
                        Safetalk was built from the ground up with privacy and security as our foundation.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Shield className="h-5 w-5 mr-2 text-purple-600" />
                            Zero-Knowledge Architecture
                          </CardTitle>
                          <CardDescription>We cannot access your unencrypted data even if we wanted to</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span>End-to-end encryption for all communications and data</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span>Encryption keys are generated and stored only on your device</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span>No plaintext data ever stored on our servers</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span>Regular security audits and penetration testing</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Lock className="h-5 w-5 mr-2 text-purple-600" />
                            Blockchain Health Passport
                          </CardTitle>
                          <CardDescription>Secure, verifiable health records that you control</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span>Immutable record of health data that cannot be altered</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span>Share your status without revealing your identity</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span>Granular control over what information is shared and with whom</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span>Temporary access codes with automatic expiration</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* About Tab Content */}
            <TabsContent value="about">
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">About Safetalk</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    We're on a mission to transform sexual health support through technology, privacy, and compassion.
                  </p>
                </div>

                {/* Our Mission */}
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Mission</h3>
                  <p className="text-lg text-gray-600 mb-8">
                    Safetalk was founded with a simple yet powerful mission: to eliminate the barriers that prevent
                    people from accessing sexual health support. We believe that everyone deserves access to accurate
                    information, compassionate guidance, and quality healthcare without fear of judgment or privacy
                    concerns.
                  </p>

                  <div className="grid md:grid-cols-3 gap-8">
                    <Card className="text-center p-6">
                      <CardContent className="pt-6">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Shield className="h-8 w-8 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Privacy First</h3>
                        <p className="text-gray-600">
                          We've built our platform with privacy as the foundation, ensuring that sensitive health
                          concerns can be addressed without compromising personal information.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="text-center p-6">
                      <CardContent className="pt-6">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Users className="h-8 w-8 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Global Access</h3>
                        <p className="text-gray-600">
                          We're committed to making sexual health support accessible to everyone, regardless of
                          location, background, or circumstances.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="text-center p-6">
                      <CardContent className="pt-6">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <MessageSquare className="h-8 w-8 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Compassionate Care</h3>
                        <p className="text-gray-600">
                          Beyond technology, we're dedicated to providing support that's understanding, non-judgmental,
                          and centered on the whole person.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Our Story */}
                <div className="max-w-4xl mx-auto mt-16">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Story</h3>
                  <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
                    <p className="text-lg text-gray-700 mb-6">
                      Safetalk began in 2023 when our founders—a team of healthcare professionals, privacy experts, and
                      technologists—recognized a critical gap in sexual health support. They observed that despite
                      advances in medicine and technology, many people still avoided seeking help for sexual health
                      concerns due to stigma, privacy fears, and accessibility barriers.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                      The team envisioned a platform that would leverage cutting-edge technology to provide anonymous,
                      accessible support while maintaining the highest standards of medical accuracy and care. After
                      months of development and consultation with experts in sexual health, privacy law, and AI ethics,
                      Safetalk was born.
                    </p>
                    <p className="text-lg text-gray-700">
                      Today, Safetalk continues to grow and evolve, guided by feedback from our users and advances in
                      technology. Our commitment remains unchanged: to create a world where everyone can access the
                      sexual health support they need without barriers.
                    </p>
                  </div>
                </div>

                {/* Our Team */}
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Team</h3>
                  <p className="text-lg text-gray-600 mb-8">
                    Safetalk is powered by a diverse team of experts dedicated to our mission of providing accessible,
                    private sexual health support.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Healthcare Professionals</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                            <span>Board-certified physicians specializing in sexual health</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                            <span>Licensed therapists and relationship counselors</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                            <span>Public health researchers and educators</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                            <span>Medical ethicists ensuring responsible practices</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Technology Experts</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                            <span>Privacy and security engineers</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                            <span>AI and machine learning specialists</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                            <span>Blockchain developers for secure health records</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                            <span>User experience designers focused on accessibility</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Our Values */}
                <div className="max-w-4xl mx-auto mt-16">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Values</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">✓</span>
                          <span className="text-gray-700">Privacy as a fundamental right</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">✓</span>
                          <span className="text-gray-700">Medical accuracy and evidence-based approaches</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">✓</span>
                          <span className="text-gray-700">Inclusivity and cultural sensitivity</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">✓</span>
                          <span className="text-gray-700">Continuous innovation and improvement</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">✓</span>
                          <span className="text-gray-700">User-centered design and accessibility</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">✓</span>
                          <span className="text-gray-700">Ethical use of technology and data</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Join Our Mission
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Core Features Tab Content */}
            <TabsContent value="features">
              <div className="space-y-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">Core Features</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Discover how our innovative platform provides confidential, secure, and stigma-free support for your
                    sexual health concerns.
                  </p>
                </div>

                {/* AI Symptom Analyzer */}
                <FeatureDetail
                  title="AI Symptom Analyzer"
                  description="Our advanced AI technology analyzes your symptoms against comprehensive medical databases to provide instant, confidential advice about potential sexual health concerns."
                  icon={<Shield className="h-12 w-12 text-purple-600" />}
                  steps={[
                    {
                      title: "Describe Your Symptoms",
                      description: "Enter your symptoms in detail through our secure interface.",
                    },
                    {
                      title: "AI Analysis",
                      description: "Our AI compares your symptoms against medical databases and research.",
                    },
                    {
                      title: "Receive Guidance",
                      description: "Get personalized insights, possible conditions, and recommended next steps.",
                    },
                    {
                      title: "Connect with Providers",
                      description: "Seamlessly transition to a healthcare provider consultation if needed.",
                    },
                  ]}
                  benefits={[
                    "Immediate guidance without waiting for appointments",
                    "Privacy-preserving assessment of sensitive concerns",
                    "Medically-backed information based on current research",
                    "Reduced anxiety through quick, accurate information",
                  ]}
                  linkText="Try Symptom Analyzer"
                  linkHref="/symptom-analyzer"
                />

                {/* Anonymous Telehealth */}
                <FeatureDetail
                  title="Anonymous Telehealth Consultations"
                  description="Connect with certified healthcare providers through our end-to-end encrypted platform, ensuring complete privacy for your most sensitive health discussions."
                  icon={<Stethoscope className="h-12 w-12 text-purple-600" />}
                  steps={[
                    {
                      title: "Select a Specialist",
                      description: "Choose from our network of sexual health specialists and providers.",
                    },
                    {
                      title: "Schedule Consultation",
                      description: "Book a convenient time for a video call or text-based consultation.",
                    },
                    {
                      title: "Secure Connection",
                      description: "Connect through our end-to-end encrypted platform that protects your identity.",
                    },
                    {
                      title: "Follow-up Care",
                      description: "Receive prescriptions, follow-up appointments, and ongoing care as needed.",
                    },
                  ]}
                  benefits={[
                    "Consult with specialists without revealing your identity",
                    "End-to-end encrypted video and messaging",
                    "Secure prescription services where available",
                    "Access to specialists regardless of your location",
                  ]}
                  linkText="Book a Consultation"
                  linkHref="/telehealth"
                />

                {/* Wellness Coaching */}
                <FeatureDetail
                  title="AI Relationship & Sexual Wellness Coach"
                  description="Receive personalized guidance for intimacy issues, mental health concerns, and sexual compatibility through our AI-powered coaching system."
                  icon={<MessageSquare className="h-12 w-12 text-purple-600" />}
                  steps={[
                    {
                      title: "Select Your Focus Area",
                      description: "Choose from relationship dynamics, intimacy concerns, or self-image topics.",
                    },
                    {
                      title: "Share Your Situation",
                      description: "Describe your specific challenges and goals to our AI coach.",
                    },
                    {
                      title: "Receive Personalized Guidance",
                      description: "Get evidence-based advice, exercises, and resources tailored to your needs.",
                    },
                    {
                      title: "Track Your Progress",
                      description: "Follow recommended practices and track improvements over time.",
                    },
                  ]}
                  benefits={[
                    "Evidence-based techniques for improving relationships and intimacy",
                    "Available 24/7 for support whenever you need it",
                    "Complete privacy for discussing sensitive topics",
                    "Personalized approach based on your specific situation",
                  ]}
                  linkText="Start Coaching"
                  linkHref="/wellness-coaching"
                />

                {/* Community */}
                <FeatureDetail
                  title="SafeSpace Community"
                  description="Connect with others facing similar challenges in our anonymous, moderated community forums where you can share experiences and find support."
                  icon={<Users className="h-12 w-12 text-purple-600" />}
                  steps={[
                    {
                      title: "Join Anonymously",
                      description: "Create a completely anonymous profile to participate in discussions.",
                    },
                    {
                      title: "Find Relevant Topics",
                      description: "Browse forums organized by health concerns, relationships, and wellness.",
                    },
                    {
                      title: "Share and Connect",
                      description: "Post questions, share experiences, and respond to others in the community.",
                    },
                    {
                      title: "Access Expert Input",
                      description: "Benefit from moderation and occasional input from healthcare professionals.",
                    },
                  ]}
                  benefits={[
                    "Connect with others who understand your experiences",
                    "Completely anonymous participation",
                    "AI-moderated environment ensures respectful discussions",
                    "Learn from the collective wisdom of the community",
                  ]}
                  linkText="Join Community"
                  linkHref="/community"
                />

                {/* Additional Features */}
                <div className="max-w-4xl mx-auto mt-16">
                  <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Additional Features</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <Card className="text-center p-6">
                      <CardContent className="pt-6">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Lock className="h-8 w-8 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Blockchain Health Passport</h3>
                        <p className="text-gray-600">
                          Securely store and share your STD test results and vaccination records without revealing your
                          identity.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="text-center p-6">
                      <CardContent className="pt-6">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-purple-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Multilingual Support</h3>
                        <p className="text-gray-600">
                          Access all features in multiple languages with culturally-sensitive content adaptations.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="text-center p-6">
                      <CardContent className="pt-6">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-purple-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Provider Matching</h3>
                        <p className="text-gray-600">
                          Find the right healthcare professional based on your specific needs and preferences.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Explore All Features
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Health Management Tab Content */}
            <TabsContent value="health">
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">Health Management</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Take control of your sexual health with our comprehensive management tools and secure record
                    keeping.
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
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Secure import of records from healthcare providers</span>
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
                        <CardTitle>Treatment Records</CardTitle>
                        <CardDescription>Keep track of treatments and medications</CardDescription>
                      </CardHeader>
                      <CardContent>
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
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Appointment Management */}
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold mb-8 text-gray-800">Appointment Management</h3>
                  <Card>
                    <CardHeader>
                      <CardTitle>Telehealth Appointments</CardTitle>
                      <CardDescription>Schedule, manage, and attend virtual consultations</CardDescription>
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

                {/* Health Analytics */}
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold mb-8 text-gray-800">Health Analytics</h3>
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Health Insights</CardTitle>
                      <CardDescription>Gain valuable insights from your health data</CardDescription>
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

                {/* CTA */}
                <div className="text-center mt-16">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Manage Your Health
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <FaqItem
              question="How does Safetalk protect my identity?"
              answer="Safetalk uses a combination of end-to-end encryption, zero-knowledge architecture, and anonymous account options to protect your identity. You can use the platform without providing any personally identifiable information, and all communications are encrypted so that only you and your intended recipients can access them."
            />

            <FaqItem
              question="Are the healthcare providers real people or AI?"
              answer="Our telehealth consultations connect you with real, licensed healthcare providers who specialize in sexual health. The symptom analyzer and wellness coach use AI technology, but telehealth consultations are with human providers. All providers undergo rigorous verification and training on our privacy protocols."
            />

            <FaqItem
              question="Can I get prescriptions through Safetalk?"
              answer="Yes, in many cases. Our telehealth providers can issue prescriptions where medically appropriate and legally permitted. These prescriptions can be sent electronically to your pharmacy of choice while maintaining your privacy. The availability of prescription services may vary depending on your location and applicable regulations."
            />

            <FaqItem
              question="How accurate is the AI Symptom Analyzer?"
              answer="Our AI Symptom Analyzer is built on comprehensive medical databases and is regularly updated with the latest research. While it provides highly accurate guidance based on the information you provide, it is not a replacement for professional medical diagnosis. The analyzer will always recommend professional consultation when appropriate."
            />

            <FaqItem
              question="What happens if I lose my login credentials?"
              answer="For anonymous accounts, we provide secure recovery options during setup, such as recovery codes or authentication app backups. For standard accounts, we offer secure password reset procedures. However, due to our encryption model, if all recovery methods are lost, we cannot recover your data, as we don't have access to your encryption keys."
            />

            <FaqItem
              question="Is my data shared with third parties?"
              answer="No. We never sell or share your data with third parties. The only time your information is shared is when you explicitly authorize it, such as when you choose to share your health passport with a healthcare provider or when you connect with a telehealth provider through our platform."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Take Control of Your Sexual Health?</h2>
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

function JourneyStep({ number, title, description, details }) {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-6">
        <div className="w-20 h-20 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          {number}
        </div>
      </div>
      <div className="pt-3">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
              <span className="text-gray-700">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function FeatureDetail({ title, description, icon, steps, benefits, linkText, linkHref }) {
  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center mb-2">
          {icon}
          <CardTitle className="text-2xl ml-4">{title}</CardTitle>
        </div>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-lg mb-4">How It Works</h4>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-medium">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium">{step.title}</h5>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Benefits</h4>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href={linkHref}>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  {linkText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function FaqItem({ question, answer }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{answer}</p>
      </CardContent>
    </Card>
  )
}
