// 1. Factorialize a Number

// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.


let factorial1 = (num)=>{
    let factorial_Value = num
for(let i=1; i<=num;i++){
    factorial_Value = (i<num)?factorial_Value*(num - i):factorial_Value
}
console.log('Question 1')
console.log(factorial_Value)
}
factorial1(50)



// Write a function that accepts an array of 10 integers 
//(between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
let mobile_number_format = (array_of_numbers)=>{
    array_of_numbers.unshift('(');
    array_of_numbers.splice(4,0,')')
    array_of_numbers.splice(5,0,' ')
    array_of_numbers.splice(9,0,'-')
    let new_mobile_format=array_of_numbers.join('')
    console.log('Question 2')
    console.log(new_mobile_format)
}
mobile_number_format([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

//Solution 2
let mobile_number_format2 = (array_of_numbers)=>{
    let format ="(...) ...-....";
  
    for(let i=0; i<array_of_numbers.length; i++){
        format = format.replace('.',array_of_numbers[i])
        
    }
    console.log('Question 2 answer 2')
    console.log(format)
}
mobile_number_format2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])