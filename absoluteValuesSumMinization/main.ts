function absoluteValue(a: number[]): number {
    // the objective is to return the median for the array
    // to know if the array has a even length
    const isEven = a.length % 2 === 0;

    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2) ]
}

console.log(absoluteValue([2, 4, 7]));
console.log(absoluteValue([2, 4, 7, 6]));
console.log(absoluteValue([2, 4, 7, 6, 6]));
console.log(absoluteValue([2, 4, 7, 6, 6, 8]));