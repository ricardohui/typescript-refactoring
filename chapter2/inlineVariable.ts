function basePriceGreaterThan1000(order: { basePrice: number }) {
  const basePrice = order.basePrice;
  return basePrice > 1000;
}