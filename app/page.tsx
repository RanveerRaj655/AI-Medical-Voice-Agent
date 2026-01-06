"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { motion } from "motion/react";
import { FeatureBentoGrid } from "./_components/FeatureBentoGrid";
import { Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HeroSectionOne() {
  const router = useRouter();
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="absolute inset-y-0 left-0 hidden lg:block h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 hidden lg:block h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 hidden lg:block h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-20 w-full max-w-7xl mx-auto">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-700 dark:text-slate-300 leading-tight">
          {"Revolutionize Medical Practice with AI Voice Assistance"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-1 sm:mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-2xl py-4 sm:py-6 text-center text-sm sm:text-base md:text-lg font-normal text-neutral-600 dark:text-neutral-400 px-2"
        >
          Experience the future of healthcare with our AI-powered voice agent,
          designed to assist medical professionals in delivering exceptional
          patient care.
        </motion.p>
        {/* <Link href={"/sign-in"}> */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 px-4"
        >
          <button className="w-full max-w-sm sm:max-w-xs md:w-60 transform rounded-lg bg-black px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-sm sm:text-base" onClick={() => router.push('/dashboard')}>
            Get Started
          </button>

        </motion.div>


        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="relative z-10 mt-16 sm:mt-20 md:mt-24 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-300 mb-4">
              Why Choose EchoHealth AI?
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Discover the powerful features that make our AI voice assistant the perfect companion for healthcare professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">Voice-Powered Interactions</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Natural voice conversations with AI specialists for hands-free medical consultations and assistance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">24/7 Availability</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Round-the-clock access to medical expertise whenever you need it, ensuring continuous patient care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">Comprehensive Reports</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Generate detailed medical reports and maintain complete consultation history for better patient management.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="relative z-10 mt-16 sm:mt-20 md:mt-24 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">10K+</div>
                <div className="text-sm sm:text-base opacity-90">Consultations</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-sm sm:text-base opacity-90">Doctors</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">98%</div>
                <div className="text-sm sm:text-base opacity-90">Accuracy</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm sm:text-base opacity-90">Support</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="relative z-10 mt-16 sm:mt-20 md:mt-24 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-300 mb-4">
              What Healthcare Professionals Say
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Join thousands of medical professionals who trust EchoHealth AI for their daily practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  D
                </div>
                <div>
                  <div className="font-semibold text-slate-700 dark:text-slate-300">Dr. Sarah Johnson</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Cardiologist</div>
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
                "EchoHealth AI has revolutionized my practice. The voice interactions are incredibly natural, and the accuracy of medical advice is outstanding."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  M
                </div>
                <div>
                  <div className="font-semibold text-slate-700 dark:text-slate-300">Dr. Michael Chen</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Neurologist</div>
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
                "The 24/7 availability and comprehensive reporting features have significantly improved my patient care workflow."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 md:col-span-2 lg:col-span-1"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  A
                </div>
                <div>
                  <div className="font-semibold text-slate-700 dark:text-slate-300">Dr. Amanda Rodriguez</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">General Practitioner</div>
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
                "As a busy GP, having an AI assistant that can handle routine consultations while I focus on complex cases has been a game-changer."
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.2 }}
          className="relative z-10 w-full bg-slate-900 text-white py-12 mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-8 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
                  <h3 className="text-xl font-bold">EchoHealth AI</h3>
                </div>
                <p className="text-gray-400 text-sm max-w-md">
                  Revolutionizing healthcare with AI-powered voice assistance for medical professionals worldwide.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2026 EchoHealth AI. All rights reserved.</p>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

const Navbar = () => {
  const router = useRouter();
      const {user} = useUser();
      return (
      <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 sm:px-6 py-3 md:py-4 dark:border-neutral-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="size-6 sm:size-7 md:size-8 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">EchoHealth_AI</h1>
        </div>
        {!user ?
          <Link href={"/sign-in"}>
            <button className="w-16 sm:w-20 md:w-24 lg:w-32 transform rounded-lg bg-black px-2 sm:px-3 md:px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-xs sm:text-sm">
              Login
            </button>
          </Link> :
          <div className="flex gap-2 sm:gap-3 md:gap-5 items-center">
            <UserButton />
            <Button onClick={() => router.push('/dashboard')} className="text-xs sm:text-sm px-2 sm:px-3 md:px-4 py-2">Dashboard</Button>
          </div>}
      </nav>
      );
};
