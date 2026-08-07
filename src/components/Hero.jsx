import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-sumi text-washi overflow-hidden">
      {/* Imagen de fondo con capa oscura para proteger la lectura del texto */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpeg"
          alt="Daruma Burger"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Degradado para darle mejor contraste al texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-sumi via-sumi/70 to-transparent" />
      </div>

      {/* Contenido principal por encima de la imagen */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 py-24 md:py-32 flex flex-col items-start gap-6">
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
