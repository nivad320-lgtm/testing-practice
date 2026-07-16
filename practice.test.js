import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
} from "./practice.js";

test("first character capitalized", () => {
    expect(capitalize("hello")).toMatch(/Hello/);
});

test("capitalize words with varying cases", () => {
    expect(capitalize("heLLo")).toMatch(/HeLLo/);
});

test("returns reversed string", () => {
    expect(reverseString("hello")).toMatch(/olleh/);
});

test("can add", () => {
    expect(calculator.add(1, 1)).toBe(2);
});

test("can subtract", () => {
    expect(calculator.subtract(1, 1)).toBe(0);
});

test("can divide", () => {
    expect(calculator.divide(4, 2)).toBe(2);
});

test("can multiply", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
});

test("caesarCipher exists", () => {
    expect(caesarCipher).toBeDefined();
});

test("shift a single character", () => {
    expect(caesarCipher("a", 1)).toMatch(/b/);
});

test("shift a string of three characters", () => {
    expect(caesarCipher("abc", 1)).toMatch(/bcd/);
});

test("works for varying cases", () => {
    expect(caesarCipher("HeLLo", 3)).toMatch(/KhOOr/);
});

test("non-alphabetical stay the same (1)", () => {
    expect(caesarCipher('Hello, World!', 3)).toMatch('Khoor, Zruog!')
})

test("non-alphabetical stay the same (2)", () => {
    expect(caesarCipher('Z!z', 3)).toMatch('A!a')
})