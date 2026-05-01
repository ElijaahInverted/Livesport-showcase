export const BOOKMAKERS = [
  {
    id: "A",
    name: "Bookmaker A",
    label: "Best overall",
    color: "#E4002B",
    rating: 4.8,
    bonus: "Bet £10, Get £30 in Free Bets",
    bonusShort: "£30 Free Bets",
    minDeposit: 5,
    licence: "UKGC licensed",
    pros: ["Great football odds", "Fast withdrawals", "Polished mobile app"],
    cons: ["Limited horse racing offers", "No casino bundle"],
    summary:
      "A balanced all-rounder with strong football odds, dependable payouts and a mobile app that beginners and seasoned punters can pick up in minutes.",
    ratings: { Odds: 4.7, Markets: 4.8, App: 4.9, Payments: 4.6, Support: 4.5 },
    positioning: "Best overall for UK football betting",
  },
  {
    id: "B",
    name: "Bookmaker B",
    label: "Best for football",
    color: "#1E5EFF",
    rating: 4.7,
    bonus: "Bet £5, Get £20 in Free Bets",
    bonusShort: "£20 Free Bets",
    minDeposit: 5,
    licence: "UKGC licensed",
    pros: ["Deep football markets", "Live streaming included", "Cash-out on most bets"],
    cons: ["Average customer support hours", "Bonus has 7-day expiry"],
    summary:
      "Built for football fans, with deep market coverage from the Premier League down to the National League, plus live streaming on most fixtures.",
    ratings: { Odds: 4.8, Markets: 4.9, App: 4.6, Payments: 4.5, Support: 4.2 },
    positioning: "Best for Premier League and EFL coverage",
  },
  {
    id: "C",
    name: "Bookmaker C",
    label: "Best mobile app",
    color: "#F59E0B",
    rating: 4.6,
    bonus: "Bet £10, Get £25 in Free Bets",
    bonusShort: "£25 Free Bets",
    minDeposit: 10,
    licence: "UKGC licensed",
    pros: ["Smooth, fast app", "Bet builder tools", "Face ID login"],
    cons: ["Slightly fewer markets", "No web-only features"],
    summary:
      "A mobile-first operator with a fast, well-organised app, intuitive bet builder, and biometric login that makes it easy to place bets in seconds.",
    ratings: { Odds: 4.5, Markets: 4.4, App: 4.9, Payments: 4.6, Support: 4.4 },
    positioning: "Best mobile betting experience in the UK",
  },
  {
    id: "D",
    name: "Bookmaker D",
    label: "Best live betting",
    color: "#7C3AED",
    rating: 4.5,
    bonus: "Bet £10, Get £20 in Free Bets",
    bonusShort: "£20 Free Bets",
    minDeposit: 5,
    licence: "UKGC licensed",
    pros: ["Excellent in-play odds", "Real-time stat overlays", "Quick bet acceptance"],
    cons: ["Welcome offer is modest", "App can be busy on big match days"],
    summary:
      "Focuses on the in-play experience, with quick odds updates, live visualisations and a bet slip that handles rapid stake changes without errors.",
    ratings: { Odds: 4.7, Markets: 4.5, App: 4.6, Payments: 4.4, Support: 4.3 },
    positioning: "Best in-play and live betting platform",
  },
  {
    id: "E",
    name: "Bookmaker E",
    label: "Best for beginners",
    color: "#0FA968",
    rating: 4.4,
    bonus: "Bet £5, Get £15 in Free Bets",
    bonusShort: "£15 Free Bets",
    minDeposit: 5,
    licence: "UKGC licensed",
    pros: ["Simple interface", "Clear bonus terms", "Helpful tooltips"],
    cons: ["Fewer advanced markets", "No early payout offers"],
    summary:
      "A friendly entry point for new bettors, with a stripped-back interface, plain-English bonus terms and prompts that explain odds, stakes and returns.",
    ratings: { Odds: 4.3, Markets: 4.2, App: 4.6, Payments: 4.5, Support: 4.7 },
    positioning: "Best place to start if you are new to betting",
  },
  {
    id: "F",
    name: "Bookmaker F",
    label: "Best for high odds",
    color: "#0EA5BB",
    rating: 4.3,
    bonus: "Bet £10, Get £10 in Free Bets",
    bonusShort: "£10 Free Bets",
    minDeposit: 10,
    licence: "UKGC licensed",
    pros: ["Consistently strong prices", "Best Odds Guaranteed on racing", "Acca boosts"],
    cons: ["Smaller welcome offer", "No live streaming on football"],
    summary:
      "Sharper prices than most rivals on football and racing, plus a regular Best Odds Guaranteed promise that appeals to value-driven punters.",
    ratings: { Odds: 4.9, Markets: 4.4, App: 4.3, Payments: 4.4, Support: 4.2 },
    positioning: "Best odds and price boosts for value seekers",
  },
];

