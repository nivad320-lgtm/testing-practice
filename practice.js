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
            return String.fromCharCode(letter.codePointAt(0) + key);
        })
        .join("");

    // return mapped array
    return ciphered;
}

export { capitalize, reverseString, calculator, caesarCipher };
