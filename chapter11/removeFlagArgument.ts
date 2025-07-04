function deliveryDate(anOrder, isRush) {
  if (isRush) {
    let deliiveryTime;
    if (["MA", "CT"].includes(anOrder.deliveryState)) {
      deliiveryTime = 1;
    } else if (["NY", "NH"].includes(anOrder.deliveryState)) {
      deliiveryTime = 2;
    } else {
      deliiveryTime = 3;
    }
    return anOrder.placeOn.plusDays(1+ deliiveryTime);
  
  } else {
    let deliveryTime;
    if (["MA", "CT"].includes(anOrder.deliveryState)) {
      deliveryTime = 2;
    } else if (["NY", "NH"].includes(anOrder.deliveryState)) {
      deliveryTime = 3;
    } else {
      deliveryTime = 4;
    }
    return anOrder.placeOn.plusDays(2 + deliveryTime);
  }
}