"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useState, useRef, useEffect } from "react";
import logo from "@/assets/images/logo.svg";
import { Phone, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/shared/language-switcher";

type Props = {
  children?: React.ReactNode;
};
const groups = [
  {
    title: "Tranquil Connections",
  },
  {
    title: "Inner Transformation",
  },
  {
    title: "Personal Empowerment",
  },
] as const;

const healingJourneys = [
  {
    label: groups[0].title,
    href: "/#" + groups[0].title.replace(/\s+/g, "-").toLowerCase(),
  },
  {
    label: groups[1].title,
    href: "/#" + groups[1].title.replace(/\s+/g, "-").toLowerCase(),
  },
  {
    label: groups[2].title,
    href: "/#" + groups[2].title.replace(/\s+/g, "-").toLowerCase(),
  },
];

export function Header({ children }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <header className="w-full sticky top-0 z-30 transition-all duration-300 bg-primary text-primary-content">
      <nav className="container mx-auto flex items-center justify-between py-4 h-20">
        {/* Logo at the start */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center" tabIndex={-1}>
            <Image src={logo} alt="Logo" width={64} height={64} priority />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 mx-auto translate-x-14 rtl:-translate-x-14">
          <li>
            <Link href="/" className="font-medium hover:underline transition">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="font-medium hover:underline transition"
            >
              How we work
            </Link>
          </li>
          <li className="relative">
            <div
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="font-medium flex items-center gap-1 hover:underline transition"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                aria-controls="healing-journeys-dropdown"
                tabIndex={0}
                type="button"
              >
                Healing Journeys
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="healing-journeys-dropdown"
                ref={dropdownRef}
                tabIndex={-1}
                className={`absolute left-0 mt-0 min-w-[180px] bg-white rounded shadow-lg z-20 transition-all ${
                  dropdownOpen
                    ? "opacity-100 pointer-events-auto translate-y-0"
                    : "opacity-0 pointer-events-none -translate-y-2"
                }`}
              >
                <ul className="py-2">
                  {healingJourneys.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-gray-900 hover:bg-accent-50 hover:text-accent-700 transition whitespace-nowrap"
                        tabIndex={dropdownOpen ? 0 : -1}
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        </ul>

        {/* Request a Call button at the end */}
        <div className="flex-shrink-0 flex items-center gap-2">
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href="https://calendly.com/saif-jo-2025/30min"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="btn btn-accent text-base font-semibold">
                <Phone fill="currentColor" size={16} className="me-1" />
                Request a Call
              </button>
            </a>
          </div>
          {/* Hamburger for mobile - now at the right */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
        onClick={() => setMobileMenuOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 w-4/5 max-w-xs h-full bg-primary text-primary-content z-50 shadow-lg transform transition-transform duration-300
        ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        flex flex-col`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-primary-content/10">
          <Link
            href="/"
            className="flex items-center"
            tabIndex={-1}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              priority
              className="scale-140"
            />
          </Link>
          <button
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col gap-2 px-4 py-6">
          <li>
            <Link
              href="/"
              className="block py-2 font-medium rounded hover:bg-accent/20 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2 font-medium rounded hover:bg-accent/20 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              How we work
            </Link>
          </li>
          <li>
            <button
              className="w-full flex items-center justify-between py-2 font-medium rounded hover:bg-accent/20 transition"
              aria-haspopup="true"
              aria-expanded={mobileDropdownOpen}
              aria-controls="mobile-healing-journeys-dropdown"
              onClick={() => setMobileDropdownOpen((open) => !open)}
              type="button"
            >
              <span>Healing Journeys</span>
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${
                  mobileDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id="mobile-healing-journeys-dropdown"
              className={`pl-4 border-l border-accent/30 mt-1 transition-all overflow-hidden ${
                mobileDropdownOpen
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <ul className="flex flex-col gap-1">
                {healingJourneys.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2 text-primary-content hover:bg-accent/10 rounded transition"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
        <div className="px-4 mt-auto mb-6 space-y-4">
          <div className="flex justify-center">
            <LanguageSwitcher />
          </div>
          <a
            href="https://calendly.com/saif-jo-2025/30min"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button
              className="btn btn-accent w-full text-base font-semibold flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone fill="currentColor" size={16} className="me-1" />
              Request a Call
            </button>
          </a>
        </div>
      </aside>
      {children}
    </header>
  );
}
