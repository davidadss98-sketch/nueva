import "./globals.css";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Daruma Burger",
  description: "Wagyu. A nuestra manera. Pide por WhatsApp en minutos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-body bg-washi text-sumi min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <CartDrawer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
