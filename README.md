# Daruma Burger

Sitio de pedidos 100% estático: menú → carrito → datos de entrega → pedido
enviado directo a WhatsApp. Sin base de datos, sin backend, sin pasarela de
pago integrada (pago contraentrega o transferencia manual).

## 1. Antes de usarlo

Edita estos dos archivos con tus datos reales:

- `src/utils/whatsapp.js` → cambia `RESTAURANT_PHONE` por tu número de
  WhatsApp Business (formato: código de país + número, sin `+` ni espacios,
  ej: `573001234567`).
- `src/data/menuData.js` → cambia productos, precios y descripciones.
  Si quieres fotos reales en vez de emojis, reemplaza el campo `emoji` por
  una imagen y ajusta `MenuCard.jsx` para usar `next/image`.

## 2. Correr en local

Necesitas Node.js 18 o superior instalado.

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## 3. Desplegar gratis en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. Entra a vercel.com, conecta el repositorio (detecta Next.js
   automáticamente).
3. Click en "Deploy". Cada push a tu rama principal se publica solo.
4. Opcional: conecta tu dominio propio (`.com` o `.co`) desde el panel de
   Vercel — es el único costo recurrente de todo el proyecto.

## 4. ¿Por qué no incluye pasarela de pago (Wompi u otra)?

Un checkout con pasarela de pago requiere un backend que reciba el webhook
del proveedor y verifique la transacción del lado del servidor; confiar
solo en la respuesta que llega al navegador es inseguro, porque se puede
manipular para simular un pago aprobado. Para un solo local, con volumen
bajo/medio, es más simple y igual de efectivo cobrar contraentrega o por
transferencia confirmada por WhatsApp — cero backend, cero costos fijos,
cero superficie de fraude.

Si más adelante el volumen de pedidos lo justifica, se puede agregar un
backend ligero (por ejemplo con Vercel Functions) solo para verificar pagos
de Wompi vía webhook, sin tocar el resto del sitio.

## 5. Estructura

```
src/
├── app/
│   ├── layout.jsx        # Estructura global
│   ├── page.jsx          # Inicio (hero + destacadas)
│   ├── menu/page.jsx     # Menú completo
│   ├── checkout/page.jsx # Datos de entrega + envío a WhatsApp
│   └── privacidad/page.jsx
├── components/           # Navbar, Hero, MenuCard, CartDrawer, WhatsAppButton, Footer
├── data/menuData.js      # Productos y precios
├── store/useCartStore.js # Carrito (Zustand)
└── utils/whatsapp.js     # Formato COP + mensaje de WhatsApp
```
