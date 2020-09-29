
exports.min = function min (array = [0]) {
    array.map(elem => {if (elem < array[0]) array[0] = elem});
    return array.length == 0 ? 0 : array[0];
}

exports.max = function max (array = [0]) {
    array.map(elem => {if (elem > array[0]) array[0] = elem});
    return array.length == 0 ? 0 : array[0];
}

exports.avg = function avg (array = [0]) {
    let sum = 0;
    array.map(elem => sum += elem);
    return array.length == 0 ? 0 : sum/array.length;
}
