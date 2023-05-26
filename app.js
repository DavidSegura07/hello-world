alert("Car Enthusiast only!");
function getname(){
  let theirName = prompt("What is your name")
  return theirName;
}

function sayHi (name){
  alert("Hello there, " + name + "!" );
}
sayHi(getname());

for(let i = 0; i< 10; i++){
  let tireGuess = prompt("How many tires does a car have?");
  if (parseInt(tireGuess) == 4){
    alert("That's correct")
    break;
  }
  else{
    alert("Try again, Please put a number.")
  }
}

function rateMyPage(){
  let rating = prompt("How many stars would you rate my page?");
  for (let i = 0; i < rating; i++){
    document.write('<img class="rateMyPage" src="star.png" />');
  }
}

// const userName = prompt("what is your name?");
// if (userName == "Kassie"){
//     document.write("Hi Teach!");
//   } else if (userName == "David") {
//     document.write("Hi " + userName + "!");
//   }else if (userName == "Luke") {
//     document.write("Hi " + userName + "!");
//   } else if (userName == "Adnan") {
//     document.write("Hi " + userName + "!");
//   } else if (userName == "Dexter") {
//     document.write("Hi " + userName + "!");
//   } else if (userName == "Tonya") {
//     document.write("Hi " + userName + "!");
//   }
//   else {
//     document.write("Welcome!");
//   }
