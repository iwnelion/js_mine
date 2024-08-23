function countChar(str, chr){
 let counted=0;
 for(let i=0; i<str.length; i++){
    if(str[i]==chr){
      counted+=1;
    }
 }
 return counted;
}
function countBs(str){
  return countChar(str, 'B');
}
console.log(countBs("BOB"));
console.log(countChar("meooow",'o'));
