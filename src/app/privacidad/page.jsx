export const metadata = { title: "Privacidad — Daruma Burger" };

export default function PrivacidadPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-16 font-body text-sm leading-relaxed text-sumi/80">
      <h1 className="font-display font-bold text-2xl mb-6 text-sumi">
        Política de privacidad y tratamiento de datos
      </h1>
      <p className="mb-4">
        Los datos que ingresas al hacer un pedido (nombre, teléfono,
        dirección) se usan únicamente para procesar y entregar tu pedido, y
        se envían directamente a nuestro WhatsApp comercial. No almacenamos
        estos datos en ningún servidor ni base de datos, y no los
        compartimos con terceros.
      </p>
      <p>
        Este sitio no procesa ni almacena datos de tarjetas de crédito o
        débito.
      </p>
    </div>
  );
}
