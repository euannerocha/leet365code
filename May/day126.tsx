
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function pairSum(head: ListNode | null): number {
    if (head === null) return 0;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    let prev: ListNode | null = null;
    let curr: ListNode | null = slow;

    while (curr !== null) {
        const nextNode: ListNode | null = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    let maxSum = 0;
    let first: ListNode | null = head;
    let second: ListNode | null = prev;

    while (second !== null && first !== null) {
        maxSum = Math.max(maxSum, first.val + second.val);
        first = first.next;
        second = second.next;
    }

    return maxSum;
}
