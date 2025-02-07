const button = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const output = document.getElementById("result");

button.addEventListener('click', () => {
    const word = input.value;
    word ? palindromeEngine(word) : alert("Please input a value");
    });

const palindromeEngine = (word) => {
    console.log('-- start --');
    const regEx = /[^a-zA-Z]/ig
    const filter = word.replace(regEx, '');
    const arr = Array.from(filter).reverse();
    let reversed = '';

    console.log(`RegEx: '${word.match(regEx)}'`);
    console.log(`Reversed array: [${arr}]`)

    for (const letters of arr) {
        reversed += letters;
    }

    console.log(`Word: '${filter}'`);
    console.log(`Reversed word: '${reversed}'`);

    if (word.length == 1 || filter === reversed) {
        output.textContent = `"${word}" is a palindrome!`;
    }    

    else {
        output.textContent = `"${word}" is NOT a palindrome!`;
    }
}

console.log("done!");
