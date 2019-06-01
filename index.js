var katzDeliLine = []; // This is an empty array where peoples names & katzDeli Line Will be stored
// function takeANumber(katzDeliLine,name) {
//   katzDeliLine.push(name); // adding names of customers to the array katzDeliLine
//   var number = katzDeliLine.length; // how many customers are in the array
//   return `Welcome, ${name}. You are number ${number} in line.` //returning
// }

function takeANumber(katzDeliLine,number) {
  katzDeliLine.push(number);
  var number = katzDeliLine;
  return `Welcome You are number ${number}.`
}


function nowServing(katzDeliLine) { //  we are checking if anyone is wating on the line
  if (katzDeliLine.length <= 0) { //we are using conditional statement to say if line is lessthan equal to 0
    return "There is nobody waiting to be served!"; // print noone is waiting
  } else {
  return `Currently serving ${katzDeliLine.shift()}.`; // someone on the line, print their name and at the same time remove also remove them from line by using shift
}
}



function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) { //conditional statement
    return "The line is currently empty."
  }
  var newArray =[]; // we created new array because we want to format the customers
  for (var i = 0; i < katzDeliLine.length; i++) { //for (initializing(stat), condition, Iterate(steps)
     newArray.push( " " + (i+1) + ". " + katzDeliLine[i]);// coping the queue from katzDeliLine to our new array and also formation the way it looks
   }
    return `The line is currently:` + newArray; // print the line from our new array
}
//[sis amritpal mom]         newArray= [1. sis 2. amritpal 3. mom ]
//[0      1       2]
//[i]
