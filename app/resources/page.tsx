import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, ExternalLink, BookOpen, Shield, MessageSquare, Heart } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sexual Health Resources</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive guides, educational materials, and trusted resources to support your sexual health journey.
          </p>
        </div>
      </section>

      {/* Essential Guides Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Essential Guides</h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <ResourceCard
              title="Complete Guide to Sexual Health Testing"
              description="Everything you need to know about sexual health testing, including types of tests, frequency recommendations, and how to interpret results."
              icon={<Shield className="h-10 w-10 text-purple-600" />}
              downloadable={true}
            />

            <ResourceCard
              title="STI Prevention and Treatment"
              description="Comprehensive information on preventing sexually transmitted infections and understanding treatment options if you've been diagnosed."
              icon={<FileText className="h-10 w-10 text-purple-600" />}
              downloadable={true}
            />

            <ResourceCard
              title="Communication and Consent Guide"
              description="Practical advice for discussing sexual health, boundaries, and consent with partners in a respectful and effective way."
              icon={<MessageSquare className="h-10 w-10 text-purple-600" />}
              downloadable={true}
            />

            <ResourceCard
              title="Relationship and Sexual Wellness"
              description="Evidence-based approaches to maintaining healthy relationships and addressing common intimacy concerns."
              icon={<Heart className="h-10 w-10 text-purple-600" />}
              downloadable={true}
            />
          </div>
        </div>
      </section>

      {/* Comprehensive Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Comprehensive Resources</h2>

          <div className="max-w-5xl mx-auto">
            <Card className="mb-8">
              <div className="md:flex">
                <div className="md:w-1/3 bg-purple-100 flex items-center justify-center p-6">
                  <BookOpen className="h-16 w-16 text-purple-600" />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle>The Complete Sexual Health Handbook</CardTitle>
                    <CardDescription>
                      A comprehensive guide covering all aspects of sexual health, from prevention to treatment and
                      emotional wellbeing.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      This handbook was developed by Safetalk's medical advisory board to provide accurate, accessible
                      information on a wide range of sexual health topics. It includes:
                    </p>
                    <ul className="space-y-1 text-gray-700 mb-4">
                      <li>• Comprehensive STI information and prevention strategies</li>
                      <li>• Testing guidelines and result interpretation</li>
                      <li>• Communication strategies for discussing sexual health</li>
                      <li>• Mental health considerations related to sexual health</li>
                      <li>• Treatment options and support resources</li>
                      <li>• Privacy and confidentiality in healthcare settings</li>
                      <li>• Relationship dynamics and sexual wellness</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Download className="mr-2 h-4 w-4" />
                      Download Handbook (PDF)
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>After Diagnosis: Next Steps Guide</CardTitle>
                  <CardDescription>
                    Practical advice and emotional support for those who have recently received an STI diagnosis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Receiving an STI diagnosis can be overwhelming. This comprehensive guide provides:
                  </p>
                  <ul className="space-y-1 text-gray-700 mb-4">
                    <li>• Understanding your diagnosis and treatment options</li>
                    <li>• Managing emotional responses and reducing stigma</li>
                    <li>• Communicating with partners about your diagnosis</li>
                    <li>• Long-term health management strategies</li>
                    <li>• Finding support communities and resources</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Download className="mr-2 h-4 w-4" />
                    Download Guide (PDF)
                  </Button>
                </CardFooter>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Sexual Health for Every Life Stage</CardTitle>
                  <CardDescription>
                    Age-appropriate sexual health information and guidance for different life stages
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Sexual health needs evolve throughout life. This guide provides tailored information for:
                  </p>
                  <ul className="space-y-1 text-gray-700 mb-4">
                    <li>• Young adults navigating sexual health for the first time</li>
                    <li>• Adults in various relationship structures</li>
                    <li>• Sexual health during pregnancy and postpartum</li>
                    <li>• Midlife changes and sexual health</li>
                    <li>• Older adults and continuing sexual wellness</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Download className="mr-2 h-4 w-4" />
                    Download Guide (PDF)
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Specialized Resources</h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <SpecializedResourceCard
                title="Mental Health & Sexual Wellbeing"
                description="Resources addressing the connection between mental health and sexual health, with practical self-care strategies."
                topics={[
                  "Anxiety and sexual health",
                  "Depression and libido",
                  "Trauma-informed sexual health",
                  "Building body confidence",
                  "Mindfulness for sexual wellness",
                ]}
              />

              <SpecializedResourceCard
                title="LGBTQ+ Sexual Health"
                description="Tailored resources addressing the specific sexual health needs and considerations for LGBTQ+ individuals."
                topics={[
                  "Inclusive healthcare access",
                  "Trans-specific health considerations",
                  "PrEP and HIV prevention",
                  "Finding affirming providers",
                  "Community support resources",
                ]}
              />

              <SpecializedResourceCard
                title="Reproductive Health"
                description="Comprehensive information on reproductive health, fertility, contraception, and family planning."
                topics={[
                  "Contraception options",
                  "Fertility awareness",
                  "Pregnancy and STI prevention",
                  "Reproductive health screenings",
                  "Sexual health after pregnancy",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted External Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Trusted External Resources</h2>

          <div className="max-w-5xl mx-auto">
            <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="flex items-center text-blue-800 mb-2">
                <Shield className="h-5 w-5 mr-2" />
                <span className="font-medium">Verified Resources</span>
              </div>
              <p className="text-sm text-blue-700">
                The following resources are provided by trusted third-party organizations. While we've vetted these
                resources for accuracy, please note that you'll be leaving the Safetalk platform when accessing them.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <ExternalResourceCard
                title="CDC Sexual Health Resources"
                description="Comprehensive information on STIs, testing, and prevention from the Centers for Disease Control and Prevention."
                organization="Centers for Disease Control and Prevention"
                url="https://www.cdc.gov/sexualhealth/"
              />

              <ExternalResourceCard
                title="WHO Sexual Health Guidelines"
                description="Global guidelines and resources on sexual health from the World Health Organization."
                organization="World Health Organization"
                url="https://www.who.int/health-topics/sexual-health"
              />

              <ExternalResourceCard
                title="ASHA Sexual Health Resources"
                description="Educational materials and support resources from the American Sexual Health Association."
                organization="American Sexual Health Association"
                url="https://www.ashasexualhealth.org/"
              />

              <ExternalResourceCard
                title="Planned Parenthood Sexual Health Resources"
                description="Educational materials and service information from Planned Parenthood."
                organization="Planned Parenthood"
                url="https://www.plannedparenthood.org/learn"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <FaqItem
              question="How often should I get tested for STIs?"
              answer="Testing frequency depends on your individual risk factors, sexual activity, and number of partners. Generally, sexually active individuals should be tested at least once a year. Those with multiple partners or other risk factors should consider testing every 3-6 months. Our 'Complete Guide to Sexual Health Testing' provides detailed recommendations based on your specific situation."
            />

            <FaqItem
              question="How do I talk to my partner about STI testing?"
              answer="Open, honest communication is key. Choose a private, relaxed setting and approach the conversation as a matter of mutual care and health. Frame testing as something you do together for each other's wellbeing. Our 'Communication and Consent Guide' provides specific conversation starters and techniques for navigating this discussion effectively."
            />

            <FaqItem
              question="Are these resources medically accurate?"
              answer="Yes. All Safetalk resources are developed by our medical advisory board, which includes board-certified physicians specializing in sexual health, public health researchers, and healthcare professionals. Our content is regularly reviewed and updated to ensure it reflects the latest medical understanding and best practices."
            />

            <FaqItem
              question="How can I access these resources privately?"
              answer="All resources on Safetalk can be accessed anonymously. When you download any of our guides, they are delivered through encrypted connections, and we don't track or store information about which resources you access. For additional privacy, you can use our mobile app with biometric protection to store downloaded resources securely on your device."
            />
          </div>
        </div>
      </section>

      {/* Resource Request */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Can't Find What You Need?</h2>
          <p className="text-lg mb-8 text-gray-600">
            If you're looking for information on a specific topic that isn't covered in our resources, let us know. We
            regularly update our library based on user requests.
          </p>
          <Link href="/resources/request">
            <Button className="bg-purple-600 hover:bg-purple-700">Request a Resource</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

function ResourceCard({ title, description, icon, downloadable = false }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start mb-2">
          <div className="p-2 bg-purple-100 rounded-full mr-3">{icon}</div>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700">{description}</p>
      </CardContent>
      <CardFooter>
        {downloadable ? (
          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            <Download className="mr-2 h-4 w-4" />
            Download Guide
          </Button>
        ) : (
          <Button className="w-full bg-purple-600 hover:bg-purple-700">Read More</Button>
        )}
      </CardFooter>
    </Card>
  )
}

function SpecializedResourceCard({ title, description, topics }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="font-medium mb-2 text-gray-700">Topics covered:</h4>
        <ul className="space-y-1">
          {topics.map((topic, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-purple-600 hover:bg-purple-700">
          <Download className="mr-2 h-4 w-4" />
          Access Resources
        </Button>
      </CardFooter>
    </Card>
  )
}

function ExternalResourceCard({ title, description, organization, url }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-sm font-medium text-gray-700">Provided by: {organization}</div>
      </CardContent>
      <CardFooter>
        <Link href={url} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit Resource
          </Button>
        </Link>
      </CardFooter>
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
