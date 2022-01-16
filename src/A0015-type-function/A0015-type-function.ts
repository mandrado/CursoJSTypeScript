type MapStringsCallback = (item: string) => string;

export function mapStrings(array:string[], callbackfn: MapStringsCallback): string[] {
    const newArray: string[] = [];

    for (let index = 0; index < array.length; index++) {
        newArray.push(callbackfn(array[index]));

    }
    return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, function (item: any) {
    return item.toUpperCase();
});

console.log(abcMapped);

const abcd = ['a', 'b', 'c'];
const abcdMapped = mapStrings(abc, (item) => item.toUpperCase());

console.log(abcdMapped);

