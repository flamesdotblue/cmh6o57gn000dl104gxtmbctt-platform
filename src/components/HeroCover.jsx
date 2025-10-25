import Spline from '@splinetool/react-spline';

function HeroCover() {
  return (
    <header className="relative h-[380px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-end pb-8 text-center">
        <div className="px-6">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase text-white/80 ring-1 ring-white/15">Crypto • Fintech • Tracker</span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            Track your money with style
          </h1>
          <p className="mt-2 text-white/70">
            Shiny, holographic coins spin while you master your cashflow.
          </p>
        </div>
      </div>
    </header>
  );
}

export default HeroCover;
