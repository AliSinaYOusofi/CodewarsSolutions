function duplicateEncode(word: string) {
  return word
    .toLowerCase()
    .split("")
    .map((char, index, array) =>
      array.indexOf(char) == array.lastIndexOf(char) ? "(" : ")"
    )
    .join("");
}
