import Hero from "@/components/Hero";
import MenuCard from "@/components/MenuCard";
import { products } from "@/data/menuData";

export default function HomePage() {
  const destacados = products.filter((p) => p.category === "burgers");

  return (
    <>
      <Hero />

      <section className="bg-washi border-y border-sumi/10">
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-20">
          <div className="flex flex-col items-start gap-4 max-w-2xl">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl leading-tight">
              El Wagyu, a nuestra manera.
            </h2>
            <p className="font-body text-sumi/70 text-base md:text-lg">
              El Wagyu suele disfrutarse de una forma más tradicional.
              Nosotros decidimos llevarlo al mundo de la hamburguesa.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="font-display font-bold text-2xl mb-1">
          <span className="brush-underline">Destacadas</span>
        </h2>
        <p className="font-body text-sumi/60 text-sm mb-8">
          Las favoritas de la casa.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destacados.map((product) => (
            <MenuCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
