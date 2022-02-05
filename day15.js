//returns an array with all of the 
//integer's divisors(except for 1 and the number itself), 
//from smallest to largest.
// If the number is prime return the string '(integer) is prime' 
//EXAMPLES 
//divisors(12); // should return [2,3,4,6]
//divisors(25); // should return [5]
//divisors(13); // should return "13 is prime"
let myArray = ''

function divisors(integer) {

    for( i= 2; i < 8; i++){
        integer%i
        // if interger%i = 0 put i in an array
        if(integer% i == 0 ){
            //console.log(i)
            //myArray.pop(integer)
              myArray += i
              
               console.log(myArray)
               
           // myArray.join(i)
           // myArray.pop(1)
           // console.log(myArray)
        } 
        // if integer is a prime number return interger is a prime number
         /*else if(integer%i > 1 ){
            console.log( integer + " is a prime number")
        } */
       
    }
    return myArray
    
    
   
  

 
};
divisors(12)


