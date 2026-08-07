import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-sumi/10 bg-washi py-6 px-4 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.jpeg" 
            alt="Daruma Burger Bogota" 
            className="h-9 w-9 object-cover rounded-full" 
          />
          <span className="font-display font-bold text-lg">
            Daruma Burger Bogota
          </span>
        </div>
        <p className="text-xs text-sumi/60">
          Política de privacidad y tratamiento de datos
        </p>
      </div>
    </footer>
  );
}
