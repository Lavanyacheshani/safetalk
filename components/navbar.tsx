"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center mr-2">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-xl font-bold text-purple-600">Safetalk</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-purple-600">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-purple-600">
                About
              </Link>
              <Link href="/resources" className="text-gray-600 hover:text-purple-600">
                Resources
              </Link>
              <div className="relative group">
                <button className="text-gray-600 hover:text-purple-600 flex items-center">
                  Core Features
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link
                      href="/symptom-analyzer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      AI-Powered Symptom Analyzer
                    </Link>
                    <Link
                      href="/telehealth"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      Doctor Consultations
                    </Link>
                    <Link
                      href="/health-passport"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      Health Passport
                    </Link>
                    <Link
                      href="/community"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      SafeSpace Community
                    </Link>
                    <Link
                      href="/wellness-coaching"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      AI Relationships & Sexual Wellness Coach
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="/auth/login">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  Login
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="/" className="text-gray-600 hover:text-purple-600 py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-purple-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/resources"
              className="text-gray-600 hover:text-purple-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <div className="py-2">
              <div className="text-gray-600 font-medium mb-2">Core Features</div>
              <div className="pl-4 border-l-2 border-gray-100 space-y-2">
                <Link
                  href="/symptom-analyzer"
                  className="block text-gray-600 hover:text-purple-600 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI-Powered Symptom Analyzer
                </Link>
                <Link
                  href="/telehealth"
                  className="block text-gray-600 hover:text-purple-600 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Doctor Consultations
                </Link>
                <Link
                  href="/health-passport"
                  className="block text-gray-600 hover:text-purple-600 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Health Passport
                </Link>
                <Link
                  href="/community"
                  className="block text-gray-600 hover:text-purple-600 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SafeSpace Community
                </Link>
                <Link
                  href="/wellness-coaching"
                  className="block text-gray-600 hover:text-purple-600 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Relationships & Sexual Wellness Coach
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
              <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 w-full">
                  Login
                </Button>
              </Link>
              <Link href="/auth/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
