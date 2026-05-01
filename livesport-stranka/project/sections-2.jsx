// Sections 2: Methodology, Detailed Reviews, Categories
const METH_ICONS = {
  safety: Icon.shield(18), odds: Icon.bolt(18), app: Icon.phone(18),
  pay: Icon.card(18), support: Icon.chat(18), rg: Icon.heart(18),
};

const Methodology = ({ mobile }) => (
  <section className="ls-section" id="how-we-rank">
    <div className="ls-wrap">
      <div className="ls-method-grid">
        <div className="ls-method-text">
          <span className="ls-eyebrow">Methodology</span>
          <h2 className="ls-h2">How We Rank the Best Betting Sites</h2>
          <p>
            Every operator on Livesport goes through the same six-stage review. We open real-money accounts, place bets across multiple sports, deposit and withdraw on every supported method, and contact customer support before publishing a single rating.
          </p>
          <p>
            Rankings are reviewed monthly. Operators that fall short on safety, payments or support are removed — regardless of any commercial relationship.
          </p>
          <div className="ls-author">
            <div className="ls-author-avatar">JM</div>
            <div>
              <div className="ls-author-name">Jamie Marsh</div>
              <div className="ls-author-role">Lead sports betting analyst · 12+ years experience</div>
            </div>
          </div>
        </div>
        <div className="ls-criteria">
          {CRITERIA.map((c) => (
            <div key={c.id} className="ls-criterion">
              <span className="ls-criterion-icon">{METH_ICONS[c.id]}</span>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Reviews = ({ mobile }) => (
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
              <div className="ls-bonus-block-terms">New customers only · 18+ · T&Cs apply · <a href="#" style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>View terms</a></div>
            </div>
            <a className="ls-btn ls-btn-primary">Claim bonus {Icon.external(11)}</a>
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
            <a className="ls-btn ls-btn-primary">Visit {bm.name} {Icon.external(11)}</a>
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
                return <Mono key={id} bm={bm} size="sm" />;
              })}
              <span className="ls-cat-picks-text">
                {c.picks.map((id) => BOOKMAKERS.find((b) => b.id === id).name).join(" · ")}
              </span>
            </div>
            <a href={`#review-${c.picks[0]}`} className="ls-cat-link">View details {Icon.arrowRight()}</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { Methodology, Reviews, Categories });
