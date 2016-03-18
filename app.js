/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

export function max(a, b){
    if (a > b) {
      return(a);
    }

    else {
      return(b);
    }
}

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

export function maxOfThree(a, b, c){

    if (a > b && a > c) {
      return a;
    }

    else if (b > a && b > c) {
      return b;
    }

    else if (c > a && c > b){
      return c;
    }
}

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

export function isVowel(char){

    if (char === "a" || char === "A") {
      return(true);
    }

    else if (char === "e" || char === "E") {
      return(true);

    }

    else if (char === "i" || char === "I") {
      return(true);

    }

    else if (char === "o" || char === "O") {
      return(true);

    }

    else if (char === "u" || char === "U") {
      return(true);

    }

    else {
      return(false);
    }
}

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

export function rovarspraket(input) {
    var newString = ""
    for (var i = 0; i < input.length; i++) {
      if (!isVowel(input[i]) && input[i] !== " ") {
        newString += input[i] + "o" + input[i];
      }

      else {
        newString + input[i];
      }
    }

    return newString;
}

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

export function reverse(str){
    var newString = ""
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

export function findLongestWord(sentence){
    var longestWord = " ";
    var split = sentence.split (" ");
    for (var i = 1; i < array.length; i++) {
      if (longestWord.length < split[i].length) {
        longestWord = split[i];
      }
    }
    return longestWord;
}

/**
 * Part 6
 *
 * Write a function isPalindrome() that takes
 * a string and returns true if it's a palindrome
 * and false if it isn't.
 */

 export function isPalindrome(word) {

    if (word === reverse(word)) {
      return true;
    }
    else {
      return false;
    }

 }
