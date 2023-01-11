// Iteration 1: Names and Input
const driver="Charlie"
console.log(`The driver's name is ${driver}`)

const hacker2= "Diana"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (driver.length > hacker2.length){
  
console.log(`The driver has the longest name, it has ${driver.length} characters`)
}else if(driver.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else{
  console.log(`Wow, you both have equally long names, ${driver.length} characters!`)
}

// Iteration 3: Loops

let upperName =""

for (let i = 0; i < driver.length; i++) {
    upperName += driver[i].toUpperCase() + " ";
}

console.log(upperName)

let reverseName = ""

for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i];
}
console.log(reverseName)


for (let i = 0; i < driver.length && i < hacker2.length; i++) {
    if (driver[i] < hacker2[i]) {
        console.log("The driver's name goes first");
        break;
    } else if (driver[i] > hacker2[i]) {
        console.log("Yo, the navigator goes first definitely");
        break;
    }else{
      console.log("What?! You both have the same name?");
      break;
    }
}
