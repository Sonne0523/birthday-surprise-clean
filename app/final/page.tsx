"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// @ts-ignore
import Confetti from "react-confetti";
import { GraduationCap, Sparkles, Rocket } from "lucide-react";

export default function FinalSurprisePage() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [accepted, setAccepted] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);

  // --- NEW STATES FOR THE CAKE ANIMATION ---
  const [isBlowing, setIsBlowing] = useState(false);
  const [candleBlown, setCandleBlown] = useState(false);

  // Funny responses for the "No" button
  const noButtonTexts = [
    "No",
    "Are you sure?",
    "Think again!",
    "Come on, bestie...",
    "Don't do this to me!",
    "Error: Answer Unacceptable",
    "Okay, I'm hiding this button now.",
  ];

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const sendNotification = async (action: string) => {
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "b5ac43e6-0ce7-46c1-bb60-d61d4e86bd64", // <-- Put your key from your email here!
          subject: "🚨 BIRTHDAY APP ALERT!",
          message: `Your bestie just clicked: ${action} to being your first instructor!`,
        }),
      });
    } catch (error) {
      console.error("Failed to send notification", error);
    }
  };

  const handleBlowCandle = () => {
    setIsBlowing(true);
    // Wait exactly 3 seconds to blow out the candle and reveal the final message
    setTimeout(() => {
      setCandleBlown(true);
    }, 3000);
  };

  // Sprinkles generator for cake redesign
  const Sprinkle = ({ color, style }: { color: string; style: React.CSSProperties }) => (
    <div className={`absolute h-2 w-0.5 rounded-full ${color}`} style={style} />
  );

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-zinc-950 p-6 font-sans text-zinc-100 selection:bg-fuchsia-500/30">
      {/* --- Massive Confetti Explosion when they click YES --- */}
      {accepted && windowSize.width > 0 && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={true}
          numberOfPieces={800}
          colors={["#8b5cf6", "#d946ef", "#06b6d4", "#fcd34d"]}
          className="z-50"
        />
      )}

      {/* --- Ambient Background Glows --- */}
      <div className="pointer-events-none fixed top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[150px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center text-center">
        {/* We wrap the whole content in AnimatePresence so phases transition smoothly */}
        <AnimatePresence mode="wait">
          {!accepted && (
            // =========================================================================
            // PHASE 1: Proposal Screen (Original Title + Card with Buttons)
            // =========================================================================
            <motion.div
              key="proposal"
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex w-full max-w-3xl flex-col items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-16"
              >
                <h1 className="mb-4 text-6xl font-black tracking-tighter md:text-8xl">
                  <span className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                    Happy Birthday, Harshita.
                  </span>
                </h1>
                <p className="text-xl text-zinc-400 md:text-2xl">
                  This year is going to be your best one yet. And I want to be a part of
                  it.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                className="relative w-full overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-zinc-900/50 p-8 shadow-2xl backdrop-blur-2xl md:p-12"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500" />
                <div className="flex flex-col items-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-zinc-700/50 bg-zinc-800/50 shadow-inner">
                    <GraduationCap className="h-10 w-10 text-cyan-400" />
                  </div>

                  <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                    I have a massive question for you.
                  </h2>

                  <div className="mb-10 max-w-xl space-y-4 text-zinc-300 md:text-lg">
                    <p>
                      As you know, my new learning platform is finally coming together.
                      I've been coding the architecture, setting up the exams, and getting
                      ready for the commercial launch.
                    </p>
                    <p>
                      But a platform is nothing without incredible teaching aptitude. I
                      couldn't imagine doing this without you.
                    </p>
                    <p className="font-semibold text-fuchsia-300">
                      Would you do me the absolute honor of being the very first
                      instructor on my website?
                    </p>
                  </div>

                  {/* Interactive Yes/No Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <button
                      onClick={() => {
                        setAccepted(true);
                        sendNotification("YES!");
                      }}
                      className="group relative flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-10 py-4 text-lg font-bold text-white shadow-[0_0_40px_-10px_rgba(217,70,239,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(217,70,239,0.7)] active:scale-95"
                    >
                      <Sparkles className="h-5 w-5" />
                      <span>Yes, I'm in!</span>
                    </button>

                    {noClickCount < 6 && (
                      <button
                        onClick={() => {
                          setNoClickCount((prev) => prev + 1);
                          sendNotification(
                            `Tried to click NO (Attempt ${noClickCount + 1})`
                          );
                        }}
                        style={{
                          transform: `scale(${1 - noClickCount * 0.1})`,
                          opacity: 1 - noClickCount * 0.1,
                        }}
                        className="rounded-full bg-zinc-800 px-8 py-4 text-base font-medium text-zinc-400 transition-all hover:bg-zinc-700 hover:text-white"
                      >
                        {noButtonTexts[Math.min(noClickCount, noButtonTexts.length - 1)]}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {accepted && !candleBlown && (
            // =========================================================================
            // PHASE 2: THE NEW, BIG, CENTERED BIRTHDAY CAKE (NO SCROLLING FIX)
            // =========================================================================
            <motion.div
              key="cake_phase"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="flex h-full w-full flex-col items-center justify-center"
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8 text-5xl font-black tracking-tighter text-white md:text-6xl"
              >
                Make a wish! <span className="inline-block animate-pulse">🎂</span>
              </motion.h2>

              {/* --- NEW REDESIGNED BIG CSS CAKE --- */}
              <div className="relative my-10 flex w-full max-w-4xl scale-75 flex-col items-center justify-end sm:scale-90 md:scale-110">
                {/* 1. The Plate */}
                <div className="absolute -bottom-4 h-6 w-[36rem] rounded-full border-4 border-zinc-700 bg-zinc-800 shadow-[0_20px_60px_#000000]" />

                {/* 2. Cake Tiers Wrapper (Using flex column-reverse to build from bottom up) */}
                <div className="relative z-10 flex w-full flex-col-reverse items-center">
                  {/* --- Tier 1: The Base (Largest) --- */}
                  <div className="relative h-28 w-[36rem] overflow-hidden rounded-b-2xl border-t-2 border-zinc-200/50 bg-gradient-to-b from-white to-zinc-200 shadow-2xl">
                    {/* sprinkles details */}
                    <Sprinkle
                      color="bg-fuchsia-400"
                      style={{ top: "20%", left: "15%", rotate: "30deg" }}
                    />
                    <Sprinkle
                      color="bg-cyan-400"
                      style={{ top: "60%", left: "25%", rotate: "-20deg" }}
                    />
                    <Sprinkle
                      color="bg-violet-400"
                      style={{ top: "40%", left: "80%", rotate: "70deg" }}
                    />
                    <Sprinkle
                      color="bg-fuchsia-400"
                      style={{ bottom: "20%", right: "15%", rotate: "-45deg" }}
                    />
                  </div>

                  {/* --- Tier 2: The Middle with Berry Drip --- */}
                  <div className="relative h-24 w-[28rem] border-t-2 border-zinc-200/50 bg-white shadow-xl">
                    {/* Premium Icing Berry Drip effect */}
                    <div className="absolute top-0 left-0 z-10 h-8 w-full rounded-b-lg bg-gradient-to-r from-fuchsia-400 to-violet-500 shadow-md" />
                    <div className="absolute top-0 left-6 z-10 h-14 w-5 rounded-b-full bg-violet-500" />
                    <div className="absolute top-0 left-24 z-10 h-20 w-7 rounded-b-full bg-fuchsia-400 shadow-lg" />
                    <div className="absolute top-0 right-16 z-10 h-16 w-6 rounded-b-full bg-fuchsia-500" />
                    <div className="absolute top-0 right-40 z-10 h-10 w-4 rounded-b-full bg-violet-400" />
                  </div>

                  {/* --- Tier 3: The Top with Frosting Swirls --- */}
                  <div className="relative h-16 w-48 rounded-t-xl border-t-2 border-zinc-200/50 bg-gradient-to-b from-white to-zinc-100 shadow-md">
                    {/* Decorative frosting pseudo-swirls */}
                    <div className="absolute top-2 left-2 h-4 w-4 -rotate-12 rounded-full bg-white shadow" />
                    <div className="absolute top-3 right-4 h-4 w-4 rotate-12 rounded-full bg-white shadow" />
                    <div className="absolute top-2 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-white shadow-lg" />
                  </div>
                </div>

                {/* 3. The Candle and Flame Container */}
                <div className="absolute -top-16 z-20 flex flex-col items-center">
                  {/* The Flame */}
                  <motion.div
                    animate={
                      isBlowing
                        ? {
                            opacity: [1, 0.8, 0.4, 0.8, 0.2, 0],
                            scale: [1, 0.8, 1.2, 0.5, 0],
                            y: [0, -5, 0, -10, -20],
                          }
                        : { scale: [1, 1.1, 0.95, 1.05, 1], rotate: [0, 5, -5, 0] }
                    }
                    transition={
                      isBlowing
                        ? { duration: 3, ease: "easeInOut" }
                        : { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                    }
                    className="h-16 w-8 rounded-t-full rounded-b-full bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-100 shadow-[0_0_40px_10px_#facc15,0_0_80px_20px_#ea580c]"
                  />

                  {/* The Candle */}
                  <div className="relative -mt-1 h-20 w-6 overflow-hidden rounded-t-md bg-gradient-to-b from-cyan-100 to-cyan-300 shadow-inner">
                    {/* Candle wick */}
                    <div className="absolute -top-3 left-1/2 h-4 w-1 -translate-x-1/2 rounded-full bg-zinc-800" />
                    {/* Stripe pattern */}
                    <div className="absolute -left-2 h-full w-2 rotate-[30deg] bg-cyan-400/50" />
                    <div className="absolute left-2 h-full w-2 rotate-[30deg] bg-cyan-400/50" />
                  </div>
                </div>
              </div>

              {/* Blow Button - Spacing fixed to prevent scrolling */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="z-30 mt-12"
              >
                <button
                  onClick={handleBlowCandle}
                  disabled={isBlowing}
                  className={`group relative flex items-center gap-3 rounded-full px-10 py-4 text-xl font-black text-white shadow-2xl transition-all duration-1000 md:px-12 md:py-5 ${
                    isBlowing
                      ? "cursor-not-allowed bg-zinc-700 opacity-50 shadow-none"
                      : "bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 hover:scale-105 hover:shadow-[0_0_60px_-10px_rgba(6,182,212,0.8)] active:scale-95"
                  }`}
                >
                  <span className="text-2xl">{isBlowing ? "💨" : "🌬️"}</span>
                  <span>{isBlowing ? "Blowing..." : "Blow Candle & See Surprise"}</span>
                </button>
              </motion.div>
            </motion.div>
          )}

          {accepted && candleBlown && (
            // =========================================================================
            // PHASE 3: THE ORIGINAL GRAND FINALE (Shows after 3 seconds)
            // =========================================================================
            <motion.div
              key="finale"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex w-full flex-col items-center justify-center py-10"
            >
              {/* Added a card style back for continuity, but centered */}
              <motion.div className="relative flex w-full max-w-3xl flex-col items-center justify-center overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-zinc-900/50 p-8 text-center shadow-2xl backdrop-blur-2xl md:p-12">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500" />

                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_60px_-10px_rgba(217,70,239,0.6)]">
                  <Rocket className="h-12 w-12 text-white" />
                </div>
                <h2 className="mb-4 text-5xl font-black tracking-tighter text-white md:text-6xl">
                  Let's build this together!
                </h2>
                <p className="max-w-xl text-2xl text-zinc-300">
                  Best birthday gift ever. Get ready, we have a lot of work to do! 🚀
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

