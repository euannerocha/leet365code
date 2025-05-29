//improving previous code

class ShoppingCart {
  private items: Item[] = [];

  addItem(item: Item): void {
    if (item.quantity <= 0 || item.price < 0) return;

    this.items = this.items.map(i =>
      i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
    );

    if (!this.items.find(i => i.id === item.id)) {
      this.items.push(item);
    }
  }

  removeItem(itemId: number): void {
    this.items = this.items.filter(i => i.id !== itemId);
  }

  getTotal(): number {
    return Math.round(this.items.reduce((sum, item) => sum + item.price * item.quantity, 0) * 100) / 100;
  }

  listItems(): Item[] {
    return [...this.items];
  }
}