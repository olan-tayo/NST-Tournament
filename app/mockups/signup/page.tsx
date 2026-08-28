"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Role = "player" | "coach" | "delegate" | "admin";

const roles: { id: Role; label: string; description: string }[] = [
  { id: "player", label: "Player", description: "Join a club roster" },
  { id: "coach", label: "Coach", description: "Manage a team" },
  { id: "delegate", label: "Delegate", description: "Score live matches" },
  { id: "admin", label: "Admin", description: "Run the league" },
];

const roleNextSteps: Record<Role, { title: string; body: string; cta: string; href: string }> = {
  player: {
    title: "You're verified!",
    body: "Next, complete your player registration — position, jersey number, and club details.",
    cta: "Continue to Registration",
    href: "/mockups/register",
  },
  coach: {
    title: "Request received",
    body: "Coach accounts are approved by the league admin. You'll get a text once your club is confirmed.",
    cta: "Preview Coach Dashboard",
    href: "/mockups/coach",
  },
  delegate: {
    title: "Request received",
    body: "Match delegate accounts are approved by the league admin. You'll get a text once you're assigned to a match.",
    cta: "Preview Delegate View",
    href: "/mockups/delegate",
  },
  admin: {
    title: "Request received",
    body: "Admin accounts are provisioned directly by the league. We'll reach out to confirm your access.",
    cta: "Preview Admin Dashboard",
    href: "/mockups/admin",
  },
};

export default function SignupMockup() {
  const [step, setStep] = useState<"details" | "otp" | "done">("details");
  const [role, setRole] = useState<Role>("player");

  const next = roleNextSteps[role];

  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center px-6 py-12 bg-background">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-white ring-4 ring-accent/70 overflow-hidden flex items-center justify-center mx-auto mb-4">
            <Image src="/assets/logo.png" alt="NST-USA" width={64} height={64} className="object-cover scale-125" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">NST-USA</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {step === "details" && "Create Account"}
            {step === "otp" && "Verify Your Phone"}
            {step === "done" && "Almost There"}
          </p>
        </div>

        {step === "details" && (
          <>
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
                    className="w-full h-11 pl-10 pr-4 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full h-11 px-4 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-accent transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
              >
                Send PIN
              </button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6 mb-3">
              New to NST-USA? Sign up as
            </p>
            <div className="grid grid-cols-2 gap-2">
              {roles.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRole(r.id)}
                  className={`text-left px-3 py-2.5 rounded-lg border text-sm font-semibold uppercase tracking-wide transition-colors ${
                    role === r.id
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-card text-foreground border-border hover:border-accent/50"
                  }`}
                >
                  {r.label}
                  <span
                    className={`block text-[10px] font-normal normal-case mt-0.5 ${
                      role === r.id ? "text-accent-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {r.description}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}

        {step === "otp" && (
          <>
            <button
              onClick={() => setStep("details")}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>

            <p className="text-sm text-muted-foreground mb-6">
              Enter the 6-digit PIN we texted you to finish signing up as a{" "}
              <span className="text-foreground font-medium">{roles.find((r) => r.id === role)?.label}</span>.
            </p>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setStep("done");
              }}
            >
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
                      className="w-11 h-12 text-center text-lg font-semibold rounded-lg border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-accent transition-colors"
                    />
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
              >
                Verify & Create Account
              </button>
            </form>
          </>
        )}

        {step === "done" && (
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-success/15 text-success flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-foreground mb-1">{next.title}</h2>
            <p className="text-sm text-muted-foreground mb-6">{next.body}</p>
            <Link
              href={next.href}
              className="inline-flex items-center justify-center w-full h-11 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              {next.cta}
            </Link>
          </div>
        )}

        <p className="text-center text-sm text-muted-foreground mt-8">
          Already have an account?{" "}
          <Link href="/mockups/login" className="text-accent hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
