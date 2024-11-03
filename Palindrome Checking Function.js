function isPalindrome(str) {
  const normalizedStr = str.replace (/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedStr = normalizedStr.split('').reverse().join('');
  return normalizedStr === reversedStr;
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("mom"));
console.log(isPalindrome("radar"));
console.log(isPalindrome("refer"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Rayatul,Maliha,Mahim"));
console.log(isPalindrome("No 'x' in Nixon"));
console.log(isPalindrome("12321"));
console.log(isPalindrome("12345"));
