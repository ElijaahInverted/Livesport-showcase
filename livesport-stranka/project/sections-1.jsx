// Sections 1: Nav, Hero, Comparison
const Nav = ({ mobile }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="ls-nav">
      <div className="ls-wrap ls-nav-inner">
        <a href="#top" className="ls-logo">
          <svg className="ls-logo-svg" width="26" height="26" viewBox="0 0 28 28" fill="none" aria-label="Livesport">
            <rect width="28" height="28" rx="6" fill="#e03030"/>
            <path d="M8 8 L8 20 L14 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="20" cy="14" r="4" stroke="white" strokeWidth="2" fill="none"/>
            <line x1="23" y1="17" x2="25" y2="19" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <span>LIVESPORT</span>
        </a>
        {mobile ? (
          <button className="ls-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
            {Icon.hamburger()}
          </button>
        ) : (
          <>
            <nav className="ls-nav-links">
              {NAV_LINKS.map((l, i) => (
                <a key={l.href} href={l.href} className={"ls-nav-item" + (i === 0 ? " active" : "")}>{l.label}</a>
              ))}
            </nav>
            <button className="ls-btn ls-btn-primary">Show Top 3</button>
          </>
        )}
      </div>
      {mobile && open && (
        <div style={{ borderTop: "1px solid var(--line)", padding: "12px 16px", display: "flex", flexDirection: "column", gap: 4 }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ padding: "10px 8px", color: "var(--text-2)", fontSize: 14 }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

const Hero = ({ mobile }) => (
  <section className="ls-hero" id="top">
    <div className="ls-hero-bg"></div>
    <div className="ls-hero-grid"></div>
    <div className="ls-wrap ls-hero-inner">
      <div>
        <span className="ls-eyebrow">{Icon.badge(12)} Updated May 2026</span>
        <h1>
          Best Betting Sites <br />in the UK <em>2026</em>
        </h1>
        <p className="ls-hero-sub">
          Independent comparison of the safest UK bookmakers with the best welcome bonuses, tested by betting experts.
        </p>
        <div className="ls-hero-trust">
          <span className="ls-trust-pill">{Icon.shield(12)} Experts tested 20+ bookmakers</span>
          <span className="ls-trust-pill">{Icon.clock(12)} Updated May 2026</span>
          <span className="ls-trust-pill">18+ only · Gamble responsibly</span>
        </div>
        <div className="ls-hero-ctas">
          <a href="#top10" className="ls-btn ls-btn-primary ls-btn-lg">Show Top 3 Bookmakers {Icon.arrowRight()}</a>
          <a href="#how-we-rank" className="ls-btn ls-btn-ghost ls-btn-lg">How we rank</a>
        </div>
        <p className="ls-hero-disclosure">
          Affiliate disclosure: We may receive a commission when you click our links. This does not affect our rankings or how we test bookmakers.
        </p>
      </div>
      {!mobile && (
        <aside className="ls-hero-card">
          <div className="ls-hero-card-head">
            <span className="ls-hero-card-title">Top picks · this week</span>
            <span className="ls-live-pill">Live</span>
          </div>
          <div className="ls-hero-card-list">
            {BOOKMAKERS.slice(0, 4).map((bm, i) => (
              <div key={bm.id} className="ls-hero-rank-row">
                <span className="ls-hero-rank-num">{String(i + 1).padStart(2, "0")}</span>
                <Mono bm={bm} size="sm" />
                <div>
                  <strong>{bm.name}</strong>
                  <small>{bm.label}</small>
                </div>
                <span className="ls-hero-rank-rating">{bm.rating}</span>
                <button className="ls-hero-rank-cta">Visit</button>
              </div>
            ))}
          </div>
        </aside>
      )}
    </div>
  </section>
);

const FILTERS = [
  { id: "all", label: "All" },
  { id: "football", label: "Best for football" },
  { id: "live", label: "Best for live betting" },
  { id: "mobile", label: "Best mobile apps" },
  { id: "beginners", label: "Best for beginners" },
];

const matchesFilter = (bm, filter) => {
  if (filter === "all") return true;
  const map = { football: ["Best for football", "Best overall"], live: ["Best live betting"], mobile: ["Best mobile app"], beginners: ["Best for beginners"] };
  return (map[filter] || []).includes(bm.label);
};

const Comparison = ({ mobile }) => {
  const [filter, setFilter] = React.useState("all");
  const [sort, setSort] = React.useState({ key: "rating", dir: "desc" });
  const sortBy = (key) =>
    setSort((s) => (s.key === key ? { key, dir: s.dir === "desc" ? "asc" : "desc" } : { key, dir: "desc" }));
  const rows = React.useMemo(() => {
    const filtered = BOOKMAKERS.filter((bm) => matchesFilter(bm, filter));
    const sorted = [...filtered].sort((a, b) => {
      const dir = sort.dir === "asc" ? 1 : -1;
      if (sort.key === "rating") return (a.rating - b.rating) * dir;
      if (sort.key === "bonus") return (parseInt(a.bonusShort.replace(/\D/g, "")) - parseInt(b.bonusShort.replace(/\D/g, ""))) * dir;
      if (sort.key === "deposit") return (a.minDeposit - b.minDeposit) * dir;
      return 0;
    });
    return sorted;
  }, [filter, sort]);

  const sortIcon = (key) => (
    <span style={{ display: "inline-flex", transform: sort.key === key && sort.dir === "asc" ? "rotate(180deg)" : "none", transition: "transform 0.15s" }}>
      {Icon.sortDown()}
    </span>
  );

  return (
    <section className="ls-section" id="top10">
      <div className="ls-wrap">
        <div className="ls-section-head">
          <span className="ls-eyebrow">Top 10</span>
          <h2 className="ls-h2">Quick Comparison of the Best Betting Sites</h2>
          <p className="ls-section-sub">
            Independent rankings, updated weekly. Every operator listed holds a current UK Gambling Commission licence.
          </p>
        </div>
        <div className="ls-filter-row">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className={"ls-chip" + (filter === f.id ? " active" : "")}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {!mobile ? (
          <div className="ls-compare-table">
            <div className="ls-compare-thead">
              <span>#</span>
              <span>Bookmaker</span>
              <span className={"ls-th-sort" + (sort.key === "bonus" ? " active" : "")} onClick={() => sortBy("bonus")}>
                Welcome bonus {sort.key === "bonus" && sortIcon("bonus")}
              </span>
              <span className={"ls-th-sort" + (sort.key === "rating" ? " active" : "")} onClick={() => sortBy("rating")}>
                Rating {sort.key === "rating" && sortIcon("rating")}
              </span>
              <span className={"ls-th-sort" + (sort.key === "deposit" ? " active" : "")} onClick={() => sortBy("deposit")}>
                Min. dep. {sort.key === "deposit" && sortIcon("deposit")}
              </span>
              <span>Key pros</span>
              <span></span>
            </div>
            {rows.map((bm, i) => (
              <div key={bm.id} className={"ls-compare-row" + (i === 0 ? " top1" : "")}>
                <span className="ls-rank-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="ls-bm-cell">
                  <Mono bm={bm} />
                  <div style={{ minWidth: 0 }}>
                    <div className="ls-bm-name">{bm.name}</div>
                    <div className="ls-bm-label">{bm.label}</div>
                    <span className="ls-licence-tag">{Icon.shield(10)} {bm.licence}</span>
                  </div>
                </div>
                <div className="ls-bonus">
                  {bm.bonus}
                  <small>New customers · 18+ · T&Cs apply</small>
                </div>
                <div className="ls-cell-num">{bm.rating}<small> /5</small></div>
                <div className="ls-cell-num">£{bm.minDeposit}</div>
                <div className="ls-pros-mini">
                  {bm.pros.slice(0, 3).map((p) => <span key={p}>{p}</span>)}
                </div>
                <div className="ls-cta-cell">
                  <button className="ls-btn ls-btn-primary">Visit Site {Icon.external(11)}</button>
                  <a href={`#review-${bm.id}`} className="ls-review-link">Read full review</a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="ls-compare-cards">
            {rows.map((bm, i) => (
              <div key={bm.id} className={"ls-compare-card" + (i === 0 ? " top1" : "")}>
                <div className="ls-cc-head">
                  <span className="ls-cc-rank">{String(i + 1).padStart(2, "0")}</span>
                  <Mono bm={bm} />
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div className="ls-bm-name">{bm.name}</div>
                    <div className="ls-bm-label">{bm.label}</div>
                  </div>
                  <Stars value={bm.rating} size={12} />
                </div>
                <div className="ls-bonus" style={{ fontSize: 14, fontWeight: 600 }}>{bm.bonus}</div>
                <div className="ls-cc-grid">
                  <div>Min. deposit<b>£{bm.minDeposit}</b></div>
                  <div>Licence<b style={{ fontSize: 12, color: "var(--accent-hi)" }}>{bm.licence}</b></div>
                </div>
                <div className="ls-pros-mini" style={{ marginBottom: 14 }}>
                  {bm.pros.slice(0, 3).map((p) => <span key={p}>{p}</span>)}
                </div>
                <button className="ls-btn ls-btn-primary ls-btn-block">Visit Site {Icon.external(11)}</button>
                <a href={`#review-${bm.id}`} className="ls-review-link" style={{ display: "block", textAlign: "center", marginTop: 8, fontSize: 13, color: "var(--text-3)" }}>
                  Read full review
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

Object.assign(window, { Nav, Hero, Comparison });
