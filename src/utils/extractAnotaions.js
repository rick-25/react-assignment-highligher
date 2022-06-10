function indexes(source, find) {
    if (!source) {
        return [];
    }
    if (!find) {
        return source.split("").map(function (_, i) {
            return i;
        });
    }
    var result = [];
    for (let i = 0; i < source.length; ++i) {
        if (source.substring(i, i + find.length).toLowerCase() == find.toLowerCase()) {
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
