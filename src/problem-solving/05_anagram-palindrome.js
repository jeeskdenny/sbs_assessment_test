/**
 * Check if the given string is an anagram of a palindrom
 *
 * Example
 * s = 'aabbccdd'
 * One way this can be arranged into a palindrome is abcddcba. Return true.
 *
 * Constraints
 * contains only lowercase letters in the range ascii[a..z]
 */

export function isPalindromePossible(a) {
    let palindrome = []
    for (let i = 0; i < a.length; i++) {
        let letter = a[i]
        if (palindrome.includes(letter)) {
            palindrome.splice(palindrome.indexOf(letter), 1)
        } else {
            palindrome.push(letter)
        }
    }
    return (palindrome.length < 2) ? true : false
}