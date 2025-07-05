class Order {
  quantity: number;
  item: { price: number };

  constructor(quantity: number, item: { price: number }) {
    this.quantity = quantity;
    this.item = item;
  }

  get finalPrice() {
    const basePrice = this.quantity * this.item.price;
    let discountLevel;
    if (this.quantity > 100) {
      discountLevel = 2;
    } else {
      discountLevel = 1;
    }
    return this.discountedPrice(basePrice, discountLevel);
  }

  discountedPrice(basePrice: number, discountLevel: number) {
    switch (discountLevel) {
      case 1:
        return basePrice * 0.98;
      case 2:
        return basePrice * 0.95;
      default:
        throw new Error("Invalid discount level");
    }
  }
}

// Example usage:
const order = new Order(120, { price: 10 });
console.log(order.finalPrice); // Should print the discounted price