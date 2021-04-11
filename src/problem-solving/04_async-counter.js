/**
 * Export a function named 'count'.
 * It should call the given callback every 10th of a second with a increment from given start to end integer
 * Return a function to prematurely cancel the counting process.
 *
 * @param {number} start - Given to callback first
 * @param {number} end - Stop when count reached this value
 * @param {function(number): void} callback - Called after each 100ms with an increment
 * @returns {function(): void} - Cancel countdown function
 */

export function count(start, end, callback) {
    let msTimeout = [];
    function timeout() {
        if (start <= end) {
            msTimeout.push(setTimeout(() => {
                callback(start);
                start++;
                timeout();
            }, 100));
        }
    }

    const cancel = () => {
        for (let i = msTimeout.length - 1; i >= 0; i--) {
            clearTimeout(msTimeout[i]);
        }
        throw 0;
    }

    timeout();
    return cancel;
};