export const CRITERIA = [
  { id: "safety", title: "Safety & Licensing", body: "We only list operators with a current UK Gambling Commission licence." },
  { id: "odds", title: "Odds & Markets", body: "We benchmark prices on 50+ events to compare value across operators." },
  { id: "app", title: "Mobile App & UX", body: "We test apps on iOS and Android for speed, reliability and clarity." },
  { id: "pay", title: "Payments & Withdrawals", body: "We measure deposit options, withdrawal speed and fees in real conditions." },
  { id: "support", title: "Customer Support", body: "We contact support across channels and rate response time and helpfulness." },
];

export const CATEGORIES = [
  { title: "Best for football", desc: "Deep market coverage from the Premier League to non-league.", picks: ["A", "B", "F"] },
  { title: "Best live betting", desc: "Fast in-play odds and reliable cash-out at peak times.", picks: ["D", "B", "A"] },
  { title: "Best mobile apps", desc: "Polished iOS and Android apps that load quickly and stay stable.", picks: ["C", "A", "D"] },
  { title: "Best for high odds", desc: "Sharper prices and Best Odds Guaranteed on key markets.", picks: ["F", "B", "A"] },
  { title: "Best for beginners", desc: "Simple layouts, clear bonus terms and friendly support.", picks: ["E", "A", "C"] },
];

export const FAQS = [
  {
    q: "Are online betting sites legal in the UK?",
    a: "Yes. Online betting is legal in the UK for adults aged 18 and over, provided the operator holds a current UK Gambling Commission licence. Every site we list on Livesport is licensed by the UKGC.",
  },
  {
    q: "What is the safest betting site?",
    a: "The safest sites combine a UKGC licence with robust identity checks, segregated player funds and clear responsible gambling tools. Our methodology weights these factors before any bonus offer is considered.",
  },
  {
    q: "Do I have to pay tax on my winnings?",
    a: "Recreational betting winnings are not taxed for UK residents. The bookmakers themselves pay duties to HMRC. Always check current rules with HMRC if your circumstances are unusual.",
  },
  {
    q: "How do I know if a bookmaker is licensed?",
    a: "Every licensed UK operator must display its licence number and a link to its UKGC public register entry, usually in the footer. You can verify any licence directly on the UKGC website.",
  },
  {
    q: "What is a wagering requirement?",
    a: "A wagering requirement is the number of times you must stake a bonus before you can withdraw winnings from it. Lower is better. Most reputable UK free bet offers have no rollover on winnings, only on the qualifying bet.",
  },
  {
    q: "What is the difference between fixed odds and a free bet?",
    a: "Fixed odds use your own money and return your stake plus winnings if you win. A free bet uses bonus credit and typically returns winnings only — your stake is not returned.",
  },
  {
    q: "Can I have accounts at more than one bookmaker?",
    a: "Yes. Many bettors hold accounts at several sites to compare odds and claim multiple welcome bonuses. Use the same verified identity at each site and keep your records organised.",
  },
  {
    q: "How quickly can I withdraw my winnings?",
    a: "Withdrawal times vary. Bank transfers usually take 1–3 working days, while e-wallets are often instant once a withdrawal is approved. We measure this directly in our reviews.",
  },
  {
    q: "What should I do if I think I have a gambling problem?",
    a: "Use the deposit limits, time-outs and self-exclusion tools at every UKGC-licensed site. Free, confidential help is available from BeGambleAware, GamCare and the National Gambling Helpline on 0808 8020 133.",
  },
];

export const NAV_LINKS = [
  { href: "#top10", label: "Top 10 Sites" },
  { href: "#reviews", label: "Reviews" },
  { href: "#categories", label: "Best by Category" },
  { href: "#bonus-guide", label: "Bonus Guide" },
  { href: "#faq", label: "FAQ" },
];
