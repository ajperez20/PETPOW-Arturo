let word = "ballena";
let newWord = "_ ".repeat(word.length);
let letra = "e";

for (var i = 0; i < word.length; i++) {
    if(word[i] === letra){
        if(i === (word.length - 1) ){
            newWord = newWord.slice(0,(i*2)) + letra + newWord.slice((i*2) + 1);
        }else if (i > 0 && i < word.length){
            newWord = newWord.slice(0, i*2) + letra + newWord.slice((i*2) + 1);
        }else if(i === 0){
            newWord = newWord.slice(0,0) + letra + newWord.slice(1);
        }
    }
}

console.log(newWord);




