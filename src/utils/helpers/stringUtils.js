/**
 * ============================================================================
 * String Utilities
 * ============================================================================
 * A collection of utility functions for string manipulation and formatting.
 */

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} str - The string to capitalize
 * @returns {string} The string with the first letter capitalized
 *
 * @example
 * capitalize('hello') // Returns: 'Hello'
 * capitalize('WORLD') // Returns: 'WORLD'
 * capitalize('') // Returns: ''
 */
export function capitalize(str) {
  if (!str || typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to title case (capitalizes first letter of each word).
 *
 * @param {string} str - The string to convert
 * @returns {string} The string in title case
 *
 * @example
 * toTitleCase('hello world') // Returns: 'Hello World'
 * toTitleCase('the quick brown fox') // Returns: 'The Quick Brown Fox'
 */
export function toTitleCase(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => capitalize(word))
    .join(' ');
}

/**
 * Truncates a string to a specified length and adds ellipsis.
 *
 * @param {string} str - The string to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @param {string} [suffix='...'] - Suffix to add when truncated
 * @returns {string} The truncated string
 *
 * @example
 * truncate('Hello World', 5) // Returns: 'Hello...'
 * truncate('Short', 10) // Returns: 'Short'
 */
export function truncate(str, maxLength, suffix = '...') {
  if (!str || typeof str !== 'string') return '';
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + suffix;
}

/**
 * Converts a string to kebab-case.
 *
 * @param {string} str - The string to convert
 * @returns {string} The string in kebab-case
 *
 * @example
 * toKebabCase('Hello World') // Returns: 'hello-world'
 * toKebabCase('camelCase') // Returns: 'camel-case'
 */
export function toKebabCase(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Converts a string to camelCase.
 *
 * @param {string} str - The string to convert
 * @returns {string} The string in camelCase
 *
 * @example
 * toCamelCase('hello world') // Returns: 'helloWorld'
 * toCamelCase('Hello-World') // Returns: 'helloWorld'
 */
export function toCamelCase(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ''));
}

/**
 * Removes all whitespace from a string.
 *
 * @param {string} str - The string to process
 * @returns {string} The string without whitespace
 *
 * @example
 * removeWhitespace('hello world') // Returns: 'helloworld'
 */
export function removeWhitespace(str) {
  if (!str || typeof str !== 'string') return '';
  return str.replace(/\s+/g, '');
}

/**
 * Checks if a string is empty or contains only whitespace.
 *
 * @param {string} str - The string to check
 * @returns {boolean} True if empty or whitespace only
 *
 * @example
 * isEmpty('') // Returns: true
 * isEmpty('   ') // Returns: true
 * isEmpty('hello') // Returns: false
 */
export function isEmpty(str) {
  return !str || str.trim().length === 0;
}

/**
 * Generates a URL-friendly slug from a string.
 *
 * @param {string} str - The string to convert
 * @returns {string} The slug
 *
 * @example
 * slugify('Hello World!') // Returns: 'hello-world'
 * slugify('My First Blog Post') // Returns: 'my-first-blog-post'
 */
export function slugify(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
