import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sumi text-washi/60 mt-24">
      <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-body">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.jpeg" 
            alt="Daruma Burger Bogota" 
            className="w-8 h-8 rounded-full object-cover" 
          />
          <span className="font-display font-bold text-washi text-base">
            Daruma Burger Bogota
          </span>
        </div>
        <Link href="/privacidad" className="hover:text-washi text-xs">
          Política de privacidad y tratamiento de datos
        </Link>
      </div>
    </footer>
  );
}
