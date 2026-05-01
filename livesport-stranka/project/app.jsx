// Composes the full landing page; renders inside DC artboards
const TWEAKS = /*EDITMODE-BEGIN*/{
  "tone": "dark"
}/*EDITMODE-END*/;

const Landing = ({ mobile }) => {
  const [showSticky, setShowSticky] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onScroll = () => setShowSticky(node.scrollTop > 600);
    node.addEventListener("scroll", onScroll);
    return () => node.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div ref={ref} className={"ls-root" + (mobile ? " ls-mob" : "")} style={{ width: "100%", height: "100%", overflow: "auto", position: "relative" }}>
      <Nav mobile={mobile} />
      <Comparison mobile={mobile} />
      <Reviews mobile={mobile} />
      <Categories mobile={mobile} />
      <Guides mobile={mobile} />
      <FAQ mobile={mobile} />
      <Footer mobile={mobile} />
      {showSticky && !mobile && (
        <button className="ls-stickytop" onClick={() => ref.current.scrollTo({ top: 0, behavior: "smooth" })}>
          {Icon.arrowRight()} Back to top
        </button>
      )}
    </div>
  );
};

// Tweaks panel
const TweaksControls = () => {
  const [tweaks, setTweak] = useTweaks(TWEAKS);
  React.useEffect(() => {
    const els = document.querySelectorAll(".ls-root");
    els.forEach((el) => {
      el.classList.remove("tone-mid", "tone-light");
      if (tweaks.tone === "mid") el.classList.add("tone-mid");
      if (tweaks.tone === "light") el.classList.add("tone-light");
    });
  }, [tweaks.tone]);
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Background tone">
        <TweakRadio
          value={tweaks.tone}
          onChange={(v) => setTweak("tone", v)}
          options={[
            { value: "dark", label: "Dark" },
            { value: "mid", label: "Mid" },
            { value: "light", label: "Light" },
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
};

// Mount on canvas
const App = () => (
  <DesignCanvas
    title="Livesport — Best Betting Sites UK 2026"
    subtitle="Affiliate comparison landing · desktop + mobile · placeholder content"
  >
    <DCSection id="landing" title="Landing page">
      <DCArtboard id="desktop" label="Desktop · 1440" width={1440} height={2900}>
        <Landing mobile={false} />
      </DCArtboard>
      <DCArtboard id="mobile" label="Mobile · 390" width={390} height={4200}>
        <Landing mobile={true} />
      </DCArtboard>
    </DCSection>
    <TweaksControls />
  </DesignCanvas>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
