"use client";

import { useState } from "react";
import { Mail, Key, Sparkles, ArrowRight, Gift } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PremiumBirthdayLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-zinc-950 p-4 font-sans text-zinc-100">
      {/* --- Ambient Background Glow --- */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-violet-600/20 via-fuchsia-600/10 to-transparent blur-[120px]" />

      {/* --- Main Glass Card --- */}
      <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/50 p-8 shadow-2xl backdrop-blur-2xl sm:p-10">
        {/* Decorative Top Accent Line */}
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500" />

        {/* Header Section */}
        <div className="mt-2 mb-10 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-700/50 bg-zinc-800/50 shadow-inner">
            <Gift className="h-8 w-8 text-fuchsia-400" strokeWidth={1.5} />
          </div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-white">
            A Special Delivery
          </h1>
          <p className="text-sm text-zinc-400">
            Enter your credentials to unwrap your surprise.
          </p>
        </div>

        {/* Form */}
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault(); // 1. Stops the page from refreshing
            router.push("/landing"); // 2. Sends them to your new Bento Box page!
          }}
        >
          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="px-1 text-xs font-medium text-zinc-400">
              Email Address
            </label>
            <div className="relative flex items-center rounded-xl border border-zinc-800 bg-zinc-950/50 transition-all focus-within:border-fuchsia-500/50 focus-within:ring-1 focus-within:ring-fuchsia-500/50">
              <Mail className="absolute left-4 h-5 w-5 text-zinc-500" strokeWidth={1.5} />
              <input
                type="email"
                placeholder="hello@example.com"
                className="w-full border-none bg-transparent py-3.5 pr-4 pl-12 text-sm text-zinc-100 placeholder-zinc-600 outline-none"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label className="px-1 text-xs font-medium text-zinc-400">
              Secret Passcode
            </label>
            <div className="relative flex items-center rounded-xl border border-zinc-800 bg-zinc-950/50 transition-all focus-within:border-fuchsia-500/50 focus-within:ring-1 focus-within:ring-fuchsia-500/50">
              <Key className="absolute left-4 h-5 w-5 text-zinc-500" strokeWidth={1.5} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full border-none bg-transparent py-3.5 pr-16 pl-12 text-sm text-zinc-100 placeholder-zinc-600 outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-zinc-500 transition-colors hover:text-zinc-300 focus:outline-none"
              >
                <div className="text-[10px] font-semibold tracking-wider uppercase">
                  {showPassword ? "Hide" : "Show"}
                </div>
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-100 py-4 text-sm font-semibold text-zinc-900 transition-all hover:scale-[1.02] hover:bg-white active:scale-[0.98]"
          >
            <span>Reveal Surprise</span>
            <ArrowRight
              className={`h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
            />
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-center gap-1 text-center text-xs text-zinc-500">
          <Sparkles className="h-3 w-3 text-fuchsia-500/70" />
          <span>Crafted exclusively for best friend</span>
          <Sparkles className="h-3 w-3 text-fuchsia-500/70" />
        </div>
      </div>
    </div>
  );
}
