/**
 * This test, tests some knowledge of Regular Expressions.
 *
 * See the test for what functions you need to implement.
 */

const answers = {
    containsNumber: (a) => { return (/\d/).test(a); },
    containsRepeatingLetter: (a) => { return (/([a-zA-Z])\1/).test(a); },
    endsWithVowel: (a) => { return (/^.*[aeiouAEIOU]$/).test(a); },
    captureThreeNumbers: (a) => { let b = a.match(/\d{3}/g); return (b && b.length > 0) ? b[0] : false; },
    matchesPattern: (a) => { return (/^(\d{3})-\d{3}-\d{4}$/).test(a); },
    isUSD: (a) => { return (/^(\$)(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$/).test(a); }
}

export default answers;