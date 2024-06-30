
// Q 133: 

//  Write a JavaScript object and convert it into a JSON string.

// Explain & TIP: JSON (JavaScript Object Notation) is a lightweight data-interchange format. It's easy
// for humans to read and write and for machines to parse and generate. Converting a JavaScript object
// into a JSON string can be done using JSON.stringify().

const person = {
    name : "Yousra" ,
    age : 22 ,
    city : "Canada" ,
} ;

 const jsonString = JSON.stringify(person) ;

 console.log(jsonString) ; //  converting an object to a JSON string, making it easy to store or transmit.

 //...........................................................................................................................

 // Q 134:

 // Take a JSON string and parse it into a JavaScript object.
// Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object. This is particularly 
//useful when dealing with data received as JSON from a web server or API.

const jsonString1 = '{" name " : "Yousra " , "age" : 22 , "city" : "Canada" }' ;

const person1 = JSON.parse(jsonString) ;

// .........................................................................................................................

// Q 135:

//Explain how you can format a JSON string with proper indentation for readability.
// Explain & TIP: JSON.stringify() can take additional parameters to format the resulting JSON string. 
//Adding an indent level as the third argument beautifies the output, making it more readable.

const Couple = {
    name : ['Yousra' , 'Hassan'] ,
    age : [23] ,
    city : ['Karachi' , 'Mardan'] ,
};

const jsonString2 = JSON.stringify(Couple , null ,2 ) ; // 2 is for white spaces.
console.log(jsonString2) ;

//............................................................................................................................

// Q 136:

//  Use console.log() to debug and track the value of a variable inside a loop.
// Explain & TIP: console.log() is an invaluable tool for developers to monitor the values of variables, the flow of
// execution, and to understand the state of their program at various points in time, especially within loops where
// values change with each iteration.

for (let i = 1 ; i<= 5 ; i++) {
    console.log(`Iteration ${i} , i value : , i `) ;
}

//........................................................................................................................

// Q 137:

//Implement a try-catch block to handle potential errors in a block of code.
// Explain & TIP: The try-catch statement marks a block of statements to try, and specifies a response, should an
// exception be thrown. It's a critical feature for robust error handling in JavaScript.

try {
    throw new Error ("Something went wrong") ;
}
catch (error) {
    console.log(error.message) ;
}

//.............................................................................................................................


// Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.
// Explain & TIP: Breakpoints are a powerful feature in browser developer tools that allow you to pause the execution 
//of your JavaScript code at a specific line. This gives you an opportunity to inspect variables,
// step through code one line at a time, and understand how your code executes in real-time.

console.log("Before Breakpoint") ;

console.log("This line has a break point set on it in a browers developer tools ");

console.log("After breakpoint") ;

//.......................................................................................................................


