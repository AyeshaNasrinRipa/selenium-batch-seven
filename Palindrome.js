function reverseString(text){
    reverse="";
    for(i=text.length-1;i>=0;i--){
        reverse+=text[i];
    }

if(reverse==text){
    console.log(`${text} is a palindrome`);
}

else{
    console.log(`${text} not a palindrome`);
}

    console.log("the out put is: "+reverse+" !!!ok");
}
reverseString("123321");