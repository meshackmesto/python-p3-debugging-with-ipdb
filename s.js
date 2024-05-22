function shortcut (string) {
    let word = "";
    let str = Object.values(string).flatMap(Object.values).filter(value => value === "a" || "e" || "i" || "o" || "u").length;
     if(str !==str.length){
       console.log(word)
         return word
     }
    }
  