import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Breaking Barriers in
              <br />
              Sexual Health Support
            </h1>
            <p className="text-lg text-gray-600">
              SafeTalk provides confidential, AI-powered solutions for sexual health information, education, and
              professional telehealth support.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-0 top-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute left-10 top-10 w-32 h-32 border-2 border-gray-400 rounded-full"></div>
          <div className="absolute right-20 top-20 w-24 h-24 border-2 border-gray-400 rounded-full"></div>
          <div className="absolute left-1/4 bottom-10 w-40 h-40 border-2 border-gray-400 rounded-full"></div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              SafeTalk exists to eliminate stigma surrounding sexual health. We believe everyone deserves access to
              accurate information and compassionate care without judgment or barriers.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-purple-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 relative">
            Key Features
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-500 -mb-4"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">AI Symptom Analysis</h3>
              <p className="text-gray-600 mb-4">
                Discreetly analyze potential symptoms and receive guidance on next steps.
              </p>
              <Button
                variant="outline"
                className="rounded-full bg-white border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                View More
              </Button>
            </div>
            <div className="relative">
              <div className="bg-pink-200 rounded-full p-8 aspect-square flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* This would be an illustration in a real implementation */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-pink-300/50 rounded-full"></div>
                </div>
              </div>
              <div className="absolute top-0 right-0 text-purple-300 text-4xl">*</div>
            </div>

            <div className="relative order-4 md:order-3">
              <div className="bg-pink-200 rounded-full p-8 aspect-square flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* This would be an illustration in a real implementation */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-pink-300/50 rounded-full"></div>
                </div>
              </div>
              <div className="absolute top-0 right-0 text-purple-300 text-4xl">*</div>
            </div>
            <div className="order-3 md:order-4">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Telehealth Consultations</h3>
              <p className="text-gray-600 mb-4">
                Connect with certified healthcare providers from the comfort of your home.
              </p>
              <Button
                variant="outline"
                className="rounded-full bg-white border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                View More
              </Button>
            </div>

            <div className="order-5">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Community Forum</h3>
              <p className="text-gray-600 mb-4">
                Share experiences and find support in our moderated, anonymous community.
              </p>
              <Button
                variant="outline"
                className="rounded-full bg-white border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                View More
              </Button>
            </div>
            <div className="relative order-6">
              <div className="bg-pink-200 rounded-full p-8 aspect-square flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* This would be an illustration in a real implementation */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-pink-300/50 rounded-full"></div>
                </div>
              </div>
              <div className="absolute top-0 right-0 text-purple-300 text-4xl">*</div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16 bg-gradient-to-b from-pink-100 to-pink-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 relative">
            Doctors
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-500 -mb-4"></span>
          </h2>

          <div className="flex justify-center items-center gap-8 max-w-4xl mx-auto relative">
            <button className="absolute left-0 z-10 bg-white/80 p-2 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="transform -rotate-6 scale-90">
              <div className="bg-purple-200 p-2 rounded-md shadow-md">
                <div className="w-32 h-40 bg-gray-300 rounded-sm"></div>
                <p className="text-center mt-2 font-medium">John Carven</p>
              </div>
            </div>

            <div className="z-10">
              <div className="bg-white p-3 rounded-md shadow-lg">
                <div className="w-48 h-56 bg-gray-300 rounded-sm"></div>
                <p className="text-center mt-3 font-medium">Miss Smith Ellen</p>
              </div>
            </div>

            <div className="transform rotate-6 scale-90">
              <div className="bg-purple-200 p-2 rounded-md shadow-md">
                <div className="w-32 h-40 bg-gray-300 rounded-sm"></div>
                <p className="text-center mt-2 font-medium">John Carven</p>
              </div>
            </div>

            <button className="absolute right-0 z-10 bg-white/80 p-2 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Join thousands who've found support, guidance, and peace of mind with SafeTalk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Sign Up Now</Button>
            <Button variant="outline" className="border-purple-600 text-purple-700 hover:bg-purple-50">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
