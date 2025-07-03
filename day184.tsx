class EventEmitter {
  private events: Map<string, Set<(...args: any[]) => void>> = new Map();

  on(event: string, listener: (...args: any[]) => void): void {
    if (!this.events.has(event)) this.events.set(event, new Set());
    this.events.get(event)!.add(listener);
  }

  off(event: string, listener: (...args: any[]) => void): void {
    this.events.get(event)?.delete(listener);
  }

  emit(event: string, ...args: any[]): void {
    this.events.get(event)?.forEach(listener => listener(...args));
  }
}

const emitter = new EventEmitter();

const greet = (name: string) => console.log(`Hello, ${name}!`);
emitter.on("welcome", greet);
emitter.emit("welcome", "Anne");
emitter.off("welcome", greet);
emitter.emit("welcome", "Ezra");