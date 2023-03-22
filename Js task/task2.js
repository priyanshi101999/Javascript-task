
// Use of switch

var n=0;

switch(n){



    case 0:
        n= "Today is Sunday";
        break;


        
    case 1:
        n= "Today is Monday";
        break;

        
    case 2:
        n= "Today is Tuesday";
        break;

        
    case 3:
     n= "Today is Wednesday";
        break;

        
    case 4:
        n= "Today is Thursday";
        break;

        
    case 5:
        n= "Today is Friday";
        break;

        
    case 6:
        n= "Today is Saturday";
        break;


        default:
            n= "There is no day today";

}
console.log(n)



// Whether the number is PRIME

function isPrime(number){

    if(number<2){
        return number + " is not a prime number";
    }

    for(let i=2; i<number; i++){

        if(number%i===0){
return number + " is not a prime number";

        }
    }

    return number + " is a prime number";

}

console.log(isPrime(13))


// return object type

function type(n){

    return typeof n;

}

let i = "Priyanshi";
console.log(type(i));



//  reverse string

let x = "Priyanshi";
let y= x.length;
let reverse= " ";
for(let i= y-1; i>=0; i--) {

    reverse += x[i];
}

console.log( reverse + " is reverse of " + x)




