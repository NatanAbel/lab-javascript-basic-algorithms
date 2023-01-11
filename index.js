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


//Bonus

const longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."

const textLength = longText.length
console.log(textLength)

let matches = longText.match(/et/gi);

if (matches) {
  console.log(`The Latin word et appears ${matches.length} times`);
} else {
  console.log("There is no Latin word et appeared!!");
}



let phraseToCheck = "Race car";
const lowerPhrase = phraseToCheck.toLowerCase()

for (let i = 0; i < lowerPhrase.length ; i++) {
  if (lowerPhrase[i] === lowerPhrase[lowerPhrase.length - 1 - i]) {
    console.log(`${phraseToCheck} is palindromes`)
    break;
  } else {
    console.log(`${phraseToCheck} is not palindromes`)
    break
  }
}


