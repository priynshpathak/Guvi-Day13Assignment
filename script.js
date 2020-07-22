function nDigitRandNumber(n){
    var rNum=Math.floor((Math.random()*10));
    if(n<1){
     return [];
   }
   else {
     const arrayFinal=nDigitRandNumber(n-1)
     arrayFinal.push(rNum);
     return arrayFinal;
   }
   
 }
 




