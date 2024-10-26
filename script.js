function firstNonRepeatedChar(str) {
    // Create an object to store character counts
    const charCount = {};

    // Count the occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character that occurs only once
    for (const char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeating character
        }
    }

    // If no non-repeating character is found, return null
    return null;
}

// Prompt for user input and alert the result
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
