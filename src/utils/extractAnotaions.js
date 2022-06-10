function indexes(source, find) {
    if (!source) {
        return [];
    }
    // if find is empty string return all indexes.
    if (!find) {
        // or shorter arrow function:
        // return source.split('').map((_,i) => i);
        return source.split("").map(function (_, i) {
            return i;
        });
    }
    var result = [];
    for (let i = 0; i < source.length; ++i) {
        // If you want to search case insensitive use
        // if (source.substring(i, i + find.length).toLowerCase() == find) {
        if (source.substring(i, i + find.length) == find) {
            result.push(i);
        }
    }
    return result;
}

export default function (record, tokenData) {
    let result = [];
    for (const type of Object.keys(tokenData)) {
        tokenData[type].forEach((text) => {
            indexes(record, text).forEach((index) => {
                result.push({
                    type,
                    text,
                    index,
                });
            });
        });
    }
    return result;
}
