var fib = function(n){
    if (n===1){
        return 1;
    }
    else if (n===2){
        return 1;
    }
    else{
        return fib(n-1) + fib(n-2);
    }
};

var greatestDiv = function (a, b){
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