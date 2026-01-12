import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  slug: string[];
  title: string;
  description?: string;
  date?: string;
}

export default function PostCard({
  slug,
  title,
  description,
  date,
}: PostCardProps) {
  const postUrl = `/${slug.join("/")}`;

  return (
    <Link
      className="group relative block cursor-pointer overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
      href={postUrl}
    >
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
        <Image
          alt={title}
          className="object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-30"
          fill
          src="/cover.svg"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 font-semibold text-xl text-zinc-900 transition-colors duration-200 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">
          {title}
        </h3>
        {description && (
          <p className="mb-4 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between">
          {date && (
            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
          )}
          <div className="flex items-center gap-2 font-medium text-sm text-zinc-700 transition-colors duration-200 group-hover:text-zinc-900 dark:text-zinc-300 dark:group-hover:text-zinc-100">
            <span>Read more</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
