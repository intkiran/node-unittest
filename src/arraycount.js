
const arrayCount = (array) => {
    if (!(array) || !Array.isArray(array)) {
        throw new TypeError('arrayCount: invalid parameters provided');
    }
    const count = {};

    for (const element of array) {
        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }

    }
    return count;
}
module.exports = arrayCount;
