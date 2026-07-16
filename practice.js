function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function reverseString(word) {
    return word.split("").reverse().join("");
}

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return a / b;
    },
    multiply: function (a, b) {
        return a * b;
    },
};

function caesarCipher(string, key) {
    // Turn string to an array
    let arr = string.split("");

    console.log(arr);

    // map
    let ciphered = arr
        .map((letter) => {
            // 65-90 A-Z  & 97-122 a-z
            if (letter.codePointAt(0) === 90) {
                return "A";
            } else if (letter.codePointAt(0) === 122) {
                return "a";
            } else if (
                (letter.codePointAt(0) >= 65 && letter.codePointAt(0) <= 90) ||
                (letter.codePointAt(0) >= 97 && letter.codePointAt(0) <= 122)
            ) {
                return String.fromCharCode(letter.codePointAt(0) + key);
            } else {
                return letter;
            }
        })
        .join("");

    // return mapped array
    return ciphered;
}

function analyzeArray(arr) {
    let lengthValue = arr.length;
    let average =
        arr.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
        ) / arr.length;
    let minimum = Math.min(...arr);
    let maximum = Math.max(...arr);
    return {
        average: average,
        min: minimum,
        max: maximum,
        length: lengthValue,
    };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
