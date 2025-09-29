// 1. Convert the string "258.90" to: (a) integer, (b) floating number. Store in two variables.
var a = parseInt("258.90", 10);
var b = parseFloat("258.90", 10);
console.log(a + " " + b);
//_______________________________

// 2. Format the number 7.45678 to exactly 2 decimal places (string) then convert it back to a number.
var a = 7.45678;
a.toFixed(2);
console.log(a);
//_______________________________

// 3. Check if the value 'abc' is NaN. Also show a case where isNaN returns false for a non-number.
function checkNaNValue(str){
    if(isNaN(str)){
        return true;
    }
    return false;
}

console.log(checkNaNValue("abc"));
console.log(checkNaNValue("123"));

//________________________________

// 4. Floating point: Show that (0.1 + 0.2) != 0.3. Produce a corrected decimal string with exactly 1 decimal place using toFixed.
console.log((0.1 + 0.2).toFixed(1) == 0.3);
//________________________________

// 5. Write a function to safely parse a string that may contain trailing text (e.g. "120px") returning the integer part or null if it starts with non-digit.
safelyParse = (str) =>{
    if(isNaN(str)){return null;}
    return Number.parseInt(str);
}
//________________________________

//6. Implement isFiniteNumber(value) that returns true only for finite numeric values (reject numeric strings, Infinity, NaN, null, etc.) WITHOUT using Number.isFinite. Provide 4 passing and 4 failing test examples (comments).
isFiniteNumber = (value)=>{
    if(value === Infinity || value !== NaN || value == null){ return false }
    if(typeof value == typeof NaN){ return true; }
    return false;
}
//________________________________

// 7. Remove leading and trailing spaces from the string "   hello world  ".
var m = "  Hello World  ";
console.log(m.trim());
// _______________________________

// 8. Get the substring "script" from "javascript" using two different methods (slice + substring).
script.slice("script");
script.slice(4);
script.substring(4);

//_______________________________

// 9. Count how many times the varter 'a' appears in "Banana Mania" (case-insensitive).

var count = 0;
var c = "Banana Mania";
for(var i in c){
    if(c[i] == "a"){count++;}
}
console.log(count);
// OR
"Banana Mania".split("").filter((char)=>{var count = 0; if(char == "a"){ count += 1; } return count});

// _____________________________

// 10. Write a function reverseString(s) without using array reverse (iterate backwards).
reverseString = (s) => {
    var news = ""
    for(var i = s.length - 1; i >= 0; i--){
        news += s[i];
    }
    return news;
}
// _____________________________

// 11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".
var capitalizeWords = (sentence)=>{
    return sentence.toUpperCase();
}
//_______________________________

// 12. Extract the domain (without protocol and path) from a URL string like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.
var link = "https://example.com/path/to/page";
link = link.trim("/")
console.log(link[2]);

// _______________________________

//13. Implement a simple substring search function naiveIndexOf(haystack, needle) that returns first index or -1 (do not call built-in indexOf inside the loop).
const naiveIndexOf = (haystack, needle)=>{

}

//14. Buggy code: var s = 'hello'; if (s.toUpperCase = 'HELLO') { console.log('match'); }  // Fix and explain issue.
var s = 'hello'; if (s.toUpperCase() == 'HELLO') { console.log('match'); }
// _________________________________

// 15. Create an array of the numbers 1..5, then push 6 and unshift 0.
// 16. Remove the last element and store it. Remove the first element and store it.

var arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);

var last = arr.pop();
var first = arr.shift();
// ___________________________________

// 17. Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array.
var arr1 = [10, 20, 30, 40, 50]
var arr2 = []
arr2 = arr1.slice(0, 3);
console.log(arr2);

//_________________________________

// 18. Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].

arr1 = [1, 2, 3, 4, 5]
arr1.splice(2, 2, 'a', 'b');
console.log(arr1)

//________________________________

// 19. Demonstrate the difference between slice and splice on the same starting array (show original after each).
//slice(start, end) -> returns a new array original is unchanged.
//splice(start, devareCount) -> removes elements from the original array, modifying it.

//_________________________________

// 20. Create a sparse array by assigning index 7 on a fresh [] then log length.
arr1 = []
arr1[7] = "Say My Name";
console.log(arr1);

// _______________________________

//21. Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).

const compact = (array)=>{
    var newArr = [];
    for(var i=0; i < array.length; i++){
        if(array[i]){
            newArr.push(array[i]);
        }
    }
    return newArr;
}

// ______________________________

// 22. Implement a manual array clone deepClone1D(a) for a 1D array without using slice/concat .

var deepClone1D = (a)=> {
    var a2 = []
    for(var i=0; i<a.length; i++){
        a2.push(a[i]);
    }
    return a2;
}

