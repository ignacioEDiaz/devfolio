/** Título con una parte resaltada en color de acento. */
export function SplitHeading({ as: Tag = 'h2', before = '', accent = '', after = '', className = '' }) {
  return (
    <Tag className={`heading ${className}`}>
      {before && <span>{before} </span>}
      <span className="accent">{accent}</span>
      {after && <span> {after}</span>}
    </Tag>
  );
}
