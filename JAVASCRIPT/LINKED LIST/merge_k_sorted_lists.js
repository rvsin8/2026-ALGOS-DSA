var mergeKLists = function(lists) {
    if (!lists.length) return null;
    return mergeRange(lists, 0, lists.length-1)
};

function mergeRange(lists, start, end) {
    if (start === end) return lists[start];
    const mid = Math.floor((start+end)/2);
    const left = mergeRange(lists, start, mid);
    const right = mergeRange(lists, mid+1, end);
    return mergedTwoLists(left, right)
};

function mergedTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 ? l1 : l2;
    return dummy.next;
};