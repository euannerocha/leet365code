
class ListNodeVN {
  val: number
  next: ListNodeVN | null
  constructor(val?: number, next?: ListNodeVN | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reverseList(head: ListNodeVN | null): ListNodeVN | null {
  let prev: ListNodeVN | null = null;
  let current = head;

  while (current !== null) {
    const nextNode = current.next;  
    current.next = prev;            
    prev = current;                
    current = nextNode;            
  }

  return prev;
}
