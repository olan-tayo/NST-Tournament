"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const positions = [
  { group: "Goalkeeper", options: [{ code: "GK", name: "Goalkeeper" }] },
  {
    group: "Defenders",
    options: [
      { code: "CB", name: "Center Back" },
      { code: "LB", name: "Left Back" },
      { code: "RB", name: "Right Back" },
    ],
  },
  {
    group: "Midfielders",
    options: [
      { code: "CDM", name: "Defensive Midfielder" },
      { code: "CM", name: "Central Midfielder" },
      { code: "CAM", name: "Attacking Midfielder" },
      { code: "LM", name: "Left Midfielder" },
      { code: "RM", name: "Right Midfielder" },
    ],
  },
  {
    group: "Wingers",
    options: [
      { code: "LW", name: "Left Winger" },
      { code: "RW", name: "Right Winger" },
    ],
  },
  {
    group: "Forwards",
    options: [
      { code: "ST", name: "Striker" },
      { code: "CF", name: "Center Forward" },
    ],
  },
];

const countries = [
  "Cameroon",
  "Nigeria",
  "Ghana",
  "Ivory Coast",
  "Jamaica",
  "Mexico",
  "Puerto Rico",
  "USA",
];

export default function PlayerRegistrationMockup() {
  const [step, setStep] = useState(1);
  const [primaryPosition, setPrimaryPosition] = useState("");

  return (
    <div className="min-h-[calc(100vh-56px)] bg-muted py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full bg-white ring-4 ring-accent/70 overflow-hidden flex items-center justify-center mx-auto mb-4">
            <Image src="/assets/logo.png" alt="NST-USA" width={56} height={56} className="object-cover scale-125" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Join Houston Sports Club</h1>
          <p className="text-muted-foreground mt-1">Complete your player registration</p>
        </div>

        {/* Progress Steps */}
        {step <= 3 && (
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  s === step
                    ? "bg-accent text-accent-foreground"
                    : s < step
                    ? "bg-success text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {s < step ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  s
                )}
              </div>
              {s < 3 && (
                <div className={`w-12 h-0.5 mx-1 ${s < step ? "bg-success" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>
        )}

        {/* Form Card */}
        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
          {/* Step 1: Personal Info */}
          {step === 1 && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-1">Personal Information</h2>
              <p className="text-sm text-muted-foreground mb-6">Tell us about yourself</p>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">+1</span>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full h-11 pl-12 pr-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Date of Birth</label>
                  <input
                    type="date"
                    className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Profile Picture</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent/50 transition-colors cursor-pointer">
                    <svg className="w-8 h-8 text-muted-foreground mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-muted-foreground">
                      <span className="text-accent font-medium">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Player Info */}
          {step === 2 && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-1">Player Information</h2>
              <p className="text-sm text-muted-foreground mb-6">Your position and jersey details</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Team</label>
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-muted/50">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-white font-bold">
                      H
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Houston Sports Club</p>
                      <p className="text-xs text-muted-foreground">Pre-assigned from invitation</p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Jersey Number</label>
                  <input
                    type="number"
                    min="1"
                    max="99"
                    placeholder="10"
                    className="w-32 h-11 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Primary Position</label>
                  <div className="space-y-3">
                    {positions.map((group) => (
                      <div key={group.group}>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{group.group}</p>
                        <div className="flex flex-wrap gap-2">
                          {group.options.map((pos) => (
                            <button
                              key={pos.code}
                              onClick={() => setPrimaryPosition(pos.code)}
                              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                primaryPosition === pos.code
                                  ? "bg-accent text-accent-foreground"
                                  : "bg-muted text-foreground hover:bg-muted/70"
                              }`}
                            >
                              {pos.code} - {pos.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Secondary Position (Optional)</label>
                  <select className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-accent transition-colors">
                    <option value="">Select a position</option>
                    {positions.flatMap((g) =>
                      g.options.map((p) => (
                        <option key={p.code} value={p.code}>
                          {p.code} - {p.name}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-2.5 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Country & Terms */}
          {step === 3 && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-1">Final Details</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Your phone number is already verified — just a couple more details.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Country</label>
                  <select className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-accent transition-colors">
                    <option value="">Select your country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 mt-0.5 rounded border-input accent-accent" />
                    <span className="text-sm text-muted-foreground">
                      I agree to the{" "}
                      <a href="#" className="text-accent hover:underline">Terms of Service</a>
                      {" "}and{" "}
                      <a href="#" className="text-accent hover:underline">Privacy Policy</a>
                    </span>
                  </label>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="px-6 py-2.5 bg-success text-white font-medium rounded-lg hover:bg-success/90 transition-colors"
                >
                  Complete Registration
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-success/15 text-success flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-foreground mb-1">You&apos;re on the roster!</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Your registration for Houston Sports Club is complete. Your coach will confirm your
                jersey number and position before the group stage.
              </p>
              <Link
                href="/mockups/player"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
              >
                Go to My Dashboard
              </Link>
            </div>
          )}
        </div>

        {/* Help Text */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Having trouble? Contact your team coach for assistance.
        </p>
      </div>
    </div>
  );
}
