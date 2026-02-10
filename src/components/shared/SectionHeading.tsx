interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 lg:mb-16 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : ""
      }`}
    >
      {eyebrow && (
        <p className="text-accent-blue text-sm font-semibold uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
