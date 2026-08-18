import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) => (
  <header className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
    {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
    <h2 className="section-heading text-balance text-foreground">{title}</h2>
    {description && (
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
        {description}
      </p>
    )}
  </header>
);

export default SectionHeading;