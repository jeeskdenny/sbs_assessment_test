/**
 * Have a look at the test and implement the needed function, so the test will succeed
 */

export function sum(a) {
    return a.reduce(function (a, b) { return a + b; }, 0);
};

export function concat(a, b, c) {
    return a.concat(b, c);
};

export function count(a, v) {
    return a.filter(function (value) { return value === v; }).length;
};

export function duplicates(a) {
    let d = [];
    a.filter((e, i, b) => {
        if (b.indexOf(e) !== b.lastIndexOf(e)) {
            if (d.indexOf(e) === -1) d.push(e);
        }
    });
    return d;
};

export function square(a) {
    return a.map(b => b ** 2);
}