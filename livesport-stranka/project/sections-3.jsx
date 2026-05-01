// Sections 3: Guides, FAQ, Footer
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

const Guides = ({ mobile }) => (
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
          <span>If gambling stops being fun, free help is available 24/7. Visit <a href="#">BeGambleAware</a> or call the National Gambling Helpline on 0808 8020 133.</span>
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

const Footer = ({ mobile }) => (
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
          <p style={{ fontSize: 13, color: "var(--text-3)", maxWidth: 320, marginTop: 12 }}>
            Independent comparison of UK-licensed bookmakers. We help bettors find safer sites and better value.
          </p>
        </div>
        <div className="ls-footer-col">
          <h5>Site</h5>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#how-we-rank">Methodology</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Editorial standards</a></li>
          </ul>
        </div>
        <div className="ls-footer-col">
          <h5>Help</h5>
          <ul>
            <li><a href="#">Responsible gambling</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#bonus-guide">Bonus guide</a></li>
            <li><a href="#">Glossary</a></li>
          </ul>
        </div>
        <div className="ls-footer-col">
          <h5>Legal</h5>
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Affiliate disclosure</a></li>
            <li><a href="#">Cookies</a></li>
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

Object.assign(window, { Guides, FAQ, Footer });
