"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const features = [
  {
    label: "Manage rosters",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    label: "Track fixtures",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    label: "Live scoring",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

export default function LoginMockup() {
  const [step, setStep] = useState<"phone" | "otp">("phone");

  return (
    <div className="relative min-h-[calc(100vh-56px)] overflow-hidden bg-background bg-radial-glow flex items-center justify-center px-4 py-16">
      <div className="absolute inset-0 bg-grid-lines pointer-events-none" />
      <Image
        src="/assets/logo.png"
        alt=""
        width={900}
        height={1000}
        className="pointer-events-none select-none absolute -left-40 -bottom-32 w-140 h-auto opacity-[0.06] -rotate-6 hidden sm:block"
      />
      <Image
        src="/assets/logo.png"
        alt=""
        width={900}
        height={1000}
        className="pointer-events-none select-none absolute -right-40 -top-32 w-140 h-auto opacity-[0.05] rotate-12 hidden sm:block"
      />

      <div className="relative w-full max-w-md animate-fade-up">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <p className="text-accent text-[11px] font-bold uppercase tracking-widest">
              2027 Columbus, Ohio Edition
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-2xl shadow-card p-8 sm:p-10">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-white ring-4 ring-accent/70 shadow-glow-accent overflow-hidden flex items-center justify-center mb-4">
              <Image src="/assets/logo.png" alt="NST-USA" width={64} height={64} className="object-cover scale-125" />
            </div>
            <h1 className="font-display text-3xl uppercase tracking-tight text-foreground">
              <span className="text-gradient-gold">NST-USA</span>
            </h1>
          </div>

          {step === "phone" ? (
            <>
              <div className="mb-6 text-center">
                <h2 className="text-xl font-semibold text-foreground">Welcome back</h2>
                <p className="text-muted-foreground text-sm mt-1">Sign in with your phone number</p>
              </div>

              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep("otp");
                }}
              >
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      +1
                    </span>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full h-11 pl-10 pr-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-accent transition-colors"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5">
                    We&apos;ll text a one-time PIN to verify it&apos;s you.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full h-11 bg-accent text-accent-foreground font-bold uppercase tracking-wide text-sm rounded-lg hover:brightness-110 shadow-glow-accent transition-all"
                >
                  Send PIN
                </button>
              </form>
            </>
          ) : (
            <>
              <button
                onClick={() => setStep("phone")}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>

              <div className="mb-6 text-center">
                <h2 className="text-xl font-semibold text-foreground">Enter your PIN</h2>
                <p className="text-muted-foreground text-sm mt-1">
                  We sent a 6-digit PIN to +1 (555) 123-4567
                </p>
              </div>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 text-center">
                    One-Time PIN
                  </label>
                  <div className="flex justify-center gap-3">
                    {[...Array(6)].map((_, i) => (
                      <input
                        key={i}
                        type="password"
                        inputMode="numeric"
                        maxLength={1}
                        className="w-11 h-12 text-center text-lg font-semibold rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-accent transition-colors"
                      />
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full h-11 bg-accent text-accent-foreground font-bold uppercase tracking-wide text-sm rounded-lg hover:brightness-110 shadow-glow-accent transition-all"
                >
                  Verify &amp; Sign In
                </button>

                <p className="text-center text-sm text-muted-foreground">
                  Didn&apos;t receive a PIN?{" "}
                  <button type="button" className="text-accent hover:underline">
                    Resend
                  </button>
                </p>
              </form>
            </>
          )}

          <p className="text-center text-sm text-muted-foreground mt-8 pt-6 border-t border-border">
            New to NST-USA?{" "}
            <Link href="/mockups/signup" className="text-accent hover:underline font-medium">
              Create an account
            </Link>
          </p>
        </div>

        {/* Feature strip */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 mt-8">
          {features.map((f) => (
            <div key={f.label} className="flex flex-col items-center gap-2 text-center">
              <div className="w-9 h-9 rounded-full bg-white/5 border border-border flex items-center justify-center text-muted-foreground">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={f.icon} />
                </svg>
              </div>
              <span className="text-[11px] text-muted-foreground uppercase tracking-wide">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
