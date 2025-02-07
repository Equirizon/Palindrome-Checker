const button = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const output = document.getElementById("result");

button.addEventListener('click', () => {
    const word = input.value;
    word ? palindromeEngine(word) : alert("Please input a value");
    });

const palindromeEngine = (word) => {
    let arr = Array.from(word).reverse();
    let reversed = '';

    console.log(`Reversed array: ${arr}`)

    for (const letters of arr) {
        reversed += letters;
    }

    console.log(`Word: "${word}"`);
    console.log(`Reversed word "${reversed}"`);

    if (word.length == 1 || word === reversed) {
        output.textContent = `${word} is a palindrome!`;
    }    

    else {
        output.textContent = `${word} is NOT a palindrome!`;

    }
}

console.log("done!");
