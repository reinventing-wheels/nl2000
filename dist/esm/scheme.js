export const scheme = (range) => String.fromCharCode(...Array(range).keys())
    .replace(/[^\p{Nd}\p{LC}]|[\u0530-\u1d6a\u1fbe]/ug, '');
