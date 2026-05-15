import { cn } from "@/lib/utils";

interface BrandLogoProps {
  compact?: boolean;
  className?: string;
  imageClassName?: string;
}

const LOGO_SRC = "/revforge-logo.png";

export default function BrandLogo({ compact = false, className, imageClassName }: BrandLogoProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center",
        compact ? "h-14 w-24 justify-center" : "h-11 w-[156px]",
        className
      )}
      aria-label="RevForge"
    >
      <img
        src={LOGO_SRC}
        alt="RevForge"
        className={cn("h-full w-full object-contain", imageClassName)}
      />
    </div>
  );
}
