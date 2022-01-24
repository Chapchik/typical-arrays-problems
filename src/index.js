exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    let res = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] < res) {
            res = array[i];
        }
    }

    return res;
};

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    let res = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > res) {
            res = array[i];
        }
    }

    return res;
};

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    let res = 0;
    for (i = 0; i < array.length; i++) {
        res += array[i];
    }

    return res / array.length;
};
