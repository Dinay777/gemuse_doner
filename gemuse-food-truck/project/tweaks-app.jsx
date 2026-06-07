const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#C43C2E",
  "warmAccent": "#C9973B"
}/*EDITMODE-END*/;

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--red', t.accentColor);
    r.style.setProperty('--gold', t.warmAccent);
  }, [t.accentColor, t.warmAccent]);

  return (
    <TweaksPanel>
      <TweakSection label="Colors" />
      <TweakColor label="Accent"
        value={t.accentColor}
        options={['#C43C2E', '#B85C38', '#5E8C61', '#4A6FA5']}
        onChange={v => setTweak('accentColor', v)} />
      <TweakColor label="Warm Accent"
        value={t.warmAccent}
        options={['#C9973B', '#B07030', '#A8956E']}
        onChange={v => setTweak('warmAccent', v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<TweaksApp />);
