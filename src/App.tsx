import React from "react";
import { BOOKMAKERS, CATEGORIES, FAQS, NAV_LINKS } from "./data";
import { Icon, Mono, Stars } from "./icons";

const MobileContext = React.createContext(false);

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const mobile = React.useContext(MobileContext);
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
        <div style={{ borderTop: "1px solid var(--color-border)", padding: "12px 16px", display: "flex", flexDirection: "column", gap: 4, background: "var(--color-bg)" }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ padding: "10px 8px", color: "var(--color-text)", fontSize: 14 }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

const FILTERS = [
  { id: "all", label: "All" },
  { id: "football", label: "Best for football" },
  { id: "live", label: "Best for live betting" },
  { id: "mobile", label: "Best mobile apps" },
  { id: "beginners", label: "Best for beginners" },
];

const matchesFilter = (bm: any, filter: string) => {
  if (filter === "all") return true;
  const map: Record<string, string[]> = { football: ["Best for football", "Best overall"], live: ["Best live betting"], mobile: ["Best mobile app"], beginners: ["Best for beginners"] };
  return (map[filter] || []).includes(bm.label);
};

const Comparison = () => {
  const mobile = React.useContext(MobileContext);
  const [filter, setFilter] = React.useState("all");
  const [sort, setSort] = React.useState({ key: "rating", dir: "desc" });
  const sortBy = (key: string) =>
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

  const sortIcon = (key: string) => (
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
                  <div>Licence<b style={{ fontSize: 12, color: "var(--color-text)" }}>{bm.licence}</b></div>
                </div>
                <div className="ls-pros-mini" style={{ marginBottom: 14 }}>
                  {bm.pros.slice(0, 3).map((p) => <span key={p}>{p}</span>)}
                </div>
                <button className="ls-btn ls-btn-primary ls-btn-block">Visit Site {Icon.external(11)}</button>
                <a href={`#review-${bm.id}`} className="ls-review-link" style={{ display: "block", textAlign: "center", marginTop: 8, fontSize: 13, color: "var(--color-text-muted)" }}>
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

const Reviews = () => (
  <section className="ls-section" id="reviews">
    <div className="ls-wrap">
      <div className="ls-section-head">
        <span className="ls-eyebrow">In‑depth reviews</span>
        <h2 className="ls-h2">Top {BOOKMAKERS.length} Betting Sites — In‑Depth Reviews</h2>
        <p className="ls-section-sub">
          Each review is built from hands-on testing across desktop and mobile. We weight evidence over marketing.
        </p>
      </div>
      {BOOKMAKERS.map((bm, i) => (
        <article key={bm.id} className="ls-review" id={`review-${bm.id}`}>
          <div className="ls-review-head">
            <Mono bm={bm} size="lg" />
            <div>
              <h3 className="ls-review-h3">
                {String(i + 1).padStart(2, "0")} · {bm.name}
                <small>{bm.positioning}</small>
              </h3>
            </div>
            <div className="ls-review-rating">
              <div className="ls-review-rating-num">{bm.rating}</div>
              <Stars value={bm.rating} size={12} />
              <small>Overall rating</small>
            </div>
          </div>
          <p className="ls-review-summary">{bm.summary}</p>

          <div className="ls-pros-cons">
            <div className="ls-pc-block ls-pc-pros">
              <div className="ls-pc-title">Pros</div>
              <ul className="ls-pc-list">
                {bm.pros.map((p) => (
                  <li key={p}><span className="ls-icon">{Icon.check()}</span>{p}</li>
                ))}
              </ul>
            </div>
            <div className="ls-pc-block ls-pc-cons">
              <div className="ls-pc-title">Cons</div>
              <ul className="ls-pc-list">
                {bm.cons.map((c) => (
                  <li key={c}><span className="ls-icon">{Icon.x()}</span>{c}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ls-bonus-block">
            <div>
              <div className="ls-bonus-block-label">Welcome bonus</div>
              <div className="ls-bonus-block-text">{bm.bonus}</div>
              <div className="ls-bonus-block-terms">New customers only · 18+ · T&Cs apply · <a href="#terms" style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>View terms</a></div>
            </div>
            <a href="#visit" className="ls-btn ls-btn-primary">Claim bonus {Icon.external(11)}</a>
          </div>

          <div className="ls-rating-bars">
            {Object.entries(bm.ratings).map(([k, v]) => (
              <div key={k} className="ls-rating-bar">
                <div className="ls-rating-bar-label">{k}</div>
                <div className="ls-rating-bar-value">{v.toFixed(1)}</div>
                <div className="ls-rating-bar-track">
                  <div className="ls-rating-bar-fill" style={{ width: `${(v / 5) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="ls-review-ctas">
            <a href="#visit" className="ls-btn ls-btn-primary">Visit {bm.name} {Icon.external(11)}</a>
            <a href="#top10" className="ls-btn ls-btn-ghost">Back to comparison</a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const Categories = () => (
  <section className="ls-section" id="categories">
    <div className="ls-wrap">
      <div className="ls-section-head">
        <span className="ls-eyebrow">By category</span>
        <h2 className="ls-h2">Best Betting Sites by Category</h2>
        <p className="ls-section-sub">Different bettors have different priorities. Pick the angle that matters most to you.</p>
      </div>
      <div className="ls-cat-grid">
        {CATEGORIES.map((c) => (
          <div key={c.title} className="ls-cat-card">
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <div className="ls-cat-picks">
              {c.picks.map((id) => {
                const bm = BOOKMAKERS.find((b) => b.id === id);
                return bm ? <Mono key={id} bm={bm} size="sm" /> : null;
              })}
              <span className="ls-cat-picks-text">
                {c.picks.map((id) => BOOKMAKERS.find((b) => b.id === id)?.name).join(" · ")}
              </span>
            </div>
            <a href={`#review-${c.picks[0]}`} className="ls-cat-link">View details {Icon.arrowRight()}</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SafeSteps = [
  { n: "01", t: "Licence & regulation", d: "Confirm a UK Gambling Commission licence and check the public register." },
  { n: "02", t: "Secure payments", d: "Look for trusted methods, SSL throughout and identity verification on signup." },
  { n: "03", t: "Transparent terms", d: "Bonus, withdrawal and account-closure policies should be easy to find." },
  { n: "04", t: "Reputation & support", d: "Read independent reviews and test customer support before depositing real money." },
];

const BonusConcepts = [
  { t: "Qualifying bet", d: "The first bet you place to unlock the offer.", icon: Icon.check(16) },
  { t: "Minimum odds", d: "The shortest price your qualifying bet can be at.", icon: Icon.bolt(16) },
  { t: "Wagering / rollover", d: "How many times you must stake the bonus before withdrawing.", icon: Icon.clock(16) },
  { t: "Expiry times", d: "Free bets typically expire 7 days after they are credited.", icon: Icon.clock(16) },
  { t: "Stake not returned", d: "Free bet winnings exclude the original free-bet stake.", icon: Icon.card(16) },
];

const RGTips = [
  { t: "Set a budget", d: "Decide a monthly limit before you bet, and never increase it on a losing day." },
  { t: "Avoid chasing losses", d: "Bigger stakes do not recover earlier ones. A losing run is a stop signal." },
  { t: "Use deposit limits", d: "Every UKGC site lets you cap deposits per day, week or month — set them up early." },
  { t: "Take regular breaks", d: "Use time-out and reality-check tools, especially during long live-betting sessions." },
];

const Guides = () => (
  <section className="ls-section" id="bonus-guide">
    <div className="ls-wrap">
      <div className="ls-section-head">
        <span className="ls-eyebrow">Guides</span>
        <h2 className="ls-h2">The Essentials, in Plain English</h2>
        <p className="ls-section-sub">Three short reads that cover the things every UK bettor should know before placing a bet.</p>
      </div>

      <div className="ls-guide-block">
        <h3>How to choose a safe online bookmaker</h3>
        <p className="ls-guide-intro">A four-point checklist we use ourselves before adding any new operator to the comparison table.</p>
        <div className="ls-step-grid">
          {SafeSteps.map((s) => (
            <div key={s.n} className="ls-step">
              <span className="ls-step-num">{s.n}</span>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ls-guide-block">
        <h3>How welcome bonuses & free bets work</h3>
        <p className="ls-guide-intro">Five concepts that explain almost every bookmaker offer you will see in the UK.</p>
        <div className="ls-bonus-grid">
          {BonusConcepts.map((b) => (
            <div key={b.t} className="ls-bonus-card">
              <span className="ls-bonus-icon">{b.icon}</span>
              <h4>{b.t}</h4>
              <p>{b.d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ls-guide-block">
        <h3>Bankroll management & responsible gambling</h3>
        <p className="ls-guide-intro">Four habits that keep betting fun and well-controlled.</p>
        <div className="ls-step-grid">
          {RGTips.map((t, i) => (
            <div key={t.t} className="ls-step">
              <span className="ls-step-num">{String(i + 1).padStart(2, "0")}</span>
              <h4>{t.t}</h4>
              <p>{t.d}</p>
            </div>
          ))}
        </div>
        <div className="ls-rg-cta">
          {Icon.heart(14)}
          <span>If gambling stops being fun, free help is available 24/7. Visit <a href="#help">BeGambleAware</a> or call the National Gambling Helpline on 0808 8020 133.</span>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <section className="ls-section" id="faq">
      <div className="ls-wrap">
        <div className="ls-section-head">
          <span className="ls-eyebrow">FAQ</span>
          <h2 className="ls-h2">FAQ About Online Betting Sites</h2>
          <p className="ls-section-sub">Short, factual answers to the questions we hear most from new and experienced bettors.</p>
        </div>
        <div className="ls-faq-list">
          {FAQS.map((f, i) => (
            <div key={i} className={"ls-faq-row" + (openIdx === i ? " open" : "")}>
              <button className="ls-faq-q" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="ls-faq-toggle">{Icon.plus()}</span>
              </button>
              <div className="ls-faq-a"><div className="ls-faq-a-inner">{f.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="ls-footer">
    <div className="ls-wrap">
      <div className="ls-footer-grid">
        <div className="ls-footer-col">
          <a href="#top" className="ls-logo" style={{ marginBottom: 14 }}>
            <svg className="ls-logo-svg" width="26" height="26" viewBox="0 0 28 28" fill="none" aria-label="Livesport">
              <rect width="28" height="28" rx="6" fill="#e03030"/>
              <path d="M8 8 L8 20 L14 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="20" cy="14" r="4" stroke="white" strokeWidth="2" fill="none"/>
              <line x1="23" y1="17" x2="25" y2="19" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <span>LIVESPORT</span>
          </a>
          <p style={{ fontSize: 13, color: "var(--color-text-muted)", maxWidth: 320, marginTop: 12 }}>
            Independent comparison of UK-licensed bookmakers. We help bettors find safer sites and better value.
          </p>
        </div>
        <div className="ls-footer-col">
          <h5>Site</h5>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#how-we-rank">Methodology</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#editorial">Editorial standards</a></li>
          </ul>
        </div>
        <div className="ls-footer-col">
          <h5>Help</h5>
          <ul>
            <li><a href="#responsible">Responsible gambling</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#bonus-guide">Bonus guide</a></li>
            <li><a href="#glossary">Glossary</a></li>
          </ul>
        </div>
        <div className="ls-footer-col">
          <h5>Legal</h5>
          <ul>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#terms">Terms</a></li>
            <li><a href="#disclosure">Affiliate disclosure</a></li>
            <li><a href="#cookies">Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="ls-footer-bottom">
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <span className="ls-age-badge"><span className="ls-age-circle">18+</span> Only</span>
          <span>Please gamble responsibly.</span>
        </div>
        <p>
          Livesport does not offer real-money gambling; this site is for comparison and information only.
          We may earn a commission when you click links to operators. This does not affect rankings.
          © 2026 Livesport.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [showSticky, setShowSticky] = React.useState(false);
  const [mobile, setMobile] = React.useState(window.innerWidth < 768);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onScroll = () => setShowSticky(node.scrollTop > 600);
    node.addEventListener("scroll", onScroll);
    return () => node.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MobileContext.Provider value={mobile}>
      <div id="top" ref={ref} className={"ls-root" + (mobile ? " ls-mob" : "")} style={{ width: "100%", height: "100vh", overflow: "auto", position: "relative" }}>
        <Nav />
        <Comparison />
        <Reviews />
        <Categories />
        <Guides />
        <FAQ />
        <Footer />
        {showSticky && !mobile && (
          <button className="ls-stickytop" onClick={() => ref.current?.scrollTo({ top: 0, behavior: "smooth" })}>
            {Icon.arrowRight()} Back to top
          </button>
        )}
      </div>
    </MobileContext.Provider>
  );
}
