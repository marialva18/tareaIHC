export const orderSteps = ['Pedido recibido', 'En preparación', 'Listo para recoger', 'Entregado']

export function createOrderId() {
  return `CF-${Math.floor(1000 + Math.random() * 9000)}`
}
