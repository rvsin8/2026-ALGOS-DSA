function addTwoNumbers(l1, l2) {
    const sentinel = new ListNode(0);
    let current = sentinel;
    let sum = 0;
    let carry = 0;
  
    while (l1 !== null || l2 !== null || sum > 0) {
      if (l1 !== null) {
        sum = l1.val + sum;
        l1 = l1.next
      };
  
      if (l2 !== null) {
        sum = l2.val + sum;
        l2 = l2.next;
      };
  
      if (sum >= 10) {
        sum -= 10;
        carry = 1; 
      }
  
      current.next = new ListNode(sum);
      current = current.next;
      sum = carry;
      carry = 0;
    }
  
    return sentinel.next;
  };