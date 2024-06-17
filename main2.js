'use strict';

let userInput = ""

const saveInput = (val) => {
  userInput = val // type is string
  console.log(userInput)
}

const pigLatin = (e) => {
  
  e.preventDefault()
  
  // Turn userInput into an array (of words). 
  const arr = userInput.split(" ") // returns array of strings. The argument states where each split should occur (i.e. when there is a space)
  console.log(arr)

  // Loop through each word in the array. Replace each word with another word.

  const replaceTheWord = (word) => {
    if (
      (word[0] === "a") || 
      (word[0] === "e") || 
      (word[0] === "i") || 
      (word[0] === "o") || 
      (word[0] === "u")
    ) {
      word = word + "yay"
      return word

    } else {
      word = word + word[0] // add the first character to the end (string concatenation)
      let newWord = word.slice(1, word.length)  // select everything except for the 0th index (i.e. remove the 0th index). Note that the slice method doesn't include the index from the 2nd argument in its returned value.
      newWord = newWord + "ay" // add "ay" to the end (string concatenation)
      
      return newWord
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = replaceTheWord(arr[i])
  } 

  console.log(arr)
  let answer = arr.join(' ') // convert array into a string. Separate each value in the string by a space
  console.log(answer)

  document.getElementById("answer").innerHTML = answer 
}








// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
