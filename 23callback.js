////a callback is function is passed as an argument to another function

// function add(a,b, consolePrint){  consolePrint is an argument to function add, which is the callback
//     const result=a+b;
//     consolePrint(result);
// }
// function consolePrint(result){
//     console.log(result);
// }

// add(10,20,consolePrint)


step1(10,function(result1,error){
    if(!error){
        step2(result1,function(result2,error){
            if(!error){
                step3(result2,function(result3,error){
                    if(!error){
                        console.log("result"+result3);
                    }
                });
            }
            
        });
    }
});

function step1(value,callback){
    callback(value+10,false);
}
function step2(value,callback){
    callback(value+10,false);
}
function step3(value,callback){
    callback(value+10,false);
}