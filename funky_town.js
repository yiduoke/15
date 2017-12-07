var fibonacci = function(n){
    if (n===1){
        return 1;
    }
    else if (n===2){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
};

var gcd = function (a, b){
    var greatestA;
    var greatestB;
    var greatestAB;
    
    for (i = 1; i<=Math.min(a,b); i++){
        if (a % i === 0){
            greatestA = i;
        }
        if (b % i === 0){
            greatestB = i;

            if (greatestA === greatestB){
                greatestAB = i;
            }
        }
    }
    return greatestAB;
};

var randomStudent = function (){
    var list = ["margaret", "pasha", "daniel", "yuja", "jane", "md", "michelle", "penn", "elaine", "darren"];
    return list[Math.round(Math.random()*list.length)];
};