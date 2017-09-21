/**
 * Given a string, return a new reversed string.
 * @param {string} str=''
 * @returns {string}
 */
const reverseString = (str = '') =>
  str
    .split('')
    .reverse()
    .join('');

export default reverseString;
