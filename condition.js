function condition(){
    const number=[0,1,"ayesha",34,56,45];
for(let i=0;i<number.length;i++){

    if(number[i]==1||typeof number[i]==="string"){
        console.log("for data ayesha "+number[i]+" ayesha");
    }
    else if(number[i]==0){
        console.log(`for data ${number[i]} siam`);
    }else{
        console.log(`for data ${number[i]} nothing`);
      
    }
}


}
condition();