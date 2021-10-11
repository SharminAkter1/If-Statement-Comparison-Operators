// if(something){
//   do something
// } else {
//   do something else 
// }

const id = 100;

// //Equal to 
// if(id ==100){
//   console.log('CORRECT')
// }
// else{
//   console.log('INCORRECT')
// }

// // Not Equal to 
// if(id !=101){
//   console.log('CORRECT')
// }
// else{
//   console.log('INCORRECT')
// }

// //Equal to Value & type
// if(id === 100){
//   console.log('CORRECT')
// }
// else{
//   console.log('INCORRECT')
// }

// //Equal to Value & type
// if(id !== 100){
//   console.log('CORRECT')
// }
// else{
//   console.log('INCORRECT')
// }

// // test if Undefined
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// }
// else{
//   console.log('No ID')
// }

// //Greater Or Less than
// if(id <= 100){
//   console.log('CORRECT')
// }
// else{
//   console.log('INCORRECT')
// }

// //If Else
// const color = 'yellow';

// if(color === 'red'){
//   console.log('Color is red');
// }
// else if(color === 'blue'){
//   console.log('Color is the blue');
// }
// else{
//   console.log('Color is not red or blue');
// }

//Logical Number

const name = 'Sharmin';
const age = 87;

//And &&
if(age > 0 && age < 12){
  console.log(`${name} is a child`);
}
else if(age >=13 && age <= 19){
  console.log(`${name} is a teenager`);
}
else {
  console.log(`${name} is a adult`);
}

//OR ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in race`);
}
else {
  console.log(`${name} is registered for the race`);
}

//Ternary operator
console.log(id === 100? 'CORRECT' : 'INCORRECT');

//Without Braces
if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');
  
  if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');
  
