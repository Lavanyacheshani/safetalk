import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Database, Eye, FileText, Server } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy & Security</h1>
          <p className="text-xl max-w-3xl mx-auto">How we protect your data and maintain your privacy at every step</p>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Privacy Commitment</h2>
            <p className="text-lg text-gray-600">
              At Safetalk, privacy isn't just a feature—it's the foundation of everything we do. We've built our
              platform from the ground up with privacy-preserving technologies and practices that go beyond industry
              standards, ensuring that your most sensitive health information remains secure and private.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">End-to-End Encryption</h3>
                <p className="text-gray-600">
                  All communications and data on Safetalk are protected with end-to-end encryption, ensuring that only
                  you and your authorized recipients can access your information.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Database className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Blockchain Technology</h3>
                <p className="text-gray-600">
                  Your health records are secured using private blockchain technology, providing immutable, verifiable
                  records that you control.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Anonymous Access</h3>
                <p className="text-gray-600">
                  Our platform allows for completely anonymous usage, with no requirement to provide personally
                  identifiable information at any stage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Protect Your Data */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">How We Protect Your Data</h2>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Shield className="h-12 w-12 text-emerald-600" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Zero-Knowledge Architecture</h3>
                  <p className="text-gray-600 mb-4">
                    Our platform is built on zero-knowledge principles, meaning we cannot access your unencrypted data
                    even if we wanted to. Your encryption keys are generated and stored only on your device.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Client-side encryption of all sensitive data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>No plaintext data ever stored on our servers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Encryption keys never leave your device</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center md:order-last">
                  <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center">
                    <FileText className="h-12 w-12 text-emerald-600" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Blockchain Health Passport</h3>
                  <p className="text-gray-600 mb-4">
                    Your Health Passport uses blockchain technology to create tamper-proof, verifiable health records
                    that you control. This allows you to prove your health status without revealing your identity.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Immutable record of health data that cannot be altered</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Cryptographic verification without revealing personal details</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Granular control over what information is shared and with whom</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Server className="h-12 w-12 text-emerald-600" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Minimal Data Collection</h3>
                  <p className="text-gray-600 mb-4">
                    We follow strict data minimization principles, collecting only the information necessary to provide
                    our services. You can use Safetalk without providing any personally identifiable information.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>No requirement for real names, email addresses, or phone numbers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Anonymous account options with secure recovery methods</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Automatic data deletion after consultations (optional)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Controls */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Privacy Controls</h2>
            <p className="text-lg text-gray-600">
              We believe that you should have complete control over your data. Safetalk provides comprehensive privacy
              controls that allow you to manage exactly how your information is used and shared.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Access Control</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Generate temporary access codes for healthcare providers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Set expiration times for shared health information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Revoke access at any time with a single click</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Detailed access logs showing who viewed your information</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Data Management</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Download all your data in standard formats</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Set automatic deletion timeframes for conversations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Selectively delete specific records or information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Complete account deletion with verification</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Communication Privacy</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>End-to-end encrypted messaging with healthcare providers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Anonymous participation in community forums</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Secure notification preferences with privacy-focused options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Self-destructing messages for sensitive communications</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Identity Protection</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Anonymous account options with no personal information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Secure authentication methods that protect your identity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Privacy-preserving verification for health records</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>IP address protection and location masking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">Our Security Measures</h2>

            <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Technical Safeguards</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>AES-256 encryption for all stored data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>TLS 1.3 for all data in transit</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Regular security audits and penetration testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Multi-factor authentication options</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Secure infrastructure with isolated environments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Distributed architecture to prevent single points of failure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Continuous monitoring for suspicious activities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Bug bounty program for responsible disclosure</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Organizational Commitments</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>
                    <strong>No data selling:</strong> We never sell your data to third parties under any circumstances.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>
                    <strong>Transparent policies:</strong> Our privacy and security policies are written in clear,
                    understandable language.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>
                    <strong>Regular updates:</strong> We continuously improve our security measures and keep you
                    informed of changes.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>
                    <strong>Staff training:</strong> All team members undergo rigorous privacy and security training.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>
                    <strong>Limited access:</strong> Strict access controls ensure only authorized personnel can access
                    systems.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">Privacy FAQs</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Can law enforcement access my data?</h3>
                <p className="text-gray-600">
                  Due to our zero-knowledge architecture, we cannot access your encrypted data even if compelled by law
                  enforcement. We cannot decrypt what we don't have the keys for. In the event of a legal request, we
                  can only provide the limited non-sensitive metadata we maintain.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  What happens if I lose my authentication credentials?
                </h3>
                <p className="text-gray-600">
                  For anonymous accounts, we provide secure recovery options during setup, such as recovery codes or
                  authentication app backups. For standard accounts, we offer secure password reset procedures. However,
                  due to our encryption model, if all recovery methods are lost, we cannot recover your data.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  How does the blockchain health passport work?
                </h3>
                <p className="text-gray-600">
                  Your health records are cryptographically secured on a private blockchain. When you choose to share
                  your status, a temporary verification token is generated that allows others to verify the authenticity
                  of your health information without revealing your identity or accessing the actual records.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Can healthcare providers see my identity?</h3>
                <p className="text-gray-600">
                  This is entirely up to you. You can choose to remain anonymous even when consulting with healthcare
                  providers through our platform. Alternatively, you can selectively share identity information with
                  specific providers while maintaining anonymity elsewhere.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">How do you handle data breaches?</h3>
                <p className="text-gray-600">
                  Our architecture minimizes the impact of potential breaches since all sensitive data is encrypted with
                  keys that are not stored on our servers. Nevertheless, we have a comprehensive incident response plan
                  that includes immediate notification to affected users, transparent communication, and continuous
                  improvements to our security measures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
