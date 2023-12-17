function  alphabeticShift(inputString: string): string{
    const it = inputString[Symbol.iterator]()
    console.log(it.next())
    console.log(it.next())
    return "something"
}

console.log( alphabeticShift("crazy")) // "dsbaz"