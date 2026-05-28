export function validateCheckout(form, cartCount) {
  const errors = {}
  if (cartCount === 0) errors.cart = 'Agrega al menos un producto antes de confirmar.'
  if (!form.name.trim()) errors.name = 'Ingresa tu nombre.'
  if (!/^\d{9}$/.test(form.phone.trim())) errors.phone = 'Ingresa un celular válido de 9 dígitos.'
  if (!form.deliveryType) errors.deliveryType = 'Selecciona un tipo de entrega.'
  if (!form.campusPoint) errors.campusPoint = 'Selecciona un punto de entrega o recojo.'
  if (!form.paymentMethod) errors.paymentMethod = 'Selecciona un método de pago.'
  return errors
}
