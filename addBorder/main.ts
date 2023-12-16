function addBorder(picture: string[]): string[]{
  const lengthOfBorder = picture[0].length + 2;
  let border = '*'.repeat(lengthOfBorder);

  picture.unshift(border);
  picture.push(border);

for(let i = 1; i < lengthOfBorder - 1; i++){
    picture[i] = "*".concat(picture[i],'*');
}

  return picture;
}

console.log(addBorder(["abc", "ded"]));
