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

    if (typeOf(a) || typeOf(b) || typeOf(c) === "string") {
      a = -Infinity;
    }

    else if (a > b && a > c) {
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

    if (char === "a") {
      return(true);
    }

    else if (char === "e") {
      return(true);

    }

    else if (char === "i") {
      return(true);

    }

    else if (char === "o") {
      return(true);

    }

    else if (char === "u") {
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
    for (var i = 0; i < str.length; i++) {
      if (!isVowel(str[i]) && str[i] !== " ") {
        newString += str[i] + "o" + str[i];
      }

      else {
        newString + str[i];
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
        newString +- string[i];
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
    var longestWord = array[0];
    for (var i = 1; i < array.length; i++) {
      if (longestWord.length < array[i].length) {
        longestWord = array[i];
      }
    }
    return longestWord.length;
}

/**
 * Part 6
 *
 * Write a function isPalindrome() that takes
 * a string and returns true if it's a palindrome
 * and false if it isn't.
 */

 export function isPalindrome(word) {
  for (var i = 0; i < str.length / 2; i++) {
    if (string[i] != str.length -1 -[i]) {
      return false;
    }
    else {
      return true;
    }
  }
 }
