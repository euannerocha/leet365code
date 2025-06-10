type Node<T> = {
  value: T;
  next?: Node<T>;
};

class LinkedList<T> {
  private head?: Node<T>;

  add(value: T): void {
    const newNode: Node<T> = { value };
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  reverse(): void {
    let prev: Node<T> | undefined = undefined;
    let current = this.head;
    let next: Node<T> | undefined;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

class Graph<T> {
  private adjList: Map<T, T[]> = new Map();

  addVertex(vertex: T): void {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(vertex1: T, vertex2: T): void {
    if (!this.adjList.has(vertex1)) this.addVertex(vertex1);
    if (!this.adjList.has(vertex2)) this.addVertex(vertex2);

    this.adjList.get(vertex1)?.push(vertex2);
    this.adjList.get(vertex2)?.push(vertex1);
  }

  dfs(start: T): T[] {
    const visited = new Set<T>();
    const result: T[] = [];
    const stack: T[] = [start];

    while (stack.length) {
      const vertex = stack.pop()!;
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);
        const neighbors = this.adjList.get(vertex);
        if (neighbors) {
          for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
              stack.push(neighbor);
            }
          }
        }
      }
    }

    return result;
  }
}

const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
list.reverse();
console.log(list.toArray());

const graph = new Graph<string>();
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
console.log(graph.dfs('A'));