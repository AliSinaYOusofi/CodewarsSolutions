export const isPangram = (phrase: string): boolean => {
  if (phrase.length <= 26) return false;

  let alphas = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  phrase = phrase.toLocaleLowerCase();
  let result: string[] = phrase
    .split("")
    .filter((item) => alphas.includes(item));

  return [...new Set(result)].length === 26;
};
