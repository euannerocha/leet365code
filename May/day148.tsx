type Item = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

class ShoppingCart {
  private items: Item[] = [];

  addItem(item: Item): void {
    const existing = this.items.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  }

  removeItem(itemId: number): void {
    this.items = this.items.filter(i => i.id !== itemId);
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  listItems(): Item[] {
    return this.items;
  }
}

const cart = new ShoppingCart();
cart.addItem({ id: 1, name: "Apple", price: 1.5, quantity: 2 });
cart.addItem({ id: 2, name: "Banana", price: 1.0, quantity: 3 });
cart.addItem({ id: 1, name: "Apple", price: 1.5, quantity: 1 });

console.log(cart.listItems());
console.log("Total:", cart.getTotal());