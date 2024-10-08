function getMax(array){
let maxv=array[0];
var i=0;
while(i<array.length){
    var currentValue=array[i];
 if(currentValue>maxv){
    maxv=array[i];
 }
i++;
}
console.log(maxv);
return maxv;
}
function getMin(array){
    let minv=array[0];
    var i=0;
    while(i<array.length){
        var currentValue=array[i];
     if(currentValue<minv){
        minv=array[i];
     }
    i++;
    }
    console.log(minv);
    return minv;
    }
function sum(array){
    maxNumber=getMax(array);
    minNumber=getMin(array);
const result=maxNumber+minNumber;
console.log("ResultL "+result);
}
    
sum([1,2,2,3,7])





