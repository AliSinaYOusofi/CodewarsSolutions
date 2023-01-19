function trailingZeros(num) {
  let count = 0;
  for (let i = 5; num / i >= 1; i *= 5) {
    count += Math.floor(num / i);
  }
  return count;
}
