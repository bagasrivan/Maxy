function findMatchingStrings(N, strings) {
    for (let i = 0; i < N; i++) {
        strings[i] = strings[i].toLowerCase();
    }
    
    let result = false;
    let matchFound = false;
    
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            if (strings[i] === strings[j]) {
                result = `${i + 1} ${j + 1}`;
                matchFound = true;
                break;
            }
        }
        if (matchFound) {
            break;
        }
    }
    return result;
}

let N = 5;
let strings = ['Apple', 'Banana', 'apple', 'Cherry', 'banana'];

let match = findMatchingStrings(N, strings);
if (match) {
    console.log(`Matching strings found at indices: ${match}`);
} else {
    console.log('No matching strings found.');
}
