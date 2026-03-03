"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// @ts-ignore
import Confetti from "react-confetti";
import { GraduationCap, Sparkles, Rocket } from "lucide-react";

export default function FinalSurprisePage() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [accepted, setAccepted] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);

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

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        {/* --- Phase 1: The Ultimate Birthday Wish --- */}
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
            This year is going to be your best one yet. And I want to be a part of it.
          </p>
        </motion.div>

        {/* --- Phase 2: The EdTech Proposal --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-zinc-900/50 p-8 shadow-2xl backdrop-blur-2xl md:p-12"
        >
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500" />

          {!accepted ? (
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-zinc-700/50 bg-zinc-800/50 shadow-inner">
                <GraduationCap className="h-10 w-10 text-cyan-400" />
              </div>

              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                I have a massive question for you.
              </h2>

              <div className="mb-10 max-w-xl space-y-4 text-zinc-300 md:text-lg">
                <p>
                  As you know, my new learning platform is finally coming together. I've
                  been coding the architecture, setting up the exams, and getting ready
                  for the commercial launch.
                </p>
                <p>
                  But a platform is nothing without incredible teaching aptitude. I
                  couldn't imagine doing this without you.
                </p>
                <p className="font-semibold text-fuchsia-300">
                  Would you do me the absolute honor of being the very first instructor on
                  my website?
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
                      sendNotification(`Tried to click NO (Attempt ${noClickCount + 1})`);
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
          ) : (
            // --- Phase 3: The Celebration State ---
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-10"
            >
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_60px_-10px_rgba(217,70,239,0.6)]">
                <Rocket className="h-12 w-12 text-white" />
              </div>
              <h2 className="mb-4 text-4xl font-black text-white">
                Let's build this together!
              </h2>
              <p className="text-xl text-zinc-300">
                Best birthday gift ever. Get ready, we have a lot of work to do! 🚀
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
