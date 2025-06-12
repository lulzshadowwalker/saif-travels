"use client";

import { useState } from "react";

const COLORS = [
  {
    name: "Primary",
    key: "primary",
    text: "text-primary",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Secondary",
    key: "secondary",
    text: "text-secondary",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Accent",
    key: "accent",
    text: "text-accent",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Accent Alt",
    key: "accent-alt",
    text: "text-accent-alt",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Success",
    key: "success",
    text: "text-success",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Danger",
    key: "danger",
    text: "text-danger",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Warning",
    key: "warning",
    text: "text-warning",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Info",
    key: "info",
    text: "text-info",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
];

// Explicit mapping of all background classes - this ensures Tailwind doesn't purge them
const BG_CLASSES: Record<string, Record<number, string>> = {
  primary: {
    50: "bg-primary-50",
    100: "bg-primary-100",
    200: "bg-primary-200",
    300: "bg-primary-300",
    400: "bg-primary-400",
    500: "bg-primary-500",
    600: "bg-primary-600",
    700: "bg-primary-700",
    800: "bg-primary-800",
    900: "bg-primary-900",
    950: "bg-primary-950",
  },
  secondary: {
    50: "bg-secondary-50",
    100: "bg-secondary-100",
    200: "bg-secondary-200",
    300: "bg-secondary-300",
    400: "bg-secondary-400",
    500: "bg-secondary-500",
    600: "bg-secondary-600",
    700: "bg-secondary-700",
    800: "bg-secondary-800",
    900: "bg-secondary-900",
    950: "bg-secondary-950",
  },
  accent: {
    50: "bg-accent-50",
    100: "bg-accent-100",
    200: "bg-accent-200",
    300: "bg-accent-300",
    400: "bg-accent-400",
    500: "bg-accent-500",
    600: "bg-accent-600",
    700: "bg-accent-700",
    800: "bg-accent-800",
    900: "bg-accent-900",
    950: "bg-accent-950",
  },
  "accent-alt": {
    50: "bg-accent-alt-50",
    100: "bg-accent-alt-100",
    200: "bg-accent-alt-200",
    300: "bg-accent-alt-300",
    400: "bg-accent-alt-400",
    500: "bg-accent-alt-500",
    600: "bg-accent-alt-600",
    700: "bg-accent-alt-700",
    800: "bg-accent-alt-800",
    900: "bg-accent-alt-900",
    950: "bg-accent-alt-950",
  },
  success: {
    50: "bg-success-50",
    100: "bg-success-100",
    200: "bg-success-200",
    300: "bg-success-300",
    400: "bg-success-400",
    500: "bg-success-500",
    600: "bg-success-600",
    700: "bg-success-700",
    800: "bg-success-800",
    900: "bg-success-900",
    950: "bg-success-950",
  },
  danger: {
    50: "bg-danger-50",
    100: "bg-danger-100",
    200: "bg-danger-200",
    300: "bg-danger-300",
    400: "bg-danger-400",
    500: "bg-danger-500",
    600: "bg-danger-600",
    700: "bg-danger-700",
    800: "bg-danger-800",
    900: "bg-danger-900",
    950: "bg-danger-950",
  },
  warning: {
    50: "bg-warning-50",
    100: "bg-warning-100",
    200: "bg-warning-200",
    300: "bg-warning-300",
    400: "bg-warning-400",
    500: "bg-warning-500",
    600: "bg-warning-600",
    700: "bg-warning-700",
    800: "bg-warning-800",
    900: "bg-warning-900",
    950: "bg-warning-950",
  },
  info: {
    50: "bg-info-50",
    100: "bg-info-100",
    200: "bg-info-200",
    300: "bg-info-300",
    400: "bg-info-400",
    500: "bg-info-500",
    600: "bg-info-600",
    700: "bg-info-700",
    800: "bg-info-800",
    900: "bg-info-900",
    950: "bg-info-950",
  },
};

function getTextColor(bgKey: string, shade: number) {
  // Use dark text for light backgrounds, white for dark backgrounds
  if (
    (bgKey === "primary" || bgKey === "secondary" || shade < 500) &&
    !(bgKey === "accent" || bgKey === "danger" || bgKey === "accent-alt")
  ) {
    return "text-neutral-900";
  }
  return "text-white";
}

function getBackgroundClass(colorKey: string, shade: number): string {
  return BG_CLASSES[colorKey]?.[shade] || "bg-gray-500";
}

export default function PlaygroundPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <main className="min-h-screen px-4 py-8 bg-background text-foreground font-sans">
      {/* Animated Background Section */}
      <div className="section-animated p-8 rounded-2xl mb-8">
        <h1 className="text-4xl font-bold mb-2 float">
          🎨 Design System Playground
        </h1>
        <p className="text-lg opacity-80">
          Explore all the colors, buttons, and animations in action
        </p>
      </div>

      {/* Color Palette Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="w-6 h-6 bg-gradient-to-r from-accent-400 to-accent-alt-400 rounded"></span>
          Color Palette
        </h2>
        <div className="space-y-12">
          {COLORS.map((color) => (
            <div key={color.key} className="card">
              <div className="flex items-center mb-4">
                <span className="text-xl font-semibold">{color.name}</span>
                <span className="ml-2 text-sm text-neutral-500 font-mono">
                  ({color.key})
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-11 gap-3">
                {color.shades.map((shade) => (
                  <div
                    key={shade}
                    className={`rounded-lg flex flex-col items-center justify-center h-24 border border-neutral-200 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${getBackgroundClass(color.key, shade)}`}
                  >
                    <span
                      className={`text-xs font-mono mb-1 font-semibold ${getTextColor(color.key, shade)}`}
                    >
                      {shade}
                    </span>
                    <span
                      className={`text-xs ${getTextColor(color.key, shade)} opacity-80`}
                    >
                      {color.key}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Button System Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="w-6 h-6 bg-gradient-to-r from-info-400 to-success-400 rounded"></span>
          Button System
        </h2>

        {/* Solid Buttons */}
        <div className="card mb-8">
          <h3 className="text-lg font-semibold mb-4">Solid Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <button className="btn">Default</button>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-accent">Accent</button>
            <button className="btn btn-accent-alt">Accent Alt</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-danger">Danger</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-info">Info</button>
          </div>
        </div>

        {/* Outline Buttons */}
        <div className="card mb-8">
          <h3 className="text-lg font-semibold mb-4">Outline Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-outline">Default</button>
            <button className="btn btn-primary btn-outline">Primary</button>
            <button className="btn btn-accent btn-outline">Accent</button>
            <button className="btn btn-accent-alt btn-outline">
              Accent Alt
            </button>
            <button className="btn btn-success btn-outline">Success</button>
            <button className="btn btn-danger btn-outline">Danger</button>
            <button className="btn btn-warning btn-outline">Warning</button>
            <button className="btn btn-info btn-outline">Info</button>
          </div>
        </div>

        {/* Ghost Buttons */}
        <div className="card mb-8">
          <h3 className="text-lg font-semibold mb-4">Ghost Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-ghost">Default</button>
            <button className="btn btn-primary btn-ghost">Primary</button>
            <button className="btn btn-accent btn-ghost">Accent</button>
            <button className="btn btn-accent-alt btn-ghost">Accent Alt</button>
            <button className="btn btn-success btn-ghost">Success</button>
            <button className="btn btn-danger btn-ghost">Danger</button>
            <button className="btn btn-warning btn-ghost">Warning</button>
            <button className="btn btn-info btn-ghost">Info</button>
          </div>
        </div>

        {/* Button Sizes */}
        <div className="card mb-8">
          <h3 className="text-lg font-semibold mb-4">Button Sizes</h3>
          <div className="flex flex-wrap items-center gap-4">
            <button className="btn btn-accent btn-sm">Small</button>
            <button className="btn btn-accent">Default</button>
            <button className="btn btn-accent btn-lg">Large</button>
            <button className="btn btn-accent btn-xl">Extra Large</button>
          </div>
        </div>

        {/* Button States */}
        <div className="card mb-8">
          <h3 className="text-lg font-semibold mb-4">Button States</h3>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-accent">Normal</button>
            <button className="btn btn-accent" disabled>
              Disabled
            </button>
            <button
              className={`btn btn-info ${isLoading ? "btn-loading" : ""}`}
              onClick={handleLoadingDemo}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Click for Loading Demo"}
            </button>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="card mb-8 pulse-glow">
          <h3 className="text-lg font-semibold mb-4">✨ Interactive Demo</h3>
          <p className="text-sm text-neutral-600 mb-4">
            Hover over these buttons to see the shimmer effect and lift
            animation
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-accent btn-lg">Hover me!</button>
            <button className="btn btn-success btn-outline btn-lg">
              Try this one
            </button>
            <button className="btn btn-info btn-ghost btn-lg">And this!</button>
          </div>
        </div>
      </section>

      {/* Animation Showcase */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="w-6 h-6 bg-gradient-to-r from-warning-400 to-danger-400 rounded animate-spin"></span>
          Animation Showcase
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Floating Card */}
          <div className="card float">
            <h3 className="text-lg font-semibold mb-3">🎈 Floating Card</h3>
            <p className="text-neutral-600">
              This card has a gentle floating animation that makes it feel alive
              and draws attention.
            </p>
          </div>

          {/* Pulse Glow Card */}
          <div className="card pulse-glow">
            <h3 className="text-lg font-semibold mb-3">✨ Pulse Glow</h3>
            <p className="text-neutral-600">
              Perfect for call-to-action elements that need to stand out with a
              subtle glow effect.
            </p>
          </div>

          {/* Hover Effects Card */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-3">🎯 Hover Effects</h3>
            <p className="text-neutral-600 mb-4">
              All cards lift slightly on hover with enhanced shadows for better
              interactivity.
            </p>
            <button className="btn btn-accent btn-sm">
              Try hovering this card
            </button>
          </div>

          {/* Animated Background */}
          <div className="section-animated p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-3">
              🌈 Animated Background
            </h3>
            <p className="text-neutral-700">
              Subtle gradient animation that shifts colors for dynamic sections
              without being distracting.
            </p>
          </div>
        </div>
      </section>

      {/* Typography & Layout */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="w-6 h-6 bg-gradient-to-r from-accent-alt-400 to-secondary-400 rounded"></span>
          Typography & Layout
        </h2>

        <div className="card">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Heading 1</h1>
              <h2 className="text-3xl font-bold mb-2">Heading 2</h2>
              <h3 className="text-2xl font-bold mb-2">Heading 3</h3>
              <h4 className="text-xl font-bold mb-2">Heading 4</h4>
              <h5 className="text-lg font-bold mb-2">Heading 5</h5>
              <h6 className="text-base font-bold mb-2">Heading 6</h6>
            </div>

            <div>
              <p className="text-lg mb-4">
                Large paragraph text that's perfect for introductions and
                important content that needs to stand out from the rest.
              </p>
              <p className="text-base mb-4">
                Regular paragraph text for general content. This is the standard
                text size that should be used for most body content throughout
                the application.
              </p>
              <p className="text-sm text-neutral-600">
                Small text for captions, footnotes, and secondary information
                that doesn't need as much emphasis.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                Tag
              </span>
              <span className="px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-medium">
                Success
              </span>
              <span className="px-3 py-1 bg-warning-100 text-warning-700 rounded-full text-sm font-medium">
                Warning
              </span>
              <span className="px-3 py-1 bg-info-100 text-info-700 rounded-full text-sm font-medium">
                Info
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="w-6 h-6 bg-gradient-to-r from-success-400 to-info-400 rounded"></span>
          Usage Examples
        </h2>

        <div className="grid gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">
              CSS Classes Reference
            </h3>
            <div className="space-y-3 font-mono text-sm">
              <div>
                <code className="bg-secondary-100 px-2 py-1 rounded">.btn</code>{" "}
                - Default button
              </div>
              <div>
                <code className="bg-secondary-100 px-2 py-1 rounded">
                  .btn-{"{color}"}
                </code>{" "}
                - Color variants (accent, success, danger, etc.)
              </div>
              <div>
                <code className="bg-secondary-100 px-2 py-1 rounded">
                  .btn-outline
                </code>{" "}
                - Outline style
              </div>
              <div>
                <code className="bg-secondary-100 px-2 py-1 rounded">
                  .btn-ghost
                </code>{" "}
                - Ghost style
              </div>
              <div>
                <code className="bg-secondary-100 px-2 py-1 rounded">
                  .btn-{"{size}"}
                </code>{" "}
                - Size variants (sm, lg, xl)
              </div>
              <div>
                <code className="bg-secondary-100 px-2 py-1 rounded">
                  .card
                </code>{" "}
                - Card component with hover effects
              </div>
              <div>
                <code className="bg-secondary-100 px-2 py-1 rounded">
                  .float
                </code>{" "}
                - Floating animation
              </div>
              <div>
                <code className="bg-secondary-100 px-2 py-1 rounded">
                  .pulse-glow
                </code>{" "}
                - Pulse glow effect
              </div>
              <div>
                <code className="bg-secondary-100 px-2 py-1 rounded">
                  .section-animated
                </code>{" "}
                - Animated background
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
