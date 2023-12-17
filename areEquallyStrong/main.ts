function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean{
    if(yourLeft < 0 || yourLeft > 20) return false; 
    if(yourRight < 0 || yourRight > 20) return false; 
    if(friendsLeft < 0 || friendsLeft > 20) return false; 
    if(friendsRight < 0 || friendsRight > 20) return false; 

    const ys = yourLeft >= yourRight ? yourLeft : yourRight
    const yw = yourLeft <= yourRight ? yourLeft : yourRight
    const fs = friendsLeft >= friendsRight ? friendsLeft : friendsRight
    const fw = friendsLeft <= friendsRight ? friendsLeft : friendsRight
    
    return ys === fs && yw === fw;
}


console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))

