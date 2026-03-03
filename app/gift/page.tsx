"use client";

import { motion } from "framer-motion";
import { Heart, ArrowRight, PlayCircle, Music } from "lucide-react";

export default function StorytellingGiftPage() {
  // A reusable animation setting so we don't have to type it out every time
  const scrollReveal: any = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, easeOut: [0.16, 1, 0.3, 1] },
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-100 selection:bg-fuchsia-500/30">
      {/* --- Ambient Background Glows --- */}
      <div className="pointer-events-none fixed top-0 left-0 h-full w-full overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-fuchsia-600/10 blur-[120px]" />
      </div>

      {/* --- Page Intro --- */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 pt-32 pb-24 text-center md:pt-48 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Heart className="mx-auto mb-6 h-10 w-10 animate-pulse text-fuchsia-500" />
          <h1 className="mb-6 bg-gradient-to-r from-zinc-100 to-zinc-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
            Chapters of Us
          </h1>
          <p className="text-lg text-zinc-400 md:text-xl">
            Take a walk down memory lane. Scroll slowly.
          </p>
        </motion.div>
      </div>

      {/* --- The Story Timeline --- */}
      <div className="relative z-10 mx-auto max-w-4xl space-y-32 px-6 pb-32 md:space-y-48">
        {/* CHAPTER 1: First Video */}
        <motion.div {...scrollReveal} className="flex flex-col items-center">
          <div className="w-full overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/50 p-2 shadow-2xl backdrop-blur-sm">
            {/* Replace src with your actual Google Drive Preview Link */}
            <iframe
              src="https://drive.google.com/file/d/1Yke8RpHfgBDGtmvrIRKszGf8o6nsgFDu/preview"
              className="aspect-video w-full rounded-[1.5rem] border-none bg-zinc-900 object-cover"
              allow="autoplay; fullscreen"
            />
          </div>
          <div className="mt-8 max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-zinc-100">The Beginning</h2>
            <p className="leading-relaxed text-zinc-400 md:text-lg">
              "Remember when we first took this video? We had no
              idea how close we were going to become. It feels like a lifetime ago, but
              also like it was just yesterday."
            </p>
          </div>
        </motion.div>

        {/* CHAPTER 2: An Image */}
        <motion.div {...scrollReveal} className="flex flex-col items-center">
          <div className="w-full max-w-2xl rotate-1 transform overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/50 p-2 shadow-2xl backdrop-blur-sm">
            <img
              src="/pic1.jpg"
              alt="Memory 1"
              className="aspect-square w-full rounded-[1.5rem] bg-zinc-900 object-cover md:aspect-video"
            />
          </div>
          <div className="mt-8 max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-zinc-100">
              Unforgettable Moments
            </h2>
            <p className="leading-relaxed text-zinc-400 md:text-lg">
              "This picture perfectly captures our chaos. I still laugh every time I look
              at it. You've always known exactly how to make me smile."
            </p>
          </div>
        </motion.div>

        {/* CHAPTER 3: Second Video */}
        <motion.div {...scrollReveal} className="flex flex-col items-center">
          <div className="w-full overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/50 p-2 shadow-2xl backdrop-blur-sm">
            {/* Replace src with your actual Google Drive Preview Link */}
            <iframe
              src="https://drive.google.com/file/d/10nVWhvjMj7jLsCUEvrMR31kAYiDwhmFF/preview"
              className="aspect-video w-full rounded-[1.5rem] border-none bg-zinc-900 object-cover"
              allow="autoplay; fullscreen"
            />
          </div>
          <div className="mt-8 max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-zinc-100">
              Through Thick and Thin
            </h2>
            <p className="leading-relaxed text-zinc-400 md:text-lg">
              "We've been through so much together. No matter what life threw at us,
              having you by my side made everything easier. You are my rock."
            </p>
          </div>
        </motion.div>

        {/* CHAPTER 4: Second Image */}
        <motion.div {...scrollReveal} className="flex flex-col items-center">
          <div className="w-full max-w-2xl -rotate-1 transform overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/50 p-2 shadow-2xl backdrop-blur-sm">
            <img
              src="/pic2.jpg"
              alt="Memory 2"
              className="aspect-square w-full rounded-[1.5rem] bg-zinc-900 object-cover md:aspect-[4/3]"
            />
          </div>
          <div className="mt-8 max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-zinc-100">
              Adventures Everywhere
            </h2>
            <p className="leading-relaxed text-zinc-400 md:text-lg">
              "Every trip, every late-night drive, every random Tuesday hanging out.
              Everything is just better when we are together."
            </p>
          </div>
        </motion.div>

        {/* CHAPTER 5: Third Video */}
        <motion.div {...scrollReveal} className="flex flex-col items-center">
          <div className="w-full overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/50 p-2 shadow-2xl backdrop-blur-sm">
            {/* Replace src with your actual Google Drive Preview Link */}
            <iframe
              src="https://drive.google.com/file/d/1Sf2cjTpU56IdCGwqvF1jQL8uHdmemiVu/preview"
              className="aspect-video w-full rounded-[1.5rem] border-none bg-zinc-900 object-cover"
              allow="autoplay; fullscreen"
            />
          </div>
          <div className="mt-8 max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-zinc-100">To Many More Years</h2>
            <p className="leading-relaxed text-zinc-400 md:text-lg">
              "I am so incredibly proud of the person you are becoming. Happy birthday to
              the best friend anyone could ever ask for. Here is to a hundred more
              memories."
            </p>
          </div>
        </motion.div>

        {/* --- Music Player & Grand Finale --- */}
        <motion.div {...scrollReveal} className="border-t border-zinc-800/50 pt-16">
          <div className="flex flex-col items-center rounded-[2rem] border border-zinc-800 bg-gradient-to-b from-zinc-900/50 to-zinc-950/50 p-8 text-center shadow-2xl backdrop-blur-xl md:p-12">
            <Music className="mb-6 h-10 w-10 text-violet-400" />
            <h3 className="mb-4 text-3xl font-bold text-white">Our Song</h3>
            <p className="mb-8 text-zinc-400">
              Play this while you click the final button.
            </p>

            {/* Custom styled audio player wrapping a standard HTML5 audio */}
            <div className="mb-12 w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-2 shadow-inner">
              <audio controls className="custom-audio h-12 w-full rounded-xl">
                <source src="/song.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>

            {/* Navigation to the Final Page */}
            <h3 className="mb-6 text-xl font-medium text-zinc-300">
              But wait... I have one more thing for you.
            </h3>

            <button
              onClick={() => (window.location.href = "/final")}
              className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-zinc-900 transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] active:scale-95"
            >
              <span>See The Final Surprise</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

