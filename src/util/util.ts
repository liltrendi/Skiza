export const isNullUndefined = (item: any): boolean => {
    try {
        return item === null || item === undefined;
    } catch (err) {
        return true;
    }
}

export const isEmptyArray = (array: []): boolean => {
    try {
        if (isNullUndefined(array)) {
            return true;
        } else {
            return !(array instanceof Array && array.length > 0);
        }
    } catch (err) {
        return true;
    }
}