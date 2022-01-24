exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    return array.sort((a, b) => a - b)[0];
};

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    return array.sort((a, b) => a - b)[array.length - 1];
};

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    let res = array.reduce((sum, element) => {
        return sum + element;
    }, 0);

    return res / array.length;
};
