import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Stethoscope, Users, Lock, Heart } from "lucide-react"

export default function CoreFeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Core Features</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover how our innovative platform provides confidential, secure, and stigma-free support for your sexual
            health concerns.
          </p>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-purple-600" />}
              title="AI-Powered Symptom Analyzer"
              description="Our advanced AI technology analyzes your symptoms against comprehensive medical databases to provide instant, confidential advice about potential sexual health concerns."
              link="/symptom-analyzer"
              color="purple"
            />

            <FeatureCard
              icon={<Stethoscope className="h-10 w-10 text-purple-600" />}
              title="Doctor Consultations"
              description="Connect with certified healthcare providers through our end-to-end encrypted platform, ensuring complete privacy for your most sensitive health discussions."
              link="/telehealth"
              color="purple"
            />

            <FeatureCard
              icon={<Lock className="h-10 w-10 text-purple-600" />}
              title="Health Passport"
              description="Your secure, private, and verifiable sexual health record that you control. Share your status without revealing your identity."
              link="/health-passport"
              color="purple"
            />

            <FeatureCard
              icon={<Users className="h-10 w-10 text-purple-600" />}
              title="SafeSpace Community"
              description="Connect with others facing similar challenges in our anonymous, moderated community forums where you can share experiences and find support."
              link="/community"
              color="purple"
            />

            <FeatureCard
              icon={<Heart className="h-10 w-10 text-purple-600" />}
              title="AI Relationships Coach"
              description="Receive personalized guidance for intimacy issues, relationship dynamics, and sexual wellbeing through our AI-powered coaching system."
              link="/wellness-coaching"
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* Feature Details */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Feature Details</h2>

          <div className="space-y-16">
            <FeatureDetail
              title="AI-Powered Symptom Analyzer"
              description="Our advanced AI technology analyzes your symptoms against comprehensive medical databases to provide instant, confidential advice about potential sexual health concerns."
              image="/placeholder.svg?height=400&width=600"
              reverse={false}
              link="/symptom-analyzer"
              benefits={[
                "Discreet analysis of STD symptoms and sexual dysfunctions",
                "Medically-backed advice based on current research",
                "Personalized next steps and treatment options",
                "Immediate guidance without waiting for appointments",
              ]}
            />

            <FeatureDetail
              title="Doctor Consultations"
              description="Connect with certified healthcare providers through our end-to-end encrypted platform, ensuring complete privacy for your most sensitive health discussions."
              image="/placeholder.svg?height=400&width=600"
              reverse={true}
              link="/telehealth"
              benefits={[
                "End-to-end encrypted video consultations",
                "Anonymous doctor matching based on your specific needs",
                "Secure prescription services where available",
                "Follow-up care without compromising privacy",
              ]}
            />

            <FeatureDetail
              title="Health Passport"
              description="Your secure, private, and verifiable sexual health record that you control. Share your status without revealing your identity."
              image="/placeholder.svg?height=400&width=600"
              reverse={false}
              link="/health-passport"
              benefits={[
                "Blockchain-backed security for all health records",
                "Share your status without revealing your identity",
                "Temporary access codes with automatic expiration",
                "Complete control over what information is shared",
              ]}
            />

            <FeatureDetail
              title="SafeSpace Community"
              description="Connect with others facing similar challenges in our anonymous, moderated community forums where you can share experiences and find support."
              image="/placeholder.svg?height=400&width=600"
              reverse={true}
              link="/community"
              benefits={[
                "Anonymous participation with privacy-preserving profiles",
                "AI-moderated discussions to ensure a safe environment",
                "Topic-specific support groups led by healthcare professionals",
                "Resource sharing and community-driven education",
              ]}
            />

            <FeatureDetail
              title="AI Relationships & Sexual Wellness Coach"
              description="Receive personalized guidance for intimacy issues, relationship dynamics, and sexual wellbeing through our AI-powered coaching system."
              image="/placeholder.svg?height=400&width=600"
              reverse={false}
              link="/wellness-coaching"
              benefits={[
                "Personalized advice tailored to your relationship dynamics",
                "Evidence-based exercises to improve intimacy and communication",
                "Resources for addressing sexual dysfunction and compatibility",
                "Mental health support related to sexual wellness",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Take Control of Your Sexual Health?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Join thousands who have found support, guidance, and peace of mind through Safetalk's confidential platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-purple-800 hover:bg-gray-100">
                Sign Up Now
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-purple-800 hover:bg-purple-700 hover:text-white"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description, link, color }) {
  return (
    <Card className="border-purple-100 hover:border-purple-300 hover:shadow-md transition-all">
      <CardHeader>
        <div className="flex items-center mb-2">
          <div className="p-2 bg-purple-100 rounded-full mr-3">{icon}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button className="w-full bg-purple-600 hover:bg-purple-700">Learn More</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

function FeatureDetail({ title, description, image, reverse, link, benefits }) {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
      <div className={reverse ? "order-2 md:order-1" : ""}>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <img src={image || "/placeholder.svg"} alt={title} className="rounded-lg w-full h-auto" />
        </div>
      </div>
      <div className={reverse ? "order-1 md:order-2" : ""}>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <h4 className="font-semibold text-lg mb-3 text-purple-700">Key Benefits</h4>
        <ul className="space-y-2 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>

        <Link href={link}>
          <Button className="bg-purple-600 hover:bg-purple-700">Explore {title}</Button>
        </Link>
      </div>
    </div>
  )
}
