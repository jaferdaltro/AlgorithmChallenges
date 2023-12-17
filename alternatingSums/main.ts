function alternatingSums(a: number[]): number[]{
    let sumA = 0;
    let sumB = 0;

    for(let i = 0; i < a.length; i++){
        if(i % 2 === 0){
            sumA += a[i];
        }else{
            sumB += a[i]
        }
    };
    return [ sumA, sumB ];
}



console.log(alternatingSums([50, 60, 60, 45, 70]));
console.log(alternatingSums([23, 55, 34, 87, 65]));
console.log(alternatingSums([34, 56, 89, 67, 70]));