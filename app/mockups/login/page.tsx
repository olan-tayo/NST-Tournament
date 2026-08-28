"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginMockup() {
  const [step, setStep] = useState<"phone" | "otp">("phone");

  return (
    <div className="min-h-[calc(100vh-56px)] flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M30%200L60%2030L30%2060L0%2030z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%2F%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="relative z-10 flex flex-col justify-center px-16">
          <div className="mb-8">
            <div className="w-16 h-16 rounded-full bg-white ring-4 ring-accent/70 overflow-hidden flex items-center justify-center mb-6">
              <Image src="/assets/logo.png" alt="NST-USA" width={64} height={64} className="object-cover scale-125" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-3">
              NST-USA
            </h1>
            <p className="text-white/70 text-lg max-w-md">
              Manage your teams, track player performance, and coordinate matches all in one place.
            </p>
          </div>

          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-3 text-white/80">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span>Manage multiple teams and rosters</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span>Schedule and track match results</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span>Real-time scoring and statistics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-background">
        <div className="w-full max-w-sm">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-white ring-4 ring-accent/70 overflow-hidden flex items-center justify-center mx-auto mb-4">
              <Image src="/assets/logo.png" alt="NST-USA" width={56} height={56} className="object-cover scale-125" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">NST-USA</h1>
          </div>

          {step === "phone" ? (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground">Welcome back</h2>
                <p className="text-muted-foreground mt-1">Sign in with your phone number</p>
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
                  className="w-full h-11 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Send PIN
                </button>
              </form>
            </>
          ) : (
            <>
              <button
                onClick={() => setStep("phone")}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground">Enter your PIN</h2>
                <p className="text-muted-foreground mt-1">
                  We sent a 6-digit PIN to +1 (555) 123-4567
                </p>
              </div>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    One-Time PIN
                  </label>
                  <div className="flex gap-3">
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
                  className="w-full h-11 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Verify & Sign In
                </button>

                <p className="text-center text-sm text-muted-foreground">
                  Didn't receive a PIN?{" "}
                  <button type="button" className="text-accent hover:underline">
                    Resend
                  </button>
                </p>
              </form>
            </>
          )}

          <p className="text-center text-sm text-muted-foreground mt-8">
            New to NST-USA?{" "}
            <Link href="/mockups/signup" className="text-accent hover:underline font-medium">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
