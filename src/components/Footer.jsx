import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sumi text-washi/60 mt-24">
      <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-body">
        <div className="flex items-center gap-2">
          <span className="hanko-seal scale-75 origin-left">達</span>
          <span>Daruma Burger — hecho con fuego, servido en minutos.</span>
        </div>
        <Link href="/privacidad" className="hover:text-washi">
          Política de privacidad y tratamiento de datos
        </Link>
      </div>
    </footer>
  );
}
