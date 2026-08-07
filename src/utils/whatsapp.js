export const RESTAURANT_PHONE = "573000000000"; // TODO: reemplazar por el número real del local

export const formatCOP = (value) =>
  value.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });

export const buildOrderMessage = (order) => {
  let text = `🚨 *NUEVO PEDIDO - DARUMA BURGER* 🚨\n\n`;
  text += `👤 *Cliente:* ${order.fullName}\n`;
  text += `📞 *Teléfono:* ${order.phone}\n`;
  text += `📍 *Dirección:* ${order.address} (${order.city})\n`;
  text += `💳 *Forma de pago:* ${order.paymentMethod}\n`;
  if (order.notes) text += `📝 *Instrucciones:* ${order.notes}\n`;
  text += `\n🍔 *DETALLE DEL PEDIDO:*\n`;

  order.items.forEach((item) => {
    text += `- ${item.quantity}x ${item.name} (${formatCOP(
      item.price * item.quantity
    )})\n`;
  });

  text += `\n💰 *TOTAL: ${formatCOP(order.total)}*`;

  return text;
};

export const buildWhatsAppUrl = (message, phone = RESTAURANT_PHONE) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
