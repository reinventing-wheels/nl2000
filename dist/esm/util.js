export const scheme = (range) => String.fromCharCode(...Array(range).keys())
    .replace(/[^\p{Nd}\p{LC}]|[\u0530-\u1d6a\u1fbe]/ug, '');
export const convert = (radix, toRadix, input) => {
    const remainders = [];
    while (input.some(n => n > 0))
        remainders.push(divide(radix, toRadix, input));
    return remainders.reverse();
};
export const divide = (radix, divisor, input) => {
    let remainder = 0;
    for (let i = 0; i < input.length; i++) {
        const n = radix * remainder + input[i];
        input[i] = n / divisor >>> 0; // integer division
        remainder = n % divisor;
    }
    return remainder;
};
