import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

const MyImage = (props: ImageProps) => {
  const src = props.src;
  if (!src) {
    return (
      <Image
        {...props}
        alt={props.alt || ""}
        className={cn(props.className, "h-auto w-full rounded-2xl")}
      />
    );
  }

  if (typeof src !== "string") {
    return (
      <Image
        {...props}
        alt={props.alt || ""}
        className={cn(props.className, "h-auto w-full rounded-2xl")}
      />
    );
  }

  // Handle absolute URLs
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return (
      <Image
        {...props}
        alt={props.alt || ""}
        className={cn(props.className, "h-auto w-full rounded-2xl")}
      />
    );
  }

  // Handle images from public folder (including /contents/...)
  if (src.startsWith("/")) {
    return (
      <Image
        alt={props.alt || ""}
        className={cn(props.className, "h-auto w-full rounded-2xl")}
        height={props.height ? Number(props.height) : undefined}
        src={src}
        unoptimized
        width={props.width ? Number(props.width) : undefined}
      />
    );
  }

  // For relative paths, they should have been converted to absolute paths
  // But if not, fallback to regular img tag
  return (
    <Image
      {...props}
      alt={props.alt || ""}
      className={cn(props.className, "h-auto w-full rounded-2xl")}
      height={props.height}
      width={props.width}
    />
  );
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: MyImage,
  };
}
