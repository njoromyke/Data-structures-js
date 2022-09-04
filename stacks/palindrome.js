import Stack from "./stack.js";
// // A palindrome is a word, phrase, or number that is spelled the same forward and back‐
// ward. For example, “dad” is a palindrome; “racecar” is a palindrome; “A man, a plan, a
// canal: Panama” is a palindrome if you

function isPalindrome(word) {
  var stack = new Stack();
  for (var i = 0; i < word.length; ++i) {
    stack.push(word[i]);
    console.log(stack.dataStore);
  }
  var reverseWord = "";
  while (stack.length() > 0) {
    reverseWord += stack.pop();
    console.log(reverseWord);
  }
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}

var word = "Mike";
console.log(isPalindrome(word));
