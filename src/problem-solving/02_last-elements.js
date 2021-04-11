/**
 * Get the last n data elements from the nested object
 *
 * See the test if you have questions
 */

export function getLastNumbers(a, idx) {
    function traverseThrougObject(a) {
        if (a && typeof a === 'object') { if (a && a.data) b.push(a.data); }
        if (a && a.next && typeof a.next === 'object') { a = a.next; traverseThrougObject(a); }
    }
    let b = [];
    traverseThrougObject(a);
    let diff = b.length - idx;
    return (diff >= 0) ? b.slice(diff) : b;
};