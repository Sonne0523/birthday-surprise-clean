"use client";

import { useState, useEffect } from "react";
// 1. We imported 'Variants' here to make TypeScript happy!
import { motion, Variants } from "framer-motion";
// @ts-ignore
// 2. We added this ignore flag so it stops complaining about Confetti types
import Confetti from "react-confetti";
import { Heart, Camera, Sparkles, Gift } from "lucide-react";

export default function PremiumBirthdayLanding() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // 3. We attached the ': Variants' label to these objects
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-zinc-950 font-sans text-zinc-100 selection:bg-fuchsia-500/30">
      {/* --- Custom Colored Confetti --- */}
      {windowSize.width > 0 && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={600}
          colors={["#8b5cf6", "#d946ef", "#06b6d4", "#ffffff", "#3f3f46"]}
          gravity={0.15}
          className="z-50"
        />
      )}

      {/* --- Ambient Background Glows --- */}
      <div className="pointer-events-none fixed top-[-20%] left-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[150px]" />
      <div className="pointer-events-none fixed right-0 bottom-[-20%] h-[600px] w-[600px] translate-x-1/3 rounded-full bg-fuchsia-600/10 blur-[150px]" />

      {/* --- Main Content Wrapper --- */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Hero Section */}
          <motion.div variants={item} className="mb-16 text-center md:mb-24">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-xs font-medium text-zinc-400 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-fuchsia-400" />
              <span>Unlocked Successfully</span>
            </div>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tighter sm:text-7xl lg:text-8xl">
              Happy Birthday, <br className="md:hidden" />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Harshita.
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400 md:text-xl">
              Welcome to your personalized digital gift. I built this space just for you
              to celebrate everything that makes you amazing.
            </p>
          </motion.div>

          {/* Bento Box Grid */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
            {/* Bento Card 1: The Heartfelt Letter (Spans 2 columns) */}
            <motion.div
              variants={item}
              className="group relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/40 p-8 shadow-2xl backdrop-blur-xl transition-all hover:bg-zinc-900/60 md:col-span-2 md:row-span-2 md:p-12"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-50 transition-opacity group-hover:opacity-100" />
              <Heart className="mb-6 h-8 w-8 text-fuchsia-400" />
              <h2 className="mb-4 text-2xl font-bold text-zinc-100">
                To My Favorite Person,
              </h2>
              <div className="space-y-4 text-justify leading-relaxed text-zinc-400 md:text-lg">
                <p>
                  I’m sending this across the distance between us because some things
                  simply deserve to be said. Even though we aren’t talking right now, your
                  place in my story remains unchanged. You are the person I shared my
                  loudest laughs and my quietest thoughts with. From the chaotic moments
                  we barely navigated to the "remember when" stories that still make me
                  smile, we’ve survived enough together to last a lifetime.
                </p>
                <p>
                  I’m grateful for every bit of it. I hope this year brings you everything
                  you’ve been reaching for. I wish you nothing but growth, peace, and the
                  kind of happiness that stays. You deserve the absolute best, always.
                </p>
              </div>
            </motion.div>

            {/* Bento Card 2: Photo Memory */}
            <motion.div
              variants={item}
              className="group relative flex min-h-[250px] flex-col justify-end overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/40 p-8 shadow-2xl backdrop-blur-xl transition-all hover:bg-zinc-900/60"
            >
              <div className="absolute inset-0 bg-zinc-800/50">
                {/* --- THIS IS THE UPDATED IMAGE TAG --- */}
                <img
                  src="/memory.jpg"
                  alt="Us"
                  className="h-full w-full object-cover opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white">Favorite Memory</h3>
                {/* Don't forget to update this year to a real one! */}
                <p className="text-sm text-zinc-300">That one time in 2023</p>
              </div>
            </motion.div>

            {/* Bento Card 3: The Gift */}
            <motion.div
              variants={item}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-violet-900/40 to-fuchsia-900/20 p-8 shadow-2xl backdrop-blur-xl transition-all hover:border-fuchsia-500/30"
            >
              <Gift className="mb-4 h-8 w-8 text-cyan-400" />
              <div>
                <h3 className="mb-2 text-xl font-bold text-white">Your Memory Gift</h3>
                <p className="mb-6 text-sm text-zinc-400">
                  Check your memory mailbox. Something special is on the way.
                </p>

                {/* ---------- ONLY THIS BUTTON WAS CHANGED ---------- */}
                <button
                  onClick={() => (window.location.href = "/gift")}
                  className="w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200"
                >
                  Digital Gift
                </button>
                {/* ------------------------------------------------ */}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
