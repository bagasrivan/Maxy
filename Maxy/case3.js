function isValidString(input) {
    const openingChars = "<[{(";
    const closingChars = ">]})";

    let stack = [];

    for (let i = 0; i < input.length; i++) {
        let char = input[i];

        if (openingChars.includes(char)) {
            stack.push(char);
        }
        else if (closingChars.includes(char)) {
            if (stack.length === 0 || openingChars[closingChars.indexOf(char)] !== stack.pop()) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

// Test cases
console.log(isValidString("<[{}]>"));    // true
console.log(isValidString("]<[]>"));    // false
console.log(isValidString("<[{>]}>"));  // false
console.log(isValidString("<[]{<>}>")); // true
console.log(isValidString("<>"));       // true
console.log(isValidString("<[{[()]}]>"));// true
console.log(isValidString(""));         // true (empty string is valid)
console.log(isValidString("<{[()]}"));  // false (unmatched opening bracket)
console.log(isValidString("<{[()]}>>")); // false (excess closing bracket)
