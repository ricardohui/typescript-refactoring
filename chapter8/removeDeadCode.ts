if (false) {
  ([] as Order[]).filter(order => {
    return order.priority.higherThan(new Priority("normal"));
  });
}