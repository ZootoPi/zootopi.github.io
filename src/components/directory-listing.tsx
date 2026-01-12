import Link from "next/link";
import type { DirectoryContents } from "@/lib/markdown";
import PostCard from "./post-card";

interface DirectoryListingProps {
  contents: DirectoryContents;
  slug: string[];
}

export default function DirectoryListing({
  contents,
  slug,
}: DirectoryListingProps) {
  const title =
    contents.categoryMetadata?.title ||
    contents.categoryMetadata?.label ||
    slug.at(-1) ||
    "Directory";

  const description = contents.categoryMetadata?.description;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="mb-4 font-bold text-4xl text-zinc-900 md:text-5xl dark:text-zinc-100">
          {title}
        </h1>
        {description && (
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        )}
      </header>

      {contents.posts.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-8 text-center font-semibold text-2xl text-zinc-900 md:text-3xl dark:text-zinc-100">
            Posts
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contents.posts.map((post) => (
              <PostCard key={post.slug.join("/")} {...post} />
            ))}
          </div>
        </section>
      )}

      {contents.subdirectories.length > 0 && (
        <section>
          <h2 className="mb-6 text-center font-semibold text-2xl text-zinc-900 md:text-3xl dark:text-zinc-100">
            Categories
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contents.subdirectories.map((subdir) => {
              const subdirUrl = `/${subdir.slug.join("/")}`;
              return (
                <Link
                  className="group block cursor-pointer rounded-xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                  href={subdirUrl}
                  key={subdir.slug.join("/")}
                >
                  <span className="font-semibold text-lg text-zinc-900 transition-colors duration-200 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                    {subdir.name}
                  </span>
                  {subdir.hasCategoryMetadata && (
                    <span className="ml-2 text-sm text-zinc-500 dark:text-zinc-500">
                      (has metadata)
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {contents.posts.length === 0 && contents.subdirectories.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            This directory is empty.
          </p>
        </div>
      )}
    </div>
  );
}
