/*
========================================
JavaScript Practice Tasks
String + Array Methods
========================================
*/


// ========================================
// Part 1 — Basic String Tasks
// ========================================

// 1. Convert the string "javascript developer" into uppercase.
var str = "javascript developer";
var str1 = str.toUpperCase();
console.log(str1)

// 2. Convert "ANGULAR FRAMEWORK" into lowercase.
var str = "ANGULAR FRAMEWORK";
var str1 = str.toLowerCase()
console.log(str1)

// 3. Count the total number of characters in the string "Frontend Developer".
var str = "Frontend Developer";
console.log(str.length)

// 4. Check if the string "I love JavaScript" includes the word "JavaScript".
var str = "I Love JavaScript";
console.log(str.includes("JavaScript"))

// 5. Extract the word "Angular" from the string "I am learning Angular".
var str = "I am learning Angular";
console.log(str.slice(0,14))

// 6. Replace the word "React" with "Angular" in "I like React".
var str = "I like React"
console.log(str.replace("React","Augular"))


// 7. Remove extra spaces from "   Hello World   ".
var str = " Hello world ";
console.log(str.trim())

// 8. Find the position of "Script" in "JavaScript".
var str = "JavaScript"
console.log(str.indexOf("Script"))

// 9. Convert the string "hello world" into "Hello World".
var str = "hello world";
var str1 = (str.charAt(0).toUpperCase()+ str.slice(1,6) + str.charAt(6).toUpperCase()+str.slice(7))
console.log(str1)


// 10. Split the string "HTML,CSS,JavaScript,Angular" into an array.
var str = "HTML,CSS,JavaScript,Angular";
console.log(str.split(","))


// ========================================
// Part 2 — Basic Array Tasks
// ========================================

// const numbers = [10, 20, 30, 40, 50];

// 11. Add 60 at the end of the array.
var Arr = [10, 20, 30, 40, 50];
var Arr1 = Arr.push(60)
console.log(Arr)


// 12. Add 5 at the beginning of the array.

// 13. Remove the last element from the array.

// 14. Remove the first element from the array.

// 15. Find the index of value 30.

// 16. Check if the array includes value 40.

// 17. Convert the array into a string separated by "-".

// 18. Reverse the array.



// ========================================
// Part 3 — String + Array Mixed Tasks
// ========================================

// 19. Convert the string "Angular Developer" into an array of words.

// 20. Count how many words exist in "JavaScript is very powerful".

// 21. Convert "apple,banana,mango" into an array and display each fruit in uppercase.

// 22. Reverse the string "JavaScript".

// 23. Find the longest word in "I am learning Angular framework".

// 24. Convert "frontend developer" into "frontend-developer".



// ========================================
// Part 4 — Medium Level Array Tasks
// ========================================

// const products = [
//   "Laptop",
//   "Mobile",
//   "Keyboard",
//   "Mouse",
//   "Monitor"
// ];

// 25. Create a new array where every product name is in uppercase.

// 26. Find all products whose length is greater than 6 characters.

// 27. Check if the array contains "Mouse".

// 28. Convert all product names into lowercase.

// 29. Add "Headphones" after "Mobile".

// 30. Remove "Keyboard" from the array.



// ========================================
// Part 5 — Medium String Problems
// ========================================

// 31. Count how many times the letter "a" appears in "javascript developer".

// 32. Remove all spaces from "Angular Framework".

// 33. Convert "hello-world-javascript" into "hello world javascript".

// 34. Check whether "Angular" starts with "Ang".

// 35. Check whether "JavaScript" ends with "Script".

// 36. Convert "john doe" into "John Doe".

// 37. Find the first vowel in "Programming".

// 38. Reverse the order of words in "I love coding".



// ========================================
// Part 6 — Medium Array Logic
// ========================================

// const scores = [85, 92, 78, 60, 99, 70];

// 39. Find all scores greater than 80.

// 40. Count how many scores are below 75.

// 41. Create a new array where each score is increased by 5.

// 42. Find the highest score.

// 43. Find the lowest score.

// 44. Remove all scores below 70.

// 45. Check if every score is greater than 50.




