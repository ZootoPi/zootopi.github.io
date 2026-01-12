import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-zinc-200 border-t bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
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
          <p className="font-medium text-lg text-zinc-600 dark:text-zinc-400">
            Share what we love!
          </p>
          <div className="mt-4">
            <Image
              alt="Zootopi Team"
              className="h-auto w-auto opacity-60 dark:opacity-40"
              height={100}
              src="/zootopi_team.svg"
              width={200}
            />
          </div>
          <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} Zootopi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
