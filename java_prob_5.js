//problem number 1
var str = "hello";
var str2= "All cows eat grass";
function alpabetSoup(str) {
    console.log(str.split('').sort().join(''));
}
alpabetSoup(str)
//problem number 2
function vowelCount(str2){
    var str = str2.toLowerCase().split('');
    var sum = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] === 'a'|| 
           str[i] === 'e'||
           str[i] === 'i'||
           str[i] === 'o'||
           str[i] === 'u' ){
               sum +=1;
           }
    }
    console.log(sum);
}
vowelCount(str2);

//problem number 3

function coinDeterminer(num){
    
}