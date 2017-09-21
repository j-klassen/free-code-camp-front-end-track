/**
 * Return true if the given string is a palindrome. Otherwise, return false.
 *
 * Note: String will be converted to lower case and all non-alphanumeric
 * characters will be removed.
 * @param {string} str=''
 * @returns {boolean}
 */
const palindrome = (str = '') => {
  const clean = str.toLowerCase().replace(/[\W_]/gi, '');

  return (
    clean
      .split('')
      .reverse()
      .join('') === clean
  );
};

export default palindrome;
