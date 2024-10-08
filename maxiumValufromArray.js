function MaxValue(){
    const array=[12,12,43,543,12,23];
let max=array[0];
    for(i=0;i<array.length;i++){
    if(array[i]>max){
        max=array[i];
    }
   
}
console.log(max);
}

MaxValue();