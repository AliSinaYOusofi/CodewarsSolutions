function scramble(str1, str2) {
  let letterCounts = {};
  for (let i = 0; i < str1.length; i++) {
    if (letterCounts[str1[i]] === undefined) {
      letterCounts[str1[i]] = 1;
    } else {
      letterCounts[str1[i]] += 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (letterCounts[str2[i]] === undefined || letterCounts[str2[i]] === 0) {
      return false;
    } else {
      letterCounts[str2[i]] -= 1;
    }
  }

  return true;
}
