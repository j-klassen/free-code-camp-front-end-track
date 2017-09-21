/**
 * Return the factorial of the provided integer.
 * If the integer is represented with the letter n, a factorial is the
 * product of all positive integers less than or equal to n.
 * @param {number} num=0 Integer
 * @returns {number}
 */
const factorialize = (num = 0) => (num === 0 ? 1 : num * factorialize(num - 1));

export default factorialize;
