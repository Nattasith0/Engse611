let amount = '108';
console.log(amount, typeof amount);

// Convert string to number
//amount = parseInt(amount);
//console.log(amount, typeof amount);
//NaN -> Not-a-Number value is not number

//amount = +amount;
amount = Number(amount);
console.log(amount, typeof amount);
console.log('------------');
console.log(parseInt("34"));
console.log(parseInt("-56"));
console.log(parseInt("3.14"));
console.log(parseInt("6.022e23"));
console.log(parseInt("hello1"));
console.log('------------');
console.log(Number("34"));
console.log(Number("-56"));
console.log(Number("3.14"));
console.log(Number("6.022e23"));
console.log(Number("6hello1"));


console.log('------------');
amount = 1024.67;
console.log(amount, typeof amount);

// Convert number to string
amount = amount.toString(); 
console.log(amount, typeof amount);
amount = parseInt(amount);
console.log(amount, typeof amount);
amount = String(amount); 
console.log(amount, typeof amount);

amount = 1024.67;
// Convert string to decimal
amount = parseFloat(amount);
console.log(amount, typeof amount);

console.log('------------');