// xify

    function xify(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        newStr = newStr + "x"; //same thing: newStr +=
    }
    
    return newStr;
}

// console.log(xify("hello"));
// console.log(xify("hi there"));


// yellingChars

    function yellingChars(str){
    let newStr = "";

        for(let i = 0; i < str.length; i++){
            newStr = newStr + str[i] + "!";
        }

    return newStr;

}

// console.log(yellingChars("goodness"));
// console.log(yellingChars("oh hello"));



// indexedChars

    function indexedChars(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        newStr = newStr + i + str[i];
    }

    return newStr;
}

// console.log(indexedChars("hello"));
// console.log(indexedChars("bye"));


// exclaim 

    function exclaim(str){
    let newStr = "";

    for(let i = 0; i < str.length-1; i++){
        newStr = newStr + str[i] + "!";
    }

    return newStr;
}

// console.log(exclaim('What are you doing? Are you a fool?'));
// console.log(exclaim('This is fine.'));


// truncate

    function truncate(str){
    let newStr = "";

    for(let i = 0; i < 15; i++){
        newStr = newStr + str[i];
    }

    return newStr;
}

// console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'));
// console.log(truncate("Well, that's just, like, your opinion man."));


// ciEmailify 
    function ciEmailify(name, lastname) {
    // console.log(name + "." + lastname + "@codeimmersives.com");
    }

    ciEmailify("colin", "jaffe");
    ciEmailify("anthony", "derosa");


// reverse - NOT CORRECT

    let myArray = ["colin"];

    console.log(myArray[myArray.reverse()]);

   

// console.log(reverse.reverse("colin"));


// onlyVowels

function onlyVowels(array){
    let newArray = "";

    for(let i = 0; i < array.length; i++){
        if(array[i] === "a" || array[i] === "e" || array[i] === "i" || array[i] === "o" || array[i] === "u"){
            newArray.push(array[i]);
        } else {
        newArray.push(""); 
    }

    return newArray;
}

console.log(onlyVowels('Colin Jaffe'));
console.log(onlyVowels('quickly'));
console.log(onlyVowels('Anthony DeRosa'));
