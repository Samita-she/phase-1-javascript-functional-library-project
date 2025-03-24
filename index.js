function myEach(collection, callback) {
    // Check if the collection is an object and convert to an array of values
    const items = Array.isArray(collection) ? collection : Object.values(collection);

    // Iterate and apply the callback
    for (let i = 0; i < items.length; i++) {
        callback(items[i]);
    }

    // Return the original collection
    return collection;
}

// Example Calls
myEach([1, 2, 3], alert);
// Alerts 1, 2, 3 (if running in a browser)

myEach({ one: 1, two: 2, three: 3 }, console.log);
// Logs 1, 2, 3 to the console

function myMap(collection, callback) {
    // Create an empty array to hold the transformed values
    const result = [];

    // Determine if the collection is an array or object
    const items = Array.isArray(collection) ? collection : Object.values(collection);

    // Iterate through each element in the collection
    for (let i = 0; i < items.length; i++) {
        // Apply the callback function to each item and push the result to the new array
        result.push(callback(items[i]));
    }

    // Return the new transformed array
    return result;
}

// Example Calls
console.log(myMap([1, 2, 3], function (num) { return num * 3; }));
// Expected Output: [3, 6, 9]

console.log(myMap({ one: 1, two: 2, three: 3 }, function (num) { return num * 3; }));
// Expected Output: [3, 6, 9]

function myReduce(collection, callback, acc) {
    // Determine if the collection is an array or object
    const items = Array.isArray(collection) ? collection : Object.values(collection);

    // If no accumulator is provided, use the first element as the initial value
    let accumulator = acc !== undefined ? acc : items[0];

    // If no accumulator was provided, start iterating from index 1; otherwise, start at index 0
    const startIndex = acc !== undefined ? 0 : 1;

    // Iterate through the collection
    for (let i = startIndex; i < items.length; i++) {
        // Update the accumulator by applying the callback
        accumulator = callback(accumulator, items[i], i, collection);
    }

    // Return the final accumulated value
    return accumulator;
}

// Example Calls
console.log(myReduce([1, 2, 3, 4], function (acc, num) { return acc + num; }, 0));
// Expected Output: 10

console.log(myReduce({ a: 1, b: 2, c: 3 }, function (acc, num) { return acc * num; }, 1));
// Expected Output: 6

function myFind(collection, predicate) {
    // Determine if the collection is an array or object
    const items = Array.isArray(collection) ? collection : Object.values(collection);

    // Iterate through the collection
    for (let i = 0; i < items.length; i++) {
        // Check if the current item satisfies the predicate condition
        if (predicate(items[i])) {
            return items[i]; // Return the first matching element
        }
    }

    // Return undefined if no match is found
    return undefined;
}

// Example Calls
console.log(myFind([1, 2, 3, 4], num => num % 2 === 0));
// Expected Output: 2 (First even number)

console.log(myFind({ a: 5, b: 10, c: 15 }, num => num > 8));
// Expected Output: 10 (First number greater than 8)

function myFilter(collection, predicate) {
    // Determine if the collection is an array or object
    const items = Array.isArray(collection) ? collection : Object.values(collection);

    // Create an empty array to store matching elements
    const result = [];

    // Iterate through the collection
    for (let i = 0; i < items.length; i++) {
        // If the current item meets the condition, add it to the result array
        if (predicate(items[i])) {
            result.push(items[i]);
        }
    }

    // Return the array of matching elements
    return result;
}

// Example Calls
console.log(myFilter([1, 2, 3, 4, 5], num => num % 2 === 0));
// Expected Output: [2, 4]

console.log(myFilter({ a: 5, b: 10, c: 15 }, num => num > 8));
// Expected Output: [10, 15]

function mySize(collection) {
    // Determine if the collection is an array or object
    const items = Array.isArray(collection) ? collection : Object.values(collection);

    // Return the length of the resulting array
    return items.length;
}

// Example Calls
console.log(mySize([1, 2, 3, 4, 5]));             // Expected Output: 5
console.log(mySize({ a: 1, b: 2, c: 3 }));         // Expected Output: 3
console.log(mySize("Hello World"));                // Expected Output: 11
console.log(mySize([]));                           // Expected Output: 0
console.log(mySize({}));                           // Expected Output: 0

function myFirst(array, n = 1) {
    // Check if the array is empty, return undefined or an empty array accordingly
    if (array.length === 0) return n === 1 ? undefined : [];

    // If n is 1, return the first element; otherwise, return the first n elements
    return n === 1 ? array[0] : array.slice(0, n);
}

// Example Calls
console.log(myFirst([1, 2, 3, 4, 5]));        // Expected Output: 1
console.log(myFirst([1, 2, 3, 4, 5], 3));     // Expected Output: [1, 2, 3]
console.log(myFirst([], 2));                  // Expected Output: []
console.log(myFirst([], 1));                  // Expected Output: undefined
console.log(myFirst([10], 5));                // Expected Output: [10]

function myLast(array, n = 1) {
    // Check if the array is empty, return undefined or an empty array accordingly
    if (array.length === 0) return n === 1 ? undefined : [];

    // If n is 1, return the last element; otherwise, return the last n elements
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

// Example Calls
console.log(myLast([1, 2, 3, 4, 5]));        // Expected Output: 5
console.log(myLast([1, 2, 3, 4, 5], 3));     // Expected Output: [3, 4, 5]
console.log(myLast([], 2));                  // Expected Output: []
console.log(myLast([], 1));                  // Expected Output: undefined
console.log(myLast([10], 5));                // Expected Output: [10]

function myKeys(object) {
    // Initialize an empty array to store the keys
    let keysArray = [];

    // Iterate over the object's properties using a for...in loop
    for (let key in object) {
        // Push each key into the keysArray
        keysArray.push(key);
    }

    // Return the array of keys
    return keysArray;
}

// Example Calls
console.log(myKeys({ name: "Sheila", age: 25, country: "Kenya" }));
// Expected Output: ["name", "age", "country"]

console.log(myKeys({}));
// Expected Output: []

console.log(myKeys({ 1: "one", 2: "two", 3: "three" }));
// Expected Output: ["1", "2", "3"]

console.log(myKeys({ isActive: true, score: 100 }));
// Expected Output: ["isActive", "score"]

function myValues(object) {
    // Initialize an empty array to store the values
    let valuesArray = [];

    // Iterate over the object's properties using a for...in loop
    for (let key in object) {
        // Push the value of each key into the valuesArray
        valuesArray.push(object[key]);
    }

    // Return the array of values
    return valuesArray;
}

// Example Calls
console.log(myValues({ name: "Sheila", age: 25, country: "Kenya" }));
// Expected Output: ["Sheila", 25, "Kenya"]

console.log(myValues({}));
// Expected Output: []

console.log(myValues({ 1: "one", 2: "two", 3: "three" }));
// Expected Output: ["one", "two", "three"]

console.log(myValues({ isActive: true, score: 100 }));
// Expected Output: [true, 100]

