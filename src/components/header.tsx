"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for prefers-reduced-motion
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Focus first link in mobile menu when opened
      const firstLink = mobileMenuRef.current?.querySelector("a");
      firstLink?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  const navigationLinks = [
    { href: "/docs/tutorial", label: "Tutorials" },
    { href: "/docs/project", label: "Dự án" },
    { href: "/docs/certificate", label: "Chứng chỉ" },
    { href: "/about-us", label: "Về chúng tớ" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      <header className="fixed top-4 right-4 left-4 z-50 mx-auto max-w-7xl max-sm:top-2 max-sm:right-2 max-sm:left-2">
        <nav className="flex items-center justify-between rounded-2xl border border-zinc-200/50 bg-white/80 px-4 py-2 backdrop-blur-md transition-all duration-200 md:px-6 dark:border-zinc-800/50 dark:bg-zinc-900/80">
          <div className="flex items-center gap-2">
            <Link
              className="flex cursor-pointer items-center gap-2 transition-opacity duration-200 hover:opacity-80"
              href="/"
              onClick={closeMobileMenu}
            >
              <Image
                alt="Zootopi Logo"
                className="h-8 w-8"
                height={32}
                src="/logo.svg"
                width={32}
              />
              <span className="hidden font-semibold text-zinc-900 sm:inline-block dark:text-zinc-100">
                Zootopi
              </span>
            </Link>
            {/* Desktop Navigation Links */}
            <div className="hidden items-center gap-2 md:flex">
              {navigationLinks.slice(0, 3).map((link) => (
                <Link
                  className="cursor-pointer font-medium text-sm text-zinc-700 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            {/* Desktop Right Navigation Links */}
            <div className="hidden items-center gap-6 md:flex">
              {navigationLinks.slice(3).map((link) => (
                <Link
                  className="cursor-pointer font-medium text-sm text-zinc-700 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
              className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-lg p-2 text-zinc-700 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-900 md:hidden dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              onClick={toggleMobileMenu}
              ref={menuButtonRef}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        aria-label="Mobile navigation menu"
        aria-modal="true"
        className={`fixed inset-0 z-40 md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        id="mobile-menu"
        ref={mobileMenuRef}
        role="dialog"
      >
        {/* Backdrop */}
        <button
          aria-label="Close mobile menu"
          className={`absolute inset-0 bg-black/50 ${
            prefersReducedMotion ? "" : "transition-opacity duration-200"
          } ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={closeMobileMenu}
          type="button"
        />

        {/* Mobile Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-md dark:bg-zinc-900/95 ${
            prefersReducedMotion
              ? ""
              : "transition-transform duration-200 ease-in-out"
          } ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex h-full flex-col">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between border-zinc-200/50 border-b px-6 py-4 dark:border-zinc-800/50">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                Menu
              </span>
              <button
                aria-label="Close mobile menu"
                className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-lg p-2 text-zinc-700 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                onClick={closeMobileMenu}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <nav className="flex-1 overflow-y-auto px-4 py-6">
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="flex min-h-[44px] cursor-pointer items-center rounded-lg px-4 font-medium text-sm text-zinc-700 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                      href={link.href}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
