const button = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const output = document.getElementById("result");
const form = document.querySelector(".hidden");

button.addEventListener('click', () => {
    const word = input.value;
    word ? palindromeEngine(word) : alert("Please input a value");
    });

const palindromeEngine = (word) => {

    console.log('-- start --');
    form.classList.remove("hidden");
    const regEx = /[^a-z0-9]/ig;
    const filter = word.replace(regEx, '').toLowerCase(); //removes non-letter characters
    const arr = Array.from(filter).reverse();
    let reversed = '';

    for (const letters of arr) {
        reversed += letters;
    }

    if (word.length == 1 || filter === reversed.toLowerCase()) { //checks if word is a palindrome
        output.textContent = `"${word}" is a palindrome!`;
    }    

    else {
        output.textContent = `"${word}" is NOT a palindrome!`;
    }
}