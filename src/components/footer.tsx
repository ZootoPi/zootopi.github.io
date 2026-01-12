import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Tutorials", href: "/docs/tutorial" },
    { name: "Projects", href: "/docs/project" },
    { name: "Certificates", href: "/docs/certificate" },
  ];

  return (
    <footer className="border-zinc-200 border-t bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Main Content - Multi-column Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Logo + Brand + Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                alt="Zootopi Logo"
                className="h-10 w-10"
                height={40}
                src="/logo.svg"
                width={40}
              />
              <span className="font-semibold text-xl text-zinc-900 dark:text-zinc-100">
                Zootopi
              </span>
            </div>
            <p className="font-medium text-base text-zinc-600 dark:text-zinc-400">
              Share what we love!
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              Discover stories, insights, and knowledge from our team. Join us
              on a journey of learning and sharing.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <Link
                  className="cursor-pointer font-medium text-sm text-zinc-600 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  href={link.href}
                  key={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Additional Info / Team SVG */}
          <div className="flex flex-col items-center justify-start gap-4 md:items-start">
            <div className="w-full">
              <Image
                alt="Zootopi Team"
                className="h-auto w-auto opacity-60 dark:opacity-40"
                height={100}
                src="/zootopi_team.svg"
                width={200}
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-12 border-zinc-200 border-t pt-8 dark:border-zinc-800">
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-500">
            © {currentYear} Zootopi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
