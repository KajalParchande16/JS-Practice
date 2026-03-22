console.log("5"+"2");//combine two string
console.log("5"-"2");//convert string into number=>5-2=3
console.log(true +false);//1+0=1
console.log(null+1);//null behave like 0 => 0+1=1
console.log(undefined +1);// if no string involved in + operation js try to convert numeric value
// not able to convert so NaN
console.log([]+[]);//Empty array becomes empty string
// "" +""=""
console.log([]+{});
console.log("[]" +"{}");
console.log("{}" +"[]");
console.log(0==false);
console.log(null==false);
console.log(null==0);
console.log(null==undefined);
console.log(null===undefined);
console.log([]==false);//1.false=>0 2.[]=>"" 3.""=>0 4.0==0=>true
console.log([]==![]);//1 ![]=>false ,[]==false 2.false=>0,[]=>""=>0 3.0==0=>true