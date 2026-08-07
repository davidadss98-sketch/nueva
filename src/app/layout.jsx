import "./globals.css";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Daruma Burger Bogota",
  description: "Wagyu. A nuestra manera. Pide por WhatsApp en minutos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-body bg-washi text-sumi min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        
        {/* Footer limpio con tu logo y el texto solicitado */}
        <footer className="w-full border-t border-sumi/10 bg-washi py-6 px-4">
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

        <CartDrawer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
