import type { MDXComponents } from "mdx/types";
import Image from "next/image";

const components: MDXComponents = {
  img: (props) => {
    const src = props.src;
    if (!src) {
      return <Image {...props} alt={props.alt || ""} />;
    }

    // Handle absolute URLs
    if (src.startsWith("http://") || src.startsWith("https://")) {
      return <Image {...props} alt={props.alt || ""} />;
    }

    // Handle images from public folder (including /contents/...)
    if (src.startsWith("/")) {
      return (
        <Image
          alt={props.alt || ""}
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
        height={props.height}
        width={props.width}
      />
    );
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
