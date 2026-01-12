import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="font-bold text-4xl">404</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Trang không tồn tại
      </p>
      <Link
        className="mt-8 rounded-full bg-foreground px-5 py-2 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        href="/"
      >
        Về trang chủ
      </Link>
    </div>
  );
}
