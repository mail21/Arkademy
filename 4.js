function findPhrase(kata,frasa){
  let re = new RegExp(frasa)
  console.log(re)
  var reg = /$re/gi;
  var res = kata.match(reg);
  return res.length;
}

findPhrase("bananananana","nana")
findPhrase("bananawhentothefindtothekingtothe","to")
