function minLegnth(word: number[]): number {
  return word.reduce((total, current) => (total *= current), 1);
}
