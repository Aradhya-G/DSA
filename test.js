var mergeAlternately = function(word1, word2) {
    //write your logic here, return the merged string
        let arr =[]
        s=""
     word1=word1.split("")
     word2=word2.split("")
    while(word1.length&&word2.length){
        arr.push(word1.shift())
        arr.push(word2.shift())
    }
    while(word1.length){
        arr.push(word1.shift())
    }
    while(word2.length){
        arr.push(word2.shift())
    }
    for(i=0;i<arr.length;i++){
        s=s+arr[i]
    }
    return s
};
let a="abcd"
let b="de"
console.log(mergeAlternately(a,b))