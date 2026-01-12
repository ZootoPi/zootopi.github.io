import { FolderKanban } from "lucide-react";
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
    <div className="relative h-full overflow-hidden">
      {/* Animated Gradient Blobs Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Blue blob - left side */}
        <div className="absolute top-0 -left-[20%] h-[800px] w-[600px] animate-blob rounded-full bg-linear-to-br from-[#4776BA]/20 to-[#4776BA]/10 blur-3xl md:-left-[10%] md:h-[1000px] md:w-[800px]" />

        {/* Yellow-orange blob - right side */}
        <div className="absolute top-20 -right-[20%] h-[700px] w-[600px] animate-blob-reverse rounded-full bg-linear-to-br from-[#FAD007]/25 via-[#EE4723]/20 to-[#FAD007]/15 blur-3xl md:-right-[10%] md:h-[900px] md:w-[800px]" />

        {/* Additional smaller blobs for depth */}
        <div
          className="absolute top-1/3 left-1/4 h-[500px] w-[500px] animate-blob rounded-full bg-linear-to-br from-[#EE4723]/15 to-[#FAD007]/10 blur-3xl"
          style={{ animationDelay: "2s", animationDuration: "18s" }}
        />
        <div
          className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] animate-blob-reverse rounded-full bg-linear-to-br from-[#4776BA]/15 to-[#EE4723]/10 blur-3xl"
          style={{ animationDelay: "4s", animationDuration: "22s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl text-zinc-900 md:text-5xl dark:text-zinc-100">
            <span className="bg-linear-to-r from-[#FAD007] via-[#4776BA] to-[#EE4723] bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          {description && (
            <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          )}
        </header>

        {contents.posts.length > 0 && (
          <section className="relative mb-12">
            {/* Subtle background for posts section */}
            <div className="absolute inset-0 -z-10 rounded-3xl" />

            <div className="relative">
              <h2 className="mb-8 text-center font-semibold text-2xl text-zinc-900 md:text-3xl dark:text-zinc-100">
                Posts
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {contents.posts.map((post) => (
                  <PostCard key={post.slug.join("/")} {...post} />
                ))}
              </div>
            </div>
          </section>
        )}

        {contents.subdirectories.length > 0 && (
          <section className="relative">
            {/* Subtle background for categories section */}
            <div className="absolute inset-0 -z-10 rounded-3xl" />

            <div className="relative">
              <h2 className="mb-6 text-center font-semibold text-2xl text-zinc-900 md:text-3xl dark:text-zinc-100">
                Categories
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {contents.subdirectories.map((subdir, index) => {
                  const subdirUrl = `/${subdir.slug.join("/")}`;

                  // Rotate through color schemes for variety
                  const categoryColors = [
                    {
                      gradient: "from-[#FAD007] to-[#FAD007]/80",
                      bgGradient:
                        "from-yellow-50 to-yellow-100/50 dark:from-yellow-950/20 dark:to-yellow-900/10",
                      color: "#FAD007",
                    },
                    {
                      gradient: "from-[#4776BA] to-[#4776BA]/80",
                      bgGradient:
                        "from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10",
                      color: "#4776BA",
                    },
                    {
                      gradient: "from-[#EE4723] to-[#EE4723]/80",
                      bgGradient:
                        "from-red-50 to-red-100/50 dark:from-red-950/20 dark:to-red-900/10",
                      color: "#EE4723",
                    },
                  ];
                  const categoryColor =
                    categoryColors[index % categoryColors.length];

                  return (
                    <Link
                      className={`group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-transparent bg-linear-to-br ${categoryColor.bgGradient} p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
                      href={subdirUrl}
                      key={subdir.slug.join("/")}
                    >
                      {/* Colorful gradient border on hover */}
                      <div
                        className={`absolute inset-0 rounded-2xl bg-linear-to-br ${categoryColor.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-20`}
                      />

                      {/* Content */}
                      <div className="relative z-10">
                        <div
                          className={`mb-4 inline-flex rounded-xl bg-linear-to-br ${categoryColor.gradient} p-3`}
                        >
                          <FolderKanban className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="mb-2 font-bold text-xl text-zinc-900 dark:text-zinc-100">
                          {subdir.label || subdir.name}
                        </h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {contents.posts.length === 0 &&
          contents.subdirectories.length === 0 && (
            <div className="relative py-12 text-center">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-linear-to-br from-zinc-50 via-blue-50/20 to-yellow-50/20 dark:from-zinc-900 dark:via-blue-950/10 dark:to-yellow-950/10" />
              <p className="relative text-lg text-zinc-600 dark:text-zinc-400">
                This directory is empty.
              </p>
            </div>
          )}
      </div>
    </div>
  );
}
