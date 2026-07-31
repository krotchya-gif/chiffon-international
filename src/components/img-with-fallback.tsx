"use client";

import * as React from "react";
import Image from "next/image";
import { ImageSquare } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

export function ImgWithFallback({
  src,
  alt,
  className,
  imgClassName,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = React.useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-navy to-navy-deep text-accent",
          className,
        )}
      >
        <ImageSquare weight="light" className="h-12 w-12 opacity-50" />
      </div>
    );
  }

  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        onError={() => setFailed(true)}
        className={cn("object-cover", imgClassName)}
      />
    </div>
  );
}
