import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-sumi text-washi">
      <div className="max-w-6xl mx-auto px-5 py-24 md:py-32 flex flex-col items-start gap-6">
        <span className="font-mono text-xs tracking-[0.2em] text-washi/60 uppercase">
          Daruma Burger · Bogotá
        </span>
        <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[1.02] max-w-2xl">
          <span className="brush-underline">Wagyu.</span>
          <br />
          A nuestra manera.
        </h1>
        <p className="font-body text-washi/70 text-lg max-w-md">
          Una forma diferente de disfrutar Wagyu: en una hamburguesa, hecha al
          momento.
        </p>
        <Link
          href="/menu"
          className="mt-2 bg-hanko text-washi font-body font-semibold px-6 py-3 rounded-sm2 hover:bg-hanko/90 transition-colors"
        >
          Ver menú →
        </Link>
      </div>
    </section>
  );
}