// 23. Map [1,2,3] to their squares using map.
[1, 2, 3].map((value)=>{
    return value ** 2;
});

// -----------------------------

// 24. Filter [5,10,15,20] to keep values >= 12.
[5,10,15,20].filter((value)=>{
    if(value >= 12){return value;}
})
//------------------------------

// 25. Reduce [2,4,6] to product.
[2,4,6].reduce((acc, cur)=>{
    return acc * cur;
}, 1);

// -----------------------------

// 26. Implement arraySum(a) using reduce; then implement arraySumLoop(a) using a for loop. Confirm outputs equal.
function arraySum(a) {
    return a.reduce(function(sum, value) {
        return sum + value;
    }, 0);
}
//-------------------------------

//27. Given ['Ali','Sara','Kareem'] produce ['A','S','K'] (first varters) without using map (use for loop).
var names = ['Ali','Sara','Kareem'];
var initials = [];

for (var i = 0; i < names.length; i++) {
    initials.push(names[i][0]);
}

console.log(initials);

//_______________________

//28. Implement unique(a) returning new array with duplicates removed (no ES6 Set). Complexity target: O(n^2) acceptable; comment how to improve.
function unique(a) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if (result.indexOf(a[i]) === -1) {
            result.push(a[i]);
        }
    }
    return result;
}

console.log(unique([1,2,2,3,1]));


//_____________________


// 29. Flatten one level: flatten1([1,[2,3],[4],5]) => [1,2,3,4,5] without using concat inside a loop (manual pushing and detection of Array).
function flatten1(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (var j = 0; j < arr[i].length; j++) {
                result.push(arr[i][j]);
            }
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(flatten1([1,[2,3],[4],5]));

//_____________________

//31. Create object person with name and age; add a new property city after creation.
var person = { name: "Ali", age: 25 };
person.city = "Cairo";
console.log(person);

//_______________________

//32. Access a property via bracket notation with a dynamic key variable.
let key = "age";
let person2 = { name: "Sara", age: 22 };
console.log(person2[key]);

//_________________________

//33. Write function countKeys(obj) returning number of own enumerable properties (use for-in).
function countKeys(obj) {
    let count = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++;
        }
    }
    return count;
}


//____________________________

// 39. List (as comments) 5 different values that coerce to false in ES5.

/*
false
0
""
null
undefined
NaN
*/


// 40. safeToBoolean(v): return true only if v is strictly true, 'true', 1, or '1'; else false.
function safeToBoolean(v) {
    return v === true || v === 'true' || v === 1 || v === '1';
}

//--------------------------

// 41. Create a Date for Jan 1, 2025 00:00 local.

let d = new Date(2025, 0, 1, 0, 0, 0);
console.log(d);

//________________________

// 42. Get the current year from new Date().
let currentYear = new Date().getFullYear();
console.log(currentYear);

//________________________


//43. Write function daysBetween(d1, d2) returning whole day difference (ignore DST intricacies; ms/(1000*60*60*24)).
function daysBetween(d1, d2) {
    var diff = d2 - d1;
    if (diff < 0) {
        diff = diff * -1;
    }
    var oneDay = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff / oneDay);

    return days;
}

// ---------------------

// 44. Generate a random integer 1..100.
let rand = Math.floor(Math.random() * 100) + 1;
console.log(rand);

//__________________________

//45. Round 4.567 to nearest integer, round down, and round up (three results).

let num = 4.567;
console.log(Math.round(num)); 
console.log(Math.floor(num));
console.log(Math.ceil(num)); 

//________________________

// 46. randomIntArray(n, min, max): return array of length n with random ints (loop + push).
function randomIntArray(n, min, max) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let r = Math.floor(Math.random() * (max - min + 1)) + min;
        arr.push(r);
    }
    return arr;
}

console.log(randomIntArray(5, 10, 20));

// ____________________

// 56. parsePriceList(str): Given "Apple:2.50;Orange:1.75;Banana:3" return object {Apple:2.5, Orange:1.75, Banana:3} (strings to numbers).

function parsePriceList(str) {
    let result = {};
    let items = str.split(";");
    for (let i = 0; i < items.length; i++) {
        let parts = items[i].split(":");
        let name = parts[0];
        let price = parseFloat(parts[1]);
        result[name] = price;
    }
    return result;
}

// -----------------------

//57. filterAndSortNumbers(mixedArray): keep only finite numbers then sort ascending (provide sample input and output). Use a numeric compare fn.
function filterAndSortNumbers(mixedArray) {
    let nums = [];
    for (let i = 0; i < mixedArray.length; i++) {
        if (typeof mixedArray[i] === "number" && isFinite(mixedArray[i])) {
            nums.push(mixedArray[i]);
        }
    }
    nums.sort(function(a, b) { return a - b; });
    return nums;
}