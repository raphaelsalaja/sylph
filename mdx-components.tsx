import type { MDXComponents } from "mdx/types";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import type { ImageProps } from "next/image";

import Image from "@/components/image";
import { Link } from "@/components/link";
import { Preview } from "@/components/preview";
import { cn } from "@/lib/cn";
import { options } from "@/mdx-components-options";

import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { MDXRemote } from "next-mdx-remote/rsc";
import dynamic from "next/dynamic";
import React from "react";

const FootnoteBackReference = dynamic(() => import("@/components/footnote/back-reference"), {
  ssr: false,
});

const FootnoteForwardReference = dynamic(() => import("@/components/footnote/forward-reference"), {
  ssr: false,
});

const components: MDXComponents = {
  Preview: ({ children, codeblock }) => <Preview codeblock={codeblock}>{children}</Preview>,
  Image: ({ caption, alt, ...props }: ImageProps & { caption?: string }) => {
    return <Image {...props} caption={caption} alt={alt} />;
  },
  h2: ({ id }: React.HTMLAttributes<HTMLHeadingElement>) => {
    if (id?.includes("footnote-label")) {
      return null;
    }
  },
  a: ({ children, href }) => {
    if (href?.startsWith("#user-content-fn-")) {
      return <FootnoteForwardReference href={href}>{children}</FootnoteForwardReference>;
    }
    return (
      <Link href={href} className="inline-flex items-center gap-1 text-muted" underline>
        {children}
        <ExternalLinkIcon />
      </Link>
    );
  },
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote className={cn("mt-6 border-gray-4 border-l-2 pl-6 text-muted", className)} {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-hidden overflow-y-auto">
      <table className={cn("w-full overflow-hidden", className)} {...props} />
    </div>
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className={cn("border border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", className)} {...props} />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className={cn("border border-border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => {
    if (
      React.Children.toArray(props.children).some(
        (child) => React.isValidElement(child) && (child as React.ReactElement).props.id?.includes("user-content-fn-"),
      )
    ) {
      return (
        <ol data-footnotes>
          <div className="mt-6 mb-2 text-muted text-small">Footnotes</div>
          {props.children}
        </ol>
      );
    }
    return <ol className={cn("list-decimal", className)} {...props} />;
  },
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => <ul className={cn("list-disc", className)} {...props} />,
  li: ({ className, children, ...props }: React.HTMLAttributes<HTMLLIElement>) => {
    if (props.id?.includes("user-content-fn-")) {
      return (
        <li id={props.id}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              if (child.type === "p") {
                const href = child.props.children.find((child: React.ReactNode) => {
                  if (React.isValidElement(child)) {
                    return React.isValidElement(child) && "props" in child && (child.props as { href?: string }).href?.includes("user-content-fnref-");
                  }
                  return false;
                })?.props.href;

                const filtered = child.props.children.filter((child: React.ReactNode) => {
                  if (React.isValidElement(child)) {
                    return !(React.isValidElement(child) && "props" in child && (child.props as { href?: string }).href?.includes("user-content-fnref-"));
                  }
                  return true;
                });

                return <FootnoteBackReference href={href}>{filtered}</FootnoteBackReference>;
              }
              return child;
            }
            return child;
          })}
        </li>
      );
    }
    return <li className={cn("list-item", className)}>{children}</li>;
  },
};

export function MDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return <MDXRemote {...props} components={components} options={options} />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
