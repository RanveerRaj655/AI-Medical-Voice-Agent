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
    <div className="relative my-10 flex  flex-col items-center justify-center min-h-screen">
      <Navbar />
      <div className="absolute inset-y-0 left-0 hidden md:block h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 hidden md:block h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 hidden md:block h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20 w-full max-w-7xl">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300 leading-tight">
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
                className="mr-2 inline-block"
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
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-base md:text-lg font-normal text-neutral-600 dark:text-neutral-400 px-2"
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
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-full max-w-xs sm:w-60 transform rounded-lg bg-black px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-sm sm:text-base" onClick={() => router.push('/dashboard')}>
            Get Started
          </button>
         
        </motion.div>
        {/* </Link> */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-10 md:mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-2 md:p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900 mx-4 md:mx-0"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <img
              src="https://assets.aceternity.com/pro/aceternity-landing.webp"
              alt="Landing page preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </motion.div>
      </div>
      
    </div>
  );
}

const Navbar = () => {
  const router = useRouter();
  const { user } = useUser();
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-3 md:py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="size-6 md:size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-sm md:text-base font-bold lg:text-2xl">EchoHealth_AI</h1>
      </div>
      {!user?
      <Link href={"/sign-in"}>
      <button className="w-20 md:w-24 lg:w-32 transform rounded-lg bg-black px-3 md:px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-xs md:text-sm">
        Login
      </button>
      </Link> :
      <div className="flex gap-2 md:gap-5 items-center">
        <UserButton />
        <Button onClick={() => router.push('/dashboard')} className="text-xs md:text-sm px-2 md:px-4">Dashboard</Button>
      </div>}
    </nav>
  );
};
