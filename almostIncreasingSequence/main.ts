function almostIncreasingSequence(sequence: number[]): boolean{ 
    let count = 0;
  
    for(let i = 0; i< sequence.length; i++){
        if(count > 1) break;
        if(sequence[i] <= sequence[i-1]){
            count ++;
            if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false;
        }
    }
    return count < 2;
}

console.log(almostIncreasingSequence([1, 3, 1, 2]))
console.log(almostIncreasingSequence([1, 3, 2]))
console.log(almostIncreasingSequence([1, 3, 2, 2]))