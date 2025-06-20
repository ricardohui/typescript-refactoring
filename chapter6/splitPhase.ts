function priceOrder(product, quantity, shippingMethod) {
  const priceData = calculatePricingData(product, quantity);
  return applyShipping(priceData, shippingMethod);
}

function calculatePricingData(product: any, quantity: any) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
  return { basePrice: basePrice, quantity: quantity, discount: discount };
}

function applyShipping(priceData, shippingMethod){
  const shippingPerCase = (priceData.basePrice < shippingMethod.discountThreshold) ? shippingMethod.feePerCase : shippingMethod.discountedFee;
  const shippingCost = priceData.quantity * shippingPerCase;
  return priceData.basePrice - priceData.discount + shippingCost;
}