function rotateRight(head, k) {
  if (!head || !head.next || k === 0) return head;
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }
  tail.next = head;
  k = k % length;
  for (let i = 0; i < length - k; i++) {
    tail = tail.next;
  }
  const newHead = tail.next;
  tail.next = null;
  return newHead;
}

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let res = rotateRight(head, 2);
let arr = [];
while (res) {
  arr.push(res.val);
  res = res.next;
}
console.log(arr);