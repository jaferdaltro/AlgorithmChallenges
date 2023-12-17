function areSimilar(a: number[], b: number[]): boolean{
    // This algorithm doesn't return right answer to some entries(length > 4)
    
    const c: number[] = []
    let d: number[] = []

    if(a.toString() === b.toString()) return true;

    for(let i = 0 ; i < a.length; i++){
        if(a[i] !== b[i]){
            c.push(a[i]);
            d.push(b[i]);
        }
    }
    
    d = d.reverse();

    if( c.length === 2 && (c.toString() === d.toString()) ) return true;

    return false;
}


// console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([5, 1, 2, 3, 4], [2, 1, 3, 4, 5]));
// console.log(areSimilar([1, 2, 2], [2, 1, 1]));

// console.log(areSimilar([1, 2, 3], [3, 2, 1]));
