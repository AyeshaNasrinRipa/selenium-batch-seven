function reverseString(text){
    reverse="";
    for(i=text.length-1;i>=0;i--){
        reverse+=text[i];
    }
    console.log("the out put is: "+reverse+" !!!ok");
}
reverseString("123321");