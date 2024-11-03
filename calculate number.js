function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  return average;
}

const ar = [1, 3, 9, 15, 90];
const average = calculateAverage(ar);
console.log(average);