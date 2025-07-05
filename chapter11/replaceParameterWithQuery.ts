class Order {
  quantity: number;
  item: { price: number };

  constructor(quantity: number, item: { price: number }) {
    this.quantity = quantity;
    this.item = item;
  }

  get discountLevel() {
    if (this.quantity > 100) {
      return 2;
    } else {
      return 1;
    }
  }

  get finalPrice() {
    const basePrice = this.quantity * this.item.price;
    return this.discountedPrice(basePrice);
  }

  discountedPrice(basePrice: number) {
    switch (this.discountLevel) {
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