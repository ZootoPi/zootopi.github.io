import { ArrowRight, Award, BookOpen, FolderKanban } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PostCard from "@/components/post-card";
import {
  getAllMarkdownFiles,
  getDirectoryContents,
  getMarkdownFile,
} from "@/lib/markdown";

export default async function Home() {
  // Get all blog posts
  const allSlugs = getAllMarkdownFiles();
  const blogSlugs = allSlugs.filter((slug) => slug[0] === "blog");

  // Get metadata for latest 6 blog posts
  const postsData = await Promise.all(
    blogSlugs.slice(0, 6).map(async (slug) => {
      const file = await getMarkdownFile(slug);
      if (!file) {
        return null;
      }
      const frontmatter = file.frontmatter as {
        title?: string;
        description?: string;
        date?: string;
      };
      return {
        slug,
        title: frontmatter.title || slug.at(-1) || "Untitled",
        description: frontmatter.description,
        date: frontmatter.date,
      };
    })
  );

  const posts = postsData.filter(
    (post): post is NonNullable<typeof post> => post !== null
  );

  // Get directory contents for feature sections
  const tutorialContents = await getDirectoryContents(["docs", "tutorial"]);
  const projectContents = await getDirectoryContents(["docs", "project"]);
  const certificateContents = await getDirectoryContents([
    "docs",
    "certificate",
  ]);

  const features = [
    {
      name: "Tutorials",
      description: "Hands-on assignments in all levels.",
      icon: BookOpen,
      href: "/docs/tutorial",
      gradient: "from-[#FAD007] to-[#FAD007]/80",
      bgGradient:
        "from-yellow-50 to-yellow-100/50 dark:from-yellow-950/20 dark:to-yellow-900/10",
      count: tutorialContents?.posts.length || 0,
      color: "#FAD007",
    },
    {
      name: "Projects",
      description: "Real-world fantastic projects by us",
      icon: FolderKanban,
      href: "/docs/project",
      gradient: "from-[#4776BA] to-[#4776BA]/80",
      bgGradient:
        "from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10",
      count: projectContents?.posts.length || 0,
      color: "#4776BA",
    },
    {
      name: "Certificates",
      description: "Reviews about courses and certificates.",
      icon: Award,
      href: "/docs/certificate",
      gradient: "from-[#EE4723] to-[#EE4723]/80",
      bgGradient:
        "from-red-50 to-red-100/50 dark:from-red-950/20 dark:to-red-900/10",
      count: certificateContents?.posts.length || 0,
      color: "#EE4723",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-zinc-950">
      {/* Floating Color Blobs - Background Layer */}
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

      <Header />

      <main className="relative z-10 pt-24">
        {/* Hero Section with Colorful Gradient */}
        <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-20 md:py-32">
          {/* Sky background for entire hero section */}
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <Image
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover opacity-60 dark:opacity-40"
              fill
              src="/sky.svg"
            />
          </div>

          <div className="relative z-10">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left side - Text content */}
              <div className="text-center lg:text-left">
                <h1 className="mb-6 font-bold text-5xl text-zinc-900 tracking-tight md:text-6xl lg:text-7xl dark:text-zinc-100">
                  Share what we{" "}
                  <span className="bg-linear-to-r from-[#FAD007] via-[#4776BA] to-[#EE4723] bg-clip-text text-transparent">
                    love!
                  </span>
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-zinc-600 md:text-xl lg:mx-0 dark:text-zinc-400">
                  Discover stories, insights, and knowledge from our team. Join
                  us on a journey of learning and sharing.
                </p>
              </div>

              {/* Right side - Pi illustration (smaller) */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <Image
                    alt="Zootopi Pi Character"
                    className="h-auto w-full animate-float"
                    height={508}
                    src="/pi.svg"
                    width={340}
                  />
                </div>
              </div>
            </div>

            {/* Floating decorative elements with more color */}
            <div className="absolute top-20 -left-10 hidden animate-float md:block">
              <Image
                alt=""
                aria-hidden="true"
                className="opacity-40 dark:opacity-30"
                height={70}
                src="/random_1.svg"
                width={55}
              />
            </div>
            <div className="absolute top-40 -right-10 hidden animate-float-delayed md:block">
              <Image
                alt=""
                aria-hidden="true"
                className="opacity-40 dark:opacity-30"
                height={51}
                src="/random_2.svg"
                width={56}
              />
            </div>
            <div className="absolute top-60 left-1/2 hidden -translate-x-1/2 animate-float-slow md:block">
              <Image
                alt=""
                aria-hidden="true"
                className="opacity-40 dark:opacity-30"
                height={93}
                src="/random_3.svg"
                width={94}
              />
            </div>
          </div>
        </section>

        {/* What we do and what we share - Colorful Feature Cards */}
        <section className="relative mx-auto max-w-7xl px-4 py-16">
          {/* Additional blob for this section */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div
              className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-blob rounded-full bg-linear-to-br from-[#4776BA]/10 via-[#FAD007]/10 to-[#EE4723]/10 blur-3xl"
              style={{ animationDelay: "1s", animationDuration: "24s" }}
            />
          </div>

          <div className="relative mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl text-zinc-900 md:text-4xl dark:text-zinc-100">
              What we do and what we share
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              Explore our tutorials, projects, and certificates
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-transparent bg-linear-to-br ${feature.bgGradient} p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
                  href={feature.href}
                  key={feature.name}
                >
                  {/* Colorful gradient border on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-linear-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-20`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className={`mb-4 inline-flex rounded-xl bg-linear-to-br ${feature.gradient} p-3`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-2 font-bold text-2xl text-zinc-900 dark:text-zinc-100">
                      {feature.name}
                    </h3>
                    <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                      {feature.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm text-zinc-500 dark:text-zinc-500">
                        {feature.count} {feature.count === 1 ? "item" : "items"}
                      </span>
                      <ArrowRight
                        className={
                          "h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                        }
                        style={{ color: feature.color }}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Featured Posts Section with Colorful Background */}
        {posts.length > 0 && (
          <section className="relative mx-auto max-w-7xl px-4 py-16">
            {/* Subtle colorful background */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-linear-to-br from-zinc-50 via-blue-50/30 to-yellow-50/30 dark:from-zinc-900 dark:via-blue-950/20 dark:to-yellow-950/20" />

            <div className="relative">
              <h2 className="mb-12 text-center font-bold text-3xl text-zinc-900 md:text-4xl dark:text-zinc-100">
                Latest Posts
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <PostCard key={post.slug.join("/")} {...post} />
                ))}
              </div>
              {blogSlugs.length > 6 && (
                <div className="mt-12 text-center">
                  <Link
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-zinc-300 bg-white px-6 py-3 font-medium text-sm text-zinc-700 transition-all duration-200 hover:border-[#4776BA] hover:bg-[#4776BA] hover:text-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-[#4776BA] dark:hover:bg-[#4776BA] dark:hover:text-white"
                    href="/blog"
                  >
                    View all posts
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
