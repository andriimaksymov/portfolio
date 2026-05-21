type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  centered?: boolean;
};

export function SectionHeader({ eyebrow, title, centered = false }: SectionHeaderProps) {
  return (
    <div className={centered ? "section-head reveal centered" : "section-head reveal"}>
      <div className="section-label">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
