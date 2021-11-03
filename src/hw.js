///////////////////

function findPrime(...numbers) {
    let messages = []
    numbers.forEach(number=>{
        if(primeNumber(number))
            messages.push(number + " Is a prime number.");
        else
            messages.push(number + " Is a non prime number");
    })
    return messages;
}
function primeNumber(number){
    for(var i =2; i<number; i++){
        if(number %i ==0 ){
            return false;
        }
    }
    return true;
}
console.log(findPrime(3,7,8,21));

////////////////////

function friendNumber(a1,a2){
    let number1 = totalNumber(a1)
    let number2 = totalNumber(a2)
    if(number1 == a2 && number2 == a1 ){
        console.log(a1+ " and" + a2 +"friend number.")
    }else{
        console.log(a1+ " and" + a2 +" not friend number.")
    }
}

function totalNumber(number){
    let total = 0;
    for(let i = 1; i<total;i++){
        if(number % i==0){
            total += i;
        }
    }
}

friendNumber(220,284)

/////////////////////////////////////////


function perfectNumber(){
    for(let i=1 ; 1<1000; i++){
        if(totalNumber(i)==(i*2)){
            console.log(i + ": Perfect Number ")
        }
    }
}

perfectNumber()

//////////////////////////////////

function primeNumber(){
    for(let i=2;i<1000;i++){
        if(primeNumber(i)==true){
            console.log(i + ": prime number")
        }
    }
}