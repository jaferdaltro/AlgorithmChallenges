function adjacentElementsProduct(inputArray: number[]): number {
    const it = inputArray[Symbol.iterator]();
    let el = it.next();
    let maxProduct = 0;
    let previousEl = 1;

    while(!el.done){
        const product = el.value * previousEl;
        
        if(product > maxProduct) maxProduct = product;
        
        previousEl = el.value;
        el = it.next()
    }
    return maxProduct;
}



const inputArray =  [3, 6, -2, -5, 7, 5];
const result = adjacentElementsProduct(inputArray);
console.log(result);