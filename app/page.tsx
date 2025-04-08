import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Confidential
                <br />
                Support
                <br />
                <span className="text-purple-200">Sexual</span>
                <br />
                <span className="text-purple-200">Health</span>
              </h1>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/auth/signup">
                  <Button size="lg" className="bg-white text-purple-800 hover:bg-gray-100">
                    Get Started
                  </Button>
                </Link>
                <Link href="/telehealth">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-purple-800 hover:bg-purple-800 hover:text-white"
                  >
                    Talk to a Doctor
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-pink-400 rounded-full opacity-70 blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full opacity-70 blur-xl"></div>

              <div className="relative z-10 flex justify-center">
                <div className="bg-purple-600/80 backdrop-blur-sm rounded-full p-8 w-64 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm uppercase tracking-wider">Sexual Health Day</div>
                    <div className="font-bold text-xl mt-2">Sept 4</div>
                    <div className="text-xs mt-2">#SexualHealthMatters</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute left-10 bottom-10 w-24 h-24 bg-pink-300 rounded-full opacity-80"></div>
        <div className="absolute right-10 bottom-20 w-32 h-32 bg-pink-500 rounded-full opacity-70"></div>
        <div className="absolute right-1/4 top-1/4 w-16 h-16 bg-purple-300 rounded-full opacity-60"></div>
      </section>

      {/* How Safetalk Helps You */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">How SafeTalk Helps You</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-16">
            Our AI-powered platform provides confidential tools and resources to support your sexual health journey.
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            <FeatureCard
              icon="/images/ai-icon.svg"
              title="AI-Powered Symptom Analyzer"
              description="Secure, confidential symptom analysis with AI technology. Get evidence-based guidance without judgment."
              link="/symptom-analyzer"
            />
            <FeatureCard
              icon="/images/doctor-icon.svg"
              title="Doctor Consultations"
              description="Talk to licensed healthcare professionals securely and anonymously through our encrypted platform."
              link="/telehealth"
            />
            <FeatureCard
              icon="/images/passport-icon.svg"
              title="Health Passport"
              description="Blockchain-backed secure health records that protect your privacy while giving you control of your data."
              link="/health-passport"
            />
            <FeatureCard
              icon="/images/community-icon.svg"
              title="SafeSpace Community"
              description="Join a stigma-free environment where you can learn from others' experiences."
              link="/community"
            />
            <FeatureCard
              icon="/images/coach-icon.svg"
              title="AI Wellness Coach"
              description="Personalized guidance for relationships, intimacy issues, and sexual wellbeing."
              link="/wellness-coaching"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-purple-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">What Our Users Say</h2>
          <p className="text-xl text-center text-purple-200 max-w-3xl mx-auto mb-16">
            Real experiences from people who've used SafeTalk to address their sexual health concerns.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <TestimonialCard
              quote="I was too embarrassed to see a doctor in person. SafeTalk helped me understand my symptoms and connected me with a non-judgmental specialist."
              initial="H"
            />
            <TestimonialCard
              quote="The AI symptom checker gave me peace of mind when I was anxious about potential STI exposure. The doctor follow-up was quick and professional."
              initial="D"
            />
            <TestimonialCard
              quote="SafeTalk's community resources helped me realize I wasn't alone in my experience. The educational content is informative without being overwhelming."
              initial="T"
            />
            <TestimonialCard
              quote="The wellness coach helped me navigate a difficult conversation with my partner about our intimacy issues. The guidance was practical and compassionate."
              initial="M"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StatCard icon="/images/comfort-icon.svg" title="User Comfort Online" value="10000+" />
            <StatCard icon="/images/preference-icon.svg" title="AI Health Preference" value="100+" />
            <StatCard icon="/images/treatment-icon.svg" title="Faster Treatment" value="20+" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Sexual Health?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands who've found support, guidance, and peace of mind with SafeTalk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-purple-800 hover:bg-gray-100">
                Sign Up Now
              </Button>
            </Link>
            <Link href="/telehealth">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-purple-800 hover:bg-purple-600 hover:text-white"
              >
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description, link }) {
  return (
    <Link href={link}>
      <div className="bg-purple-800/50 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-purple-700/50 transition-colors h-full flex flex-col">
        <div className="w-16 h-16 bg-purple-700 rounded-lg flex items-center justify-center mx-auto mb-4">
          <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-purple-200 text-sm mb-4 flex-grow">{description}</p>
        <Button
          variant="outline"
          size="sm"
          className="border-purple-400 text-purple-800 hover:bg-purple-700 hover:text-white"
        >
          View
        </Button>
      </div>
    </Link>
  )
}

function TestimonialCard({ quote, initial }) {
  return (
    <div className="bg-pink-400/20 backdrop-blur-sm p-6 rounded-2xl">
      <p className="text-white mb-4">{quote}</p>
      <div className="flex justify-end">
        <div className="w-8 h-8 bg-white text-purple-800 rounded-full flex items-center justify-center font-bold">
          {initial}
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon, title, value }) {
  return (
    <div className="text-center">
      <div className="w-24 h-24 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
        <div className="w-16 h-16 bg-white/20 rounded-md"></div>
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}
