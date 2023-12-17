function allLongestStrings(inputArray: string[]): string[]{
    let biggestWords: string[] = new Array();
    let biggestSize = 0;
    inputArray.forEach(
        (arr) => {
            if(arr.length === biggestSize) {
                biggestWords.push(arr)
            }
            else if(arr.length > biggestSize){
                biggestWords = []
                biggestWords.push(arr)
            }
            biggestSize = arr.length > biggestSize ?  arr.length : biggestSize;
        }
    )
    return biggestWords;
}

const inputArray =  ["aba", "aa", "ad", "vcd", "aba"]
const result = allLongestStrings(inputArray);
console.log(result)