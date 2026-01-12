"use client";

import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode =
      document.documentElement.classList.contains("dark") ||
      (typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    if (mounted) {
      const theme = localStorage.getItem("theme");
      if (
        theme === "dark" ||
        (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      }
    }
  }, [mounted]);

  return (
    <header className="fixed top-4 right-4 left-4 z-50 mx-auto max-w-7xl">
      <nav className="flex items-center justify-between rounded-2xl border border-zinc-200/50 bg-white/80 px-6 py-3 backdrop-blur-md transition-all duration-200 dark:border-zinc-800/50 dark:bg-zinc-900/80">
        <Link
          className="flex cursor-pointer items-center gap-2 transition-opacity duration-200 hover:opacity-80"
          href="/"
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

        <div className="flex items-center gap-6">
          <Link
            className="cursor-pointer font-medium text-sm text-zinc-700 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            href="/"
          >
            Home
          </Link>
          <Link
            className="cursor-pointer font-medium text-sm text-zinc-700 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            href="/blog"
          >
            Blog
          </Link>
          <button
            aria-label="Toggle dark mode"
            className="flex cursor-pointer items-center justify-center rounded-lg p-2 text-zinc-700 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            onClick={toggleTheme}
          >
            {mounted && isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
