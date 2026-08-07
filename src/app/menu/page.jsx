import MenuCard from "@/components/MenuCard";
import Footer from "@/components/Footer";
import { menuCategories, products } from "@/data/menuData";

export const metadata = {
  title: "Menú — Daruma Burger",
};

export default function MenuPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-5 pt-14 pb-4">
        <h1 className="font-display font-extrabold text-3xl md:text-4xl">
          <span className="brush-underline">Elige tu Daruma.</span>
        </h1>
      </div>

      {menuCategories.map((category) => {
        const items = products.filter((p) => p.category === category.id);
        if (items.length === 0) return null;

        return (
          <section key={category.id} className="max-w-6xl mx-auto px-5 py-8">
            <h2 className="font-display font-bold text-xl mb-5">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((product) => (
                <MenuCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      })}

      <Footer />
    </>
  );
}
