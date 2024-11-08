{
    //Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

    function removeDuplicates(arrays: number[]): number[] {
        const newArray: number[] = [];
        for (const number of arrays) {
            if (newArray.includes(number) === false) {
                newArray.push(number)
            }
        }
        return newArray;
    }
    // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
    removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
}