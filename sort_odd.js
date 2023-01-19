function sortOddNumbers(arr) {
  // Create an array to store the odd numbers
  const oddNumbers = arr.filter((num) => num % 2 !== 0);

  // Sort the odd numbers in ascending order
  oddNumbers.sort((a, b) => a - b);

  // Iterate through the original array
  for (let i = 0; i < arr.length; i++) {
    // If the current element is odd, replace it with the next element from the sorted odd numbers array
    if (arr[i] % 2 !== 0) {
      arr[i] = oddNumbers.shift();
    }
  }

  return arr;
}
