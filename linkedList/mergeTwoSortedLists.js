const mergeTwoLists = (l1, l2) => {
  let new_list = null;
  let current_new_list = null;
  let current_l1 = l1;
  let current_l2 = l2;

  while (current_l1 || current_l2) {
    if (current_l1 === null) {
      if (!new_list) {
        new_list = new ListNode(current_l2.val);
        current_new_list = new_list;
        current_l2 = current_l2.next;
      } else {
        current_new_list.next = new ListNode(current_l2.val);
        current_new_list = current_new_list.next;
        current_l2 = current_l2.next;
      }
    } else if (current_l2 === null) {
      if (!new_list) {
        new_list = new ListNode(current_l1.val);
        current_new_list = new_list;
        current_l1 = current_l1.next;
      } else {
        current_new_list.next = new ListNode(current_l1.val);
        current_new_list = current_new_list.next;
        current_l1 = current_l1.next;
      }
    } else if (current_l1.val < current_l2.val) {
      if (!new_list) {
        new_list = new ListNode(current_l1.val);
        current_new_list = new_list;
        current_l1 = current_l1.next;
      } else {
        current_new_list.next = new ListNode(current_l1.val);
        current_new_list = current_new_list.next;
        current_l1 = current_l1.next;
      }
    } else if (current_l2.val < current_l1.val) {
      if (!new_list) {
        new_list = new ListNode(current_l2.val);
        current_new_list = new_list;
        current_l2 = current_l2.next;
      } else {
        current_new_list.next = new ListNode(current_l2.val);
        console.log("new", new_list);
        current_new_list = current_new_list.next;
        current_l2 = current_l2.next;
      }
    } else if (current_l2.val === current_l1.val) {
      if (!new_list) {
        new_list = new ListNode(current_l1.val);
        new_list.next = new ListNode(current_l2.val);
        current_new_list = new_list.next;

        current_l1 = current_l1.next;
        current_l2 = current_l2.next;
      } else {
        current_new_list.next = new ListNode(current_l1.val);
        current_new_list.next.next = new ListNode(current_l2.val);

        current_new_list = current_new_list.next.next;

        current_l1 = current_l1.next;
        current_l2 = current_l2.next;
      }
    }
  }

  return new_list;
};
