function checkNumber(numb){
    if(num===0){
        return "Zero";
    }
    else if(numb>0){
        return "Positive";
    }
    else{
        return "Negative";
    }
}

let result=checkNumber(30);
console.log(result);