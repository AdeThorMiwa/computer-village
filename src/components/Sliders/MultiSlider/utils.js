export const _getClosest = (item, array, getDiff) => {
    var closest,
        diff;

    if (!Array.isArray(array)) {
        throw new Error("Get closest expects an array as second argument");
    }

    array.forEach(function (comparedItem, comparedItemIndex) {
        var thisDiff = getDiff(comparedItem, item);

        if (thisDiff >= 0 && (typeof diff == "undefined" || thisDiff < diff)) {
            diff = thisDiff;
            closest = comparedItemIndex;
        }
    });

    return closest;
}

export const number = (item, array) => {
    return _getClosest(item, array, function (comparedItem, item) {
      return Math.abs(comparedItem - item);
    });
}
      
export const lerp = (a, b, n) => {
    return (1 - n) * a + n * b
}