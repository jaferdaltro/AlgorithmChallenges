function alphabeticShift(inputString: string): string {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

    let inputArray: string[] =  inputString.split('');

    for(let i = 0; i < inputArray.length; i++){
        // definir um contador para o alphabet
        let cont = 0;

        // quando não for z incrementar o z indo um caracter a frente
        if( inputArray[i] !== 'z') cont = alphabet.indexOf(inputArray[i]) + 1;

        inputArray[i] = alphabet[cont];
    }


    return inputArray.join('');
}

console.log(alphabeticShift('crazy')); // "dsbaz"
