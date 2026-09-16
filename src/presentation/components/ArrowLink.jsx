import { ArrowUpRight } from 'lucide-react';

export function ArrowLink({ href, children, className = '' }) {
  return (
    <a href={href} className={`arrow-link ${className}`}>
      <span className="arrow-link__label">{children}</span>
      <span className="arrow-link__icon" aria-hidden="true">
        <ArrowUpRight size={26} strokeWidth={1.25} />
        <ArrowUpRight size={26} strokeWidth={1.25} />
      </span>
    </a>
  );
}
