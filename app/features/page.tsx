import { Shield, Stethoscope, MessageSquare, Users, Lock, Globe, UserCheck } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Safetalk Features</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover how our innovative platform provides confidential, secure, and stigma-free support for your sexual
            health concerns.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="inline-block p-3 bg-emerald-100 rounded-lg mb-6">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">AI-Powered Symptom Analyzer</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our advanced AI technology analyzes your symptoms against comprehensive medical databases to provide
                instant, confidential advice about potential sexual health concerns.
              </p>
              <ul className="space-y-3">
                {[
                  "Discreet analysis of STD symptoms and sexual dysfunctions",
                  "Medically-backed advice based on current research",
                  "Personalized next steps and treatment options",
                  "Immediate guidance without waiting for appointments",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/symptom-analyzer">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Try Symptom Analyzer</Button>
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 h-80 flex items-center justify-center">
              <div className="text-center text-gray-500">[Symptom Analyzer Interface Visualization]</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1 bg-gray-100 rounded-lg p-8 h-80 flex items-center justify-center">
              <div className="text-center text-gray-500">[Telehealth Consultation Interface]</div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block p-3 bg-emerald-100 rounded-lg mb-6">
                <Stethoscope className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Secure & Anonymous Telehealth</h2>
              <p className="text-lg text-gray-600 mb-6">
                Connect with certified healthcare providers through our end-to-end encrypted platform, ensuring complete
                privacy for your most sensitive health discussions.
              </p>
              <ul className="space-y-3">
                {[
                  "End-to-end encrypted video consultations",
                  "Anonymous doctor matching based on your specific needs",
                  "Secure prescription services where available",
                  "Follow-up care without compromising privacy",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/telehealth">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Book Consultation</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="inline-block p-3 bg-emerald-100 rounded-lg mb-6">
                <MessageSquare className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">AI Relationship & Sexual Wellness Coach</h2>
              <p className="text-lg text-gray-600 mb-6">
                Receive personalized guidance for intimacy issues, mental health concerns, and sexual compatibility
                through our AI-powered coaching system.
              </p>
              <ul className="space-y-3">
                {[
                  "Personalized advice tailored to your relationship dynamics",
                  "Evidence-based exercises to improve intimacy and communication",
                  "Resources for addressing sexual dysfunction and compatibility",
                  "Mental health support related to sexual wellness",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/wellness-coaching">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Start Coaching</Button>
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 h-80 flex items-center justify-center">
              <div className="text-center text-gray-500">[Wellness Coach Interface]</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 bg-gray-100 rounded-lg p-8 h-80 flex items-center justify-center">
              <div className="text-center text-gray-500">[Community Forum Interface]</div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block p-3 bg-emerald-100 rounded-lg mb-6">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">SafeSpace Community</h2>
              <p className="text-lg text-gray-600 mb-6">
                Connect with others facing similar challenges in our anonymous, moderated community forums where you can
                share experiences and find support.
              </p>
              <ul className="space-y-3">
                {[
                  "Anonymous participation with privacy-preserving profiles",
                  "AI-moderated discussions to ensure a safe environment",
                  "Topic-specific support groups led by healthcare professionals",
                  "Resource sharing and community-driven education",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/community">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Join Community</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Additional Features</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Lock className="h-8 w-8 text-emerald-500" />}
              title="Blockchain Health Passport"
              description="Securely store and share your STD test results and vaccination records without revealing your identity."
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-emerald-500" />}
              title="Multilingual Support"
              description="Access all features in multiple languages with culturally-sensitive content adaptations."
            />
            <FeatureCard
              icon={<UserCheck className="h-8 w-8 text-emerald-500" />}
              title="Provider Matching"
              description="Find the right healthcare professional based on your specific needs and preferences."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Take Control of Your Sexual Health?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Join Safetalk today and experience confidential, judgment-free support for your most personal health
            concerns.
          </p>
          <div className="inline-block bg-white text-emerald-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            Sign Up Now
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
