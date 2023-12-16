function add(param1: number, param2: number): number {
    return param1 + param2;
}

function resultAdd(...args: number[]): number{
    let acc = 0;
    args.forEach(el => {
        acc += el;
    })
    return acc;
}

console.log(resultAdd(1,2,3,4,5));