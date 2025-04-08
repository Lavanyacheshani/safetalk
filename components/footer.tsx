import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 bg-purple-500 rounded-sm flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="text-lg font-bold text-white">Safetalk</span>
            </div>
            <p className="text-sm text-purple-200 mb-4">
              Your AI-powered companion for sexual health support, guidance, and resources.
            </p>
            <p className="text-sm text-purple-300">123 Health Ave, San Francisco, CA</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-purple-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-purple-300 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-purple-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-purple-300 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-purple-300 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-purple-300 hover:text-white">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-purple-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-purple-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="text-purple-300 mr-2">Email:</span>
                <a href="mailto:support@safetalk.health" className="text-purple-300 hover:text-white">
                  support@safetalk.health
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-purple-300 mr-2">Phone:</span>
                <a href="tel:+1-555-123-4567" className="text-purple-300 hover:text-white">
                  +1-555-123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-8 pt-8 text-center text-sm text-purple-400">
          <p>Copyright © 2023 Safetalk. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
