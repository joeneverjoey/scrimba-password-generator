const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let generatePasswordBtn = document.querySelector("#generate-password-el")
let copyPassword1Btn = document.querySelector("#password-1-el")
let copyPassword2Btn = document.querySelector("#password-2-el")
let passwordLength = document.querySelector("#passwordLength")
let allowSymbols = document.querySelector("#allowSymbols")
let allowNumbers = document.querySelector("#allowNumbers")

generatePasswordBtn.addEventListener("click", passwordCriteriaCheck)
copyPassword1Btn.addEventListener("click", () => {copyPassword(copyPassword1Btn.textContent)})
copyPassword2Btn.addEventListener("click", () => {copyPassword(copyPassword2Btn.textContent)})

function passwordCriteriaCheck() {
    let characters = letters
    if(allowSymbols.checked) {
        characters = characters.concat(symbols);
    }
     if(allowNumbers.checked) {
        characters = characters.concat(numbers)
    }
    if(copyPassword2Btn.textContent.length >= 10) {
        copyPassword1Btn.textContent = ""
        copyPassword2Btn.textContent = ""
        generatePassword(characters, Number(passwordLength.value))
    } else {
        generatePassword(characters, Number(passwordLength.value))
    }
}

function generatePassword(array, length) {
    if(copyPassword1Btn.textContent.length < length) {
        let randomIndex1 = randomNumber(array)
        let randomIndex2 = randomNumber(array)
        copyPassword1Btn.textContent += array[randomIndex1]
        copyPassword2Btn.textContent += array[randomIndex2]
        generatePassword(array, length)
    } 
}

function randomNumber(array) {
    let randomNum = Math.floor(Math.random() * array.length)
    return randomNum
}
  //https://www.freecodecamp.org/news/copy-text-to-clipboard-javascript/
async function copyPassword(text) {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }