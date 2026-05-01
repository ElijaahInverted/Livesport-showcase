// Shared UI primitives for Livesport landing
const Stars = ({ value, size = 14 }) => {
  const full = Math.floor(value);
  const half = value - full >= 0.4 && value - full < 0.9;
  return (
    <span className="ls-stars" aria-label={`${value} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const isFull = i < full;
        const isHalf = i === full && half;
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill={isFull ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
            <defs>
              <linearGradient id={`half-${i}-${value}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path d="M10 2 L12.5 7.5 L18.5 8.3 L14 12.4 L15.2 18.3 L10 15.4 L4.8 18.3 L6 12.4 L1.5 8.3 L7.5 7.5 Z"
              fill={isHalf ? `url(#half-${i}-${value})` : isFull ? "currentColor" : "none"} />
          </svg>
        );
      })}
      <span className="ls-stars-text">{value.toFixed(1)}</span>
    </span>
  );
};

const Mono = ({ bm, size = "" }) => {
  const cls = "ls-mono " + (size === "sm" ? "ls-mono-sm" : size === "lg" ? "ls-mono-lg" : "");
  const initials = bm.id === "A" ? "BA" : bm.id === "B" ? "BB" : bm.id === "C" ? "BC" : bm.id === "D" ? "BD" : bm.id === "E" ? "BE" : "BF";
  return (
    <span
      className={cls}
      style={{ background: `linear-gradient(135deg, ${bm.color}, color-mix(in srgb, ${bm.color} 60%, #000))` }}
    >
      {initials}
    </span>
  );
};

const Icon = {
  shield: (s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 L4 5 V11 C4 16 7.5 20 12 22 C16.5 20 20 16 20 11 V5 Z" />
      <path d="M9 12 L11 14 L15 10" />
    </svg>
  ),
  bolt: (s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 L4 14 H11 L11 22 L20 10 H13 Z" />
    </svg>
  ),
  phone: (s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M11 18 H13" />
    </svg>
  ),
  card: (s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="14" rx="3" />
      <path d="M2 11 H22" />
    </svg>
  ),
  chat: (s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12 C21 16 17 19 12 19 H8 L4 22 V12 C4 8 8 5 12 5 C17 5 21 8 21 12 Z" />
    </svg>
  ),
  heart: (s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21 C5 16 2 12 2 8 A5 5 0 0 1 12 7 A5 5 0 0 1 22 8 C22 12 19 16 12 21 Z" />
    </svg>
  ),
  check: (s = 14) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12 L10 17 L19 7" />
    </svg>
  ),
  x: (s = 14) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6 L18 18 M18 6 L6 18" />
    </svg>
  ),
  arrowRight: (s = 14) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12 H19 M13 6 L19 12 L13 18" />
    </svg>
  ),
  external: (s = 12) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4 H20 V10 M20 4 L11 13 M10 6 H4 V20 H18 V14" />
    </svg>
  ),
  plus: (s = 14) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5 V19 M5 12 H19" />
    </svg>
  ),
  sortDown: (s = 12) => (
    <svg width={s} height={s} viewBox="0 0 12 12" fill="currentColor"><path d="M6 8 L2 4 H10 Z" /></svg>
  ),
  hamburger: (s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 7 H20 M4 12 H20 M4 17 H20" />
    </svg>
  ),
  clock: (s = 14) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7 V12 L15 14" />
    </svg>
  ),
  badge: (s = 14) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 L14.5 6.5 L19.5 7.5 L16 11 L17 16 L12 13.5 L7 16 L8 11 L4.5 7.5 L9.5 6.5 Z" />
    </svg>
  ),
};

Object.assign(window, { Stars, Mono, Icon });
