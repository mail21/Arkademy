function createTriangle(a,b){
  if(!(a<=b)){
    return "Nilai A harus lebih besar"
  }
  let bagi = b/a
  let print="";
  for (let i = 1; i <= bagi; i++) {
    for (let j = i; j <= bagi; j++) {
      print+=" ";
    }
    for (let k=1;k<i;k++){
      print+="" + k*a;
    }
    print +=" "+(i*a)+"\n";
  }
  return print;
}
console.log(createTriangle(2,10))
console.log(createTriangle(12,10))
console.log(createTriangle(4,14))
