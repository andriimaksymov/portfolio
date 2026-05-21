type TagsProps = {
  items: string[];
};

export function Tags({ items }: TagsProps) {
  if (items.length === 0) return null;

  return (
    <div className="tags">
      {items.map((item) => (
        <span className="tag" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}
