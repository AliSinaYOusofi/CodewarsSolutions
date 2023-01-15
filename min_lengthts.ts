function minLegnth(word: string): number {
  let min: number = word.split(" ")[0];
  word
    .split(" ")
    .forEach((item) => (min = min.length >= item.length ? item : min));
  return min;
}
