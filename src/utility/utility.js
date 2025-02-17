function calculateDiscount(originalPrice, discountPrice) {
  const original = parseFloat(originalPrice.replace("$", ""));
  const discount = parseFloat(discountPrice.replace("$", ""));
  const discountPercentage = ((original - discount) / original) * 100;
  return parseFloat(discountPercentage.toFixed(2));
}

export {calculateDiscount}