import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          {align === "center" && (
            <span className="hidden h-px w-8 bg-accent sm:block" />
          )}
          <span>{eyebrow}</span>
          {align === "left" && <span className="h-px w-8 bg-accent" />}
        </p>
      )}
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight leading-none md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-[65ch] leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
