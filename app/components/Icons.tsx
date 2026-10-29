type IconProps = { size?: number };

export function ArrowIcon({ dir = 1, size = 14 }: { dir?: -1 | 1; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      {dir < 0 ? <path d="M9 2L4 7l5 5" /> : <path d="M5 2l5 5-5 5" />}
    </svg>
  );
}

export function CloseIcon({ size = 12 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path d="M1 1l10 10M11 1L1 11" />
    </svg>
  );
}

export function SearchIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.8-4.8" />
    </svg>
  );
}

export function BagIcon({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path d="M4.5 8.5h15l-1.2 11.5H5.7L4.5 8.5z" />
      <path d="M8.5 8.5V7a3.5 3.5 0 0 1 7 0v1.5" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg width={18} height={14} viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path d="M0 1h18M0 7h18M0 13h18" />
    </svg>
  );
}

export function FilterIcon() {
  return (
    <svg width={14} height={12} viewBox="0 0 14 12" fill="none" stroke="currentColor" strokeWidth={1.4} aria-hidden="true">
      <path d="M0 2h14M0 6h14M0 10h14" />
      <circle cx="4" cy="2" r="1.6" fill="currentColor" />
      <circle cx="10" cy="6" r="1.6" fill="currentColor" />
      <circle cx="6" cy="10" r="1.6" fill="currentColor" />
    </svg>
  );
}
